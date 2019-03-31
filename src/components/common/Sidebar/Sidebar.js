import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="user">
        <div className="name">David French</div>
        <p className="title">Administrator</p>
      </div>
      <div className="main-menu">
        <ul className="menu">
          <li>
            <Link to="#">Dashboard</Link>
          </li>
          <li>
            <Link to="#">Leads</Link>
          </li>
          <li>
            <Link to="#">Customers</Link>
          </li>
          <li>
            <Link to="#">Staff</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
