import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users";
import "./ChatList.css";

const ChatList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-list p-3">
      <h5 className="mb-3">Customers</h5>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
      />
      {filteredUsers.length === 0 ? (
        <div className="text-muted text-center">No customers found.</div>
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            className="chat-item d-flex justify-content-between align-items-center p-2 mb-2 border rounded"
            onClick={() => navigate(`/chat/${user.id}`)}
            style={{ cursor: "pointer" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(`/chat/${user.id}`);
              }
            }}
            aria-label={`Open chat with ${user.name}`}
          >
            <div>
              <strong>{user.name}</strong>
              <div className="text-muted small">{user.location}</div>
            </div>
            <div className="text-end">
              <span
                className={`status-dot ${
                  user.online ? "bg-success" : "bg-secondary"
                }`}
              ></span>
              {user.unread > 0 && (
                <span className="badge bg-danger ms-2">{user.unread}</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatList;
