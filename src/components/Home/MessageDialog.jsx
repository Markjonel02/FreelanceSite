/* import { useState, useEffect, useRef } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const MessageDialog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (authUser) {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setMessages(msgs);
          scrollToBottom();
        });
      } else {
        resetDialog();
      }
    });

    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        from: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        createdAt: new Date(),
      });
      setNewMessage("");
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };

  const resetDialog = () => {
    setMessages([]);
    setNewMessage("");
    setIsVisible(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleChat}
        onMouseEnter={handleMouseEnter}
        title={showTooltip ? "Open Chat" : ""}
        className="fixed bottom-20 right-4 bg-blue-500 text-white p-3 z-20 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </button>

      {isVisible && (
        <div className="fixed bottom-36 z-20 right-10 w-80 p-4 bg-white shadow-lg bg-opacity-90 backdrop-blur-lg rounded-lg border border-gray-300">
          <div className="flex flex-col space-y-2 h-64 overflow-y-auto mb-2">
            {messages.map((msg, index) => {
              const isCurrentUser = user && msg.uid === user.uid;
              const isLastFromUser =
                index === messages.length - 1 ||
                messages[index + 1].uid !== msg.uid;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    isCurrentUser ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    className={`${
                      isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200"
                    } p-2 rounded-lg max-w-xs`}
                  >
                    {msg.text}
                  </div>
                  {isLastFromUser && (
                    <img
                      src={msg.photoURL}
                      alt="User Avatar"
                      className="w-4 h-4 rounded-full mt-1 self-end ml-1"
                    />
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4">
            <form onSubmit={handleSend} className="flex items-center">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="border w-full rounded-lg border-gray-300 focus:border-blue-500 p-2 resize-none"
                rows="2"
              ></textarea>
              <button
                type="submit"
                className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
                disabled={!newMessage.trim()}
              >
                <HiPaperAirplane />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageDialog;
 */
import { useState, useEffect, useRef } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const MessageDialog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBeKindWarning, setShowBeKindWarning] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (authUser) {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setMessages(msgs);
          scrollToBottom();

          if (msgs.length === 0) {
            setShowBeKindWarning(true);
          } else {
            setShowBeKindWarning(false);
          }
        });
      } else {
        resetDialog();
      }
    });

    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        from: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        createdAt: new Date(),
      });
      setNewMessage("");
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };

  const resetDialog = () => {
    setMessages([]);
    setNewMessage("");
    setIsVisible(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleChat}
        onMouseEnter={handleMouseEnter}
        title={showTooltip ? "Open Chat" : ""}
        className="fixed bottom-20 right-4 bg-blue-500 text-white p-3 z-20 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </button>

      {isVisible && (
        <div className="fixed bottom-36 z-20 right-10 w-80 p-4 bg-white shadow-lg bg-opacity-90 backdrop-blur-lg rounded-lg border border-gray-300">
          {showBeKindWarning && (
            <div className="bg-yellow-100 text-yellow-800 p-2 rounded-md mb-2">
              <p className="text-sm">
                Please be kind to others. This is an open chat.
              </p>
            </div>
          )}
          <div className="flex flex-col space-y-2 h-64 overflow-y-auto mb-2">
            {messages.map((msg, index) => {
              const isCurrentUser = user && msg.uid === user.uid;
              const isLastFromUser =
                index === messages.length - 1 ||
                messages[index + 1].uid !== msg.uid;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    isCurrentUser ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    className={`${
                      isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200"
                    } p-2 rounded-lg max-w-xs`}
                  >
                    {msg.text}
                  </div>
                  {isLastFromUser && (
                    <img
                      src={msg.photoURL}
                      alt="User Avatar"
                      className="w-4 h-4 rounded-full mt-1 self-end ml-1"
                    />
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4">
            <form onSubmit={handleSend} className="flex items-center">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="border w-full rounded-lg border-gray-300 focus:border-blue-500 p-2 resize-none"
                rows="2"
              ></textarea>
              <button
                type="submit"
                className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
                disabled={!newMessage.trim()}
              >
                <HiPaperAirplane />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageDialog;
