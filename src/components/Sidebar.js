// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/about">About Us</Link>
          </div>
        </li>
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/locations">Branches</Link>
          </div>
        </li>
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/enimities">Enimities</Link>
          </div>
        </li>
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/contact">Contact</Link>
          </div>
        </li>
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/virtualtour">Virtual Tour</Link>
          </div>
        </li>
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/profile">My Profile</Link>
          </div>
        </li>
        
        <li className="sidebar-item">
          <div className="item-container">
            <Link to="/adminlogin">Admin Login</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
