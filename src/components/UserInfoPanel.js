import React from "react";
import { useParams } from "react-router-dom";
import users from "../data/users";
import "./UserInfoPanel.css";

const UserInfoPanel = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <div className="user-info-panel p-3">User not found</div>;

  return (
    <div className="user-info-panel bg-white p-3">
      <h6>{user.name}</h6>
      <p className="text-muted small mb-1">{user.email}</p>
      <p className="text-muted small mb-2">{user.location}</p>
      <div>
        <strong>Tags:</strong>
        <div className="mt-1">
          {Array.isArray(user.tags) && user.tags.length > 0 ? (
            user.tags.map((tag, i) => (
              <span key={i} className="badge bg-primary me-1">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-muted">No tags</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfoPanel;
