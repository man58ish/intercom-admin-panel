import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaComments,
  FaTachometerAlt,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";
import "./Sidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sidebar = () => {
  const [show, setShow] = useState(true); // Desktop sidebar show/hide toggle

  // Function to close the Bootstrap offcanvas
  const handleMobileNavClick = () => {
    const offcanvasEl = document.getElementById("offcanvasSidebar");
    if (offcanvasEl && window.bootstrap) {
      const offcanvas =
        window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      offcanvas.hide();
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="btn btn-outline-primary d-md-none m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        <FaBars />
      </button>

      {/* Mobile Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn btn-outline-secondary ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ fontSize: 24, lineHeight: 1 }}
            title="Close Sidebar"
          >
            &times;
          </button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <NavLink
            to="/"
            className="nav-link sidebar-link"
            onClick={handleMobileNavClick}
          >
            <FaTachometerAlt className="me-2" /> Dashboard
          </NavLink>
          <NavLink
            to="/chat/1"
            className="nav-link sidebar-link"
            onClick={handleMobileNavClick}
          >
            <FaComments className="me-2" /> Chats
          </NavLink>
          <NavLink
            to="/settings"
            className="nav-link sidebar-link"
            onClick={handleMobileNavClick}
          >
            <FaCog className="me-2" /> Settings
          </NavLink>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`sidebar-desktop d-none d-md-flex flex-column vh-100 p-3 ${
          show ? "expanded" : "collapsed"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="btn btn-sm btn-outline-secondary mb-3 align-self-end"
          onClick={() => setShow(!show)}
          title={show ? "Collapse Sidebar" : "Expand Sidebar"}
          aria-label={show ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          <FaBars />
        </button>

        {/* Profile Section */}
        <div className="sidebar-profile d-flex align-items-center mb-4">
          <FaUserCircle className="profile-icon" />
          {show && (
            <div className="ms-2">
              <div className="fw-bold">Admin</div>
              <small>admin@example.com</small>
            </div>
          )}
        </div>

        {/* Nav Links */}
        <NavLink
          to="/"
          className="nav-link sidebar-link mb-2"
          title="Dashboard"
        >
          <FaTachometerAlt className="me-2" /> {show && "Dashboard"}
        </NavLink>
        <NavLink
          to="/chat/1"
          className="nav-link sidebar-link mb-2"
          title="Chats"
        >
          <FaComments className="me-2" /> {show && "Chats"}
        </NavLink>
        <NavLink
          to="/settings"
          className="nav-link sidebar-link mb-2"
          title="Settings"
        >
          <FaCog className="me-2" /> {show && "Settings"}
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
