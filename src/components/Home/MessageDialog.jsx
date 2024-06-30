/* import { useState, useEffect, useRef } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const MessageDialog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);
  const [showTimestamp, setShowTimestamp] = useState(false); // State for showing timestamp
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (authUser) {
        const q = query(collection(db, "messages"));
        onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .sort((a, b) => a.createdAt - b.createdAt); // Sort by createdAt in ascending order

          setMessages(msgs);
          setShowTimestamp(msgs.length === 0); // Show timestamp only if no messages
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
        createdAt: new Date(), // Include timestamp when the message is sent
      });
      setNewMessage("");
      setShowTimestamp(false); // Hide timestamp after sending a message
    }
  };

  const resetDialog = () => {
    setMessages([]);
    setNewMessage("");
    setIsVisible(false);
    setShowTimestamp(true); // Show timestamp when resetting dialog
  };

  const splitMessage = (msg) => {
    const chunks = [];
    let remainingText = msg.trim();
    while (remainingText.length > 0) {
      const chunk = remainingText.substring(0, 20);
      chunks.push(chunk);
      remainingText = remainingText.substring(chunk.length).trim();
    }
    return chunks;
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={toggleChat}
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
        </button>a

        {isVisible && (
          <>
            <div className="fixed bottom-36 z-20 right-10 w-80 p-4 bg-white shadow-lg bg-opacity-90 backdrop-blur-lg rounded-lg border border-gray-300">
              <div className="flex flex-col space-y-2 h-64 overflow-y-auto">
                <div className="relative header bg-blue-primary w-full"></div>
                {showTimestamp && (
                  <div className="text-xs text-gray-500 mt-2">
                    Last updated: {new Date().toLocaleString()}
                  </div>
                )}
                {messages.map((msg) => {
                  const chunks = splitMessage(msg.text);
                  const isCurrentUser = user && msg.uid === user.uid;

                  return (
                    <div
                      key={msg.id}
                      className={`${
                        isCurrentUser
                          ? "self-end bg-blue-500 text-white"
                          : "self-start bg-gray-200 "
                      } p-2 rounded-lg max-w-xs`}
                    >
                      {chunks.map((chunk, idx) => (
                        <p key={idx} className="flex flex-wrap">
                          {chunk}
                        </p>
                      ))}
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
          </>
        )}
      </div>
    </>
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
        createdAt: new Date(),
      });
      setNewMessage("");
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
          <div className="flex flex-col space-y-2 h-64 overflow-y-auto">
            {messages.map((msg) => {
              const isCurrentUser = user && msg.uid === user.uid;
              return (
                <div
                  key={msg.id}
                  className={`${
                    isCurrentUser
                      ? "self-end bg-blue-500 text-white"
                      : "self-start bg-gray-200"
                  } p-2 rounded-lg max-w-xs`}
                >
                  {msg.text}
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
