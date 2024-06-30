import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Inquiries = () => {
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser && authUser.email === "admin@example.com") {
        // Change to your admin email
        const q = query(collection(db, "users"), orderBy("createdAt"));
        onSnapshot(q, (snapshot) => {
          const userData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUsers(userData);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((msg) => msg.from === user.email || msg.to === user.email);
      setConversations(messagesData);
    });
  };

  const handleMessageSend = () => {
    if (selectedUser && messageInput.trim() !== "") {
      const message = {
        from: "admin@example.com", // Change to admin's email
        to: selectedUser.email,
        text: messageInput,
        createdAt: new Date(),
      };

      // Save message to Firestore
      db.collection("messages").add(message);

      // Update conversation state
      setConversations([...conversations, message]);

      // Clear input
      setMessageInput("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">User Inquiries</h1>
      <div className="flex">
        <div className="w-1/3 border-r pr-4">
          <h2 className="text-xl mb-2">Users</h2>
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                onClick={() => handleUserClick(user)}
                className="cursor-pointer mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center"
              >
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{user.email}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 pl-4">
          <h2 className="text-xl mb-2">Conversations</h2>
          <div className="h-64 overflow-y-auto bg-white p-4 border rounded">
            {selectedUser ? (
              <>
                {conversations.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-2 p-2 rounded ${
                      msg.from === selectedUser.email
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <strong>
                      {msg.from === selectedUser.email ? "User" : "Admin"}:
                    </strong>{" "}
                    {msg.text}
                  </div>
                ))}
                <div className="mt-4 flex">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full border rounded px-3 py-2 mr-2"
                  />
                  <button
                    onClick={handleMessageSend}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <p>Select a user to view their conversation</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
