import React from 'react';
import './assets/css/view_entry.css';

const ViewDiaryEntry = () => {
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

      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-nav mx-auto navbar-container">
            <a className="nav-link navbar-elements" href="/diary">
              Home
            </a>
            <a className="nav-link navbar-elements" href="/create">
              New Diary
            </a>
            <a className="nav-link active navbar-elements" aria-current="page" href="/view">
              View Diaries
            </a>
          </div>
        </div>
      </nav>

      {/* Diary container - Entries will be displayed here */}
      <div id="diary-container">
        {/* You can dynamically add diary entries or a delete button here */}
        {/* <button className="btn btn-danger" onClick={deleteEntry}>Delete Entry</button> */}
      </div>

      {/* Footer */}
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3 author-links">
          Created by:{" "}
          <a href="https://github.com/Dominiscus1">Akash K P</a>{" "}
          <a href="https://github.com/kencford">S P Pratham</a>{" "}
          <a href="https://github.com/natpitt2393">G Gurusainath</a>
        </div>
      </footer>
    </div>
  );
};

export default ViewDiaryEntry;
