import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [displayName, setDisplayName] = useState("");
  const [emailNotifications, setEmailNotifications] = useState("Enable");
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setMessage("Settings saved!");
    // Here you could add logic to persist settings
  };

  return (
    <div className="main-content flex-grow-1">
      <div className="p-4">
        <h2>Settings</h2>
        <p>Here you can manage your preferences and configurations.</p>
        <form className="settings-form mt-4" onSubmit={handleSave}>
          <div className="mb-3">
            <label className="form-label" htmlFor="displayName">
              Display Name
            </label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="emailNotifications">
              Email Notifications
            </label>
            <select
              id="emailNotifications"
              name="emailNotifications"
              className="form-select"
              value={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.value)}
            >
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">
            Save Changes
          </button>
          {message && <div className="alert alert-success mt-3">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Settings;
