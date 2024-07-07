import React, { useState } from "react";

const Messenger = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (text) => {
    const newMessage = {
      text: text,
      timestamp: new Date().toISOString(),
      sender: "user", // You can expand this to handle different senders
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="messenger-container">
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <MessageInput onSubmit={handleMessageSubmit} />
    </div>
  );
};

const Message = (message) => {
  const { text, timestamp, sender } = message;
  const messageClass = sender === "user" ? "user-message" : "other-message";

  return (
    <div className={`message ${messageClass}`}>
      <div className="message-text">{text}</div>
      <div className="message-timestamp">{timestamp}</div>
    </div>
  );
};

const MessageInput = (onSubmit) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      onSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-form">
      <input
        type="text"
        placeholder="Type your message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Messenger;
