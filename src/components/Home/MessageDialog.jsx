import { useState, useEffect, useRef } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { badWords } from "./BadWords";
import AutoDelete from "./AutoDelete"; // Import AutoDeleteMessages component

const MessageDialog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBeKindWarning, setShowBeKindWarning] = useState(false);
  const [showBadWordModal, setShowBadWordModal] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [isSending, setIsSending] = useState(false); // Initialize isSending state

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      setUser(authUser);
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          // If user data does not exist, create a new document
          await setDoc(userDocRef, {
            badWordOffenses: 0,
            isRestricted: false,
          });
        }

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

    const containsBadWord = badWords.some((word) =>
      newMessage.toLowerCase().includes(word)
    );

    if (containsBadWord) {
      setShowBadWordModal(true);
      return;
    }

    if (newMessage.trim() !== "") {
      setIsSending(true); // Set isSending to true when sending starts

      try {
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
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsSending(false); // Set isSending back to false after sending completes
      }
    }
  };

  const resetDialog = () => {
    setMessages([]);
    setNewMessage("");
    setIsVisible(false);
  };

  const handleCloseModal = () => {
    setShowBadWordModal(false);
  };

  const handleMessageClick = (messageId) => {
    setSelectedMessageId((prevSelectedMessageId) =>
      prevSelectedMessageId === messageId ? null : messageId
    );
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
                messages[index + 1]?.uid !== msg.uid;
              const messageTime = msg.createdAt
                ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )
                : "";

              return (
                <div
                  key={msg.id}
                  className={`flex ${
                    isCurrentUser ? "justify-end" : "justify-start"
                  } mb-2`}
                  onClick={() => handleMessageClick(msg.id)}
                >
                  {isCurrentUser ? (
                    <div className="flex items-end">
                      <div>
                        <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                          {msg.text}
                        </div>
                        {selectedMessageId === msg.id && (
                          <div className="text-gray-500 text-xs text-right mt-1">
                            {messageTime}
                          </div>
                        )}
                      </div>
                      {isLastFromUser && (
                        <img
                          src={msg.photoURL}
                          alt="User Avatar"
                          className="w-3 h-3 rounded-full ml-2 self-end"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      {selectedMessageId === msg.id && (
                        <div className="text-gray-500 text-xs mt-1">
                          {messageTime}
                        </div>
                      )}
                      <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
                        {msg.text}
                      </div>
                      {isLastFromUser && (
                        <img
                          src={msg.photoURL}
                          alt="User Avatar"
                          className="w-3 h-3 rounded-full ml-2 self-end"
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex flex-col items-end">
            <button
              type="submit"
              onClick={handleSend}
              className={`absolute mt-3 me-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!newMessage.trim() || isSending} // Disable based on sending state
            >
              <HiPaperAirplane />
            </button>
            <form onSubmit={handleSend} className="flex w-full">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="border w-full rounded-lg border-gray-300 focus:border-blue-500 p-2 resize-none"
                rows="2"
              ></textarea>
            </form>
          </div>
        </div>
      )}

      {/* Bad Word Modal */}
      {showBadWordModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-Lato-Bold text-Light-Red mb-2 ">
              Warning: Inappropriate Language Detected
            </h2>
            <p className="mb-4 text-black">
              Please refrain from using inappropriate language.
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <AutoDelete />
    </div>
  );
};

export default MessageDialog;
