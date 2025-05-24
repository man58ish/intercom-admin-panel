import React from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import UserInfoPanel from "../components/UserInfoPanel";
import "./ChatPage.css";

const ChatPage = () => {
  return (
    <div className="chat-container d-flex flex-grow-1">
      {/* Left: Customer List */}
      <div className="chat-customers p-3 border-end">
        <ChatList />
      </div>

      {/* Center: Chat Messages */}
      <div className="chat-messages p-3 flex-grow-1 d-flex flex-column">
        <ChatWindow />
      </div>

      {/* Right: Info Panel */}
      <div className="chat-info p-3 border-start">
        <UserInfoPanel />
      </div>
    </div>
  );
};

export default ChatPage;
