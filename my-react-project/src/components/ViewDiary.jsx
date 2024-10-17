import React, { useEffect } from 'react';
import '../assets/css/view_entry.css'; // Assuming your CSS file remains the same
import { renderDiaryEntry } from '../assets/js/view_entry'; // Import the function from view_entry.js
import { Link } from 'react-router-dom';  // Import Link for routing
import {ReactSession} from 'react-client-session'

const ViewDiary = () => {
  // let sess = ReactSession.get("user_id")
  

  useEffect(() => {
    renderDiaryEntry(); // Call the function to render entries when the component mounts
  }, []);

  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
            <div className="logout-btn">
              <a href="/logout">Logout</a>
            </div>
          </h1>
          <p className="lead">Your journey to a better mental state</p>
          <hr />
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-nav mx-auto navbar-container">
            <Link className="nav-link navbar-elements" aria-current="page" to="/dashboard">Home</Link>
            <Link className="nav-link navbar-elements" to="/newdiary">New Diary</Link>
            <Link className="nav-link active navbar-elements" aria-current="page" to="/viewdiary">View Diaries</Link>
          </div>
        </div>
      </nav>

      <div id="diary-container"></div> {/* This will be populated by renderDiaryEntry */}

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3 author-links">
          Created by:
          <a href="https://github.com/Dominiscus1">Akash K P</a>
          <a href="https://github.com/kencford">S P Pratham</a>
          <a href="https://github.com/natpitt2393">G Gurusainath</a>
        </div>
      </footer>
    </div>
  );
};

export default ViewDiary;
