import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 d-flex flex-column">
      <Topbar />
      {children}
    </div>
  </div>
);

export default Layout;
