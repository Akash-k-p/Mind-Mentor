import React from 'react';
import "./css/jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="heading jumbotron">
      {/* <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
            <div className="logout-btn"><a href="/logout">Logout</a></div>
          </h1>
          <p className="lead">Your journey to a better mental state</p>
          <hr />
        </div> */}
      <center>
        <h1>
          Mind Mentor <span role="img" aria-label="Memo">💚</span>
        </h1>
        <p>Your journey to a better mental state</p>
      </center>
    </div>
  );
};

export default Jumbotron;
