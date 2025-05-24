import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import messagesData from "../data/messages";
import users from "../data/users";
import "./ChatWindow.css";

const ChatWindow = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState(messagesData[id] || []);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Update messages when customer id changes
  useEffect(() => {
    setMessages(messagesData[id] || []);
  }, [id]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const user = users.find((u) => u.id === parseInt(id));

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      {
        from: "admin",
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="chat-window d-flex flex-column p-3">
      <h5 className="mb-3">Chat with {user?.name || "Unknown"}</h5>
      <div className="messages flex-grow-1 mb-3 overflow-auto">
        {messages.map((msg, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={index}
            className={`message-bubble ${
              msg.from === "admin" ? "admin" : "user"
            }`}
          >
            <p className="mb-1">{msg.text}</p>
            <small className="text-muted">{msg.time}</small>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="input-group" onSubmit={handleSend}>
        <input
          className="form-control"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
