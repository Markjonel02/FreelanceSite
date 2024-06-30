import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Inquiries = () => {
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser && authUser.email === "itsmepiglet05@gmail.com") {
        const usersRef = collection(db, "users");
        const messagesRef = collection(db, "messages");

        // Fetch all users
        onSnapshot(usersRef, (snapshot) => {
          const userData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUsers(userData);
        });

        // Fetch messages where the admin is involved
        const q = query(
          messagesRef,
          orderBy("createdAt"),
          where("from", "==", authUser.email).orWhere(
            "to",
            "==",
            authUser.email
          )
        );
        onSnapshot(q, (snapshot) => {
          const messagesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setConversations(messagesData);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);

    // Fetch messages where either the admin or the selected user is involved
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      where("from", "in", ["itsmepiglet05@gmail.com", user.email]),
      where("to", "in", ["itsmepiglet05@gmail.com", user.email])
    );

    onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setConversations(messagesData);
    });
  };

  const handleMessageSend = () => {
    if (selectedUser && messageInput.trim() !== "") {
      const message = {
        from: "itsmepiglet05@gmail.com", // admin's email
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
    <div className="p-4 w-full h-screen">
      <h1 className="text-2xl mb-4 text-center bg-blue-primary p-4 rounded xl:text-2xl lg:text-xl sm:text-sm font-Lato-Bold tracking-wider text-white">
        User Inquiries
      </h1>
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
                <span>{user.displayName || user.email}</span>
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
                      msg.from === "itsmepiglet05@gmail.com"
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    } flex items-start`}
                  >
                    <img
                      src={msg.photoURL} // Assuming photoURL is properly set in Firestore
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <strong>{msg.displayName}</strong>
                      <p>{msg.text}</p>
                    </div>
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
