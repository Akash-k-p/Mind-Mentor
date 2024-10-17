import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-nav mx-auto navbar-container">
          <Link className="nav-link navbar-elements" to="/dashboard">Home</Link>
          <Link className="nav-link navbar-elements" to="/newdiary">New Diary</Link>
          <Link className="nav-link navbar-elements" to="/viewdiary">View Diaries</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
