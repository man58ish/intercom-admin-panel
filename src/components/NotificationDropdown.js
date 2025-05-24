import React, { useState, useRef, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import './NotificationDropdown.css';

const notifications = [
  { id: 1, text: 'New message from Aman Verma' },
  { id: 2, text: 'Sara Khan replied to your chat' },
  { id: 3, text: 'System update scheduled for tonight' },
];

const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="notification-dropdown-wrapper position-relative" ref={dropdownRef}>
      <button
        className="btn btn-link p-0"
        aria-label="Show notifications"
        onClick={() => setOpen((v) => !v)}
        style={{ fontSize: 22, color: 'inherit' }}
      >
        <FaBell />
        {notifications.length > 0 && (
          <span className="badge bg-danger notification-badge">{notifications.length}</span>
        )}
      </button>
      {open && (
        <div className="notification-dropdown shadow">
          <div className="dropdown-header d-flex justify-content-between align-items-center">
            <span>Notifications</span>
            <button
              className="btn btn-sm btn-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
              tabIndex={0}
            />
          </div>
          <ul className="list-unstyled mb-0">
            {notifications.length === 0 ? (
              <li className="text-muted p-2">No notifications</li>
            ) : (
              notifications.map((n) => (
                <li key={n.id} className="p-2 border-bottom">
                  {n.text}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;