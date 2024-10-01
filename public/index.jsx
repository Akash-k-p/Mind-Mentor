import React from 'react';
import './assets/css/index.css';

const MentalHealthTracker = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center main-heading">
        <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
          </h1>
          <p className="lead">Your journey to a better mental state</p>
          <hr className="my-4" />
          <a className="btn btn-primary btn-lg mt-4" href="/login" role="button">
            Log In/Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthTracker;
