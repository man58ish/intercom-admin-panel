import React, { useState, useContext, useRef, useEffect } from "react";
import "./Topbar.css";
import { FaBell, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";

const Topbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    "📩 New support ticket assigned",
    "✅ Plan upgraded by user",
    "🔔 System update available",
  ]);

  const { toggleTheme } = useContext(ThemeContext);

  // Close dropdowns when clicking outside
  const dropdownRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        openDropdown
      ) {
        setOpenDropdown(false);
      }
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target) &&
        showNotifications
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, showNotifications]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4 py-2 bg-white border-bottom position-relative">
      <h5 className="m-0">BeyondChats Admin</h5>

      <div className="d-flex align-items-center gap-3 position-relative">
        {/* Theme Toggle */}
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          🌓
        </button>

        {/* Bell icon with notification popup */}
        <div className="position-relative">
          <FaBell
            className="topbar-icon"
            onClick={() => setShowNotifications((v) => !v)}
            tabIndex={0}
            aria-label="Show notifications"
            style={{ cursor: "pointer" }}
          />
          {showNotifications && (
            <div className="notification-popup">
              {notifications.length === 0 ? (
                <p className="text-muted m-2">No notifications</p>
              ) : (
                notifications.map((note, index) => <p key={index}>{note}</p>)
              )}
              {notifications.length > 0 && (
                <button
                  className="btn btn-sm btn-link text-primary"
                  onClick={() => setNotifications([])}
                >
                  Mark all as read
                </button>
              )}
            </div>
          )}
        </div>

        {/* Profile dropdown */}
        <div
          ref={dropdownRef}
          className="profile-area"
          tabIndex={0}
          onClick={() => setOpenDropdown((v) => !v)}
          style={{ cursor: "pointer" }}
        >
          <FaUserCircle className="topbar-avatar" />
          <span className="topbar-username ms-2">Admin</span>
          <FaCaretDown className="ms-1" />
          {openDropdown && (
            <div className="dropdown-menu-topbar">
              <button onClick={() => (window.location.href = "/profile")}>
                👤 View Profile
              </button>
              <button onClick={handleLogout}>🔓 Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
