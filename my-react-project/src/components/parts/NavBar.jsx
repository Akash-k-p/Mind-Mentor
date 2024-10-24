import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/navbar.css';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="ui navbar1">
      <center>
      <button onClick={() => navigate('/dashboard')}>Home</button>
      <button onClick={() => navigate('/newdiary')}>New Diary</button>
      <button onClick={() => navigate('/viewdiary')}>View Diary</button>
      </center>
    </nav>
  );
};

export default NavBar;
