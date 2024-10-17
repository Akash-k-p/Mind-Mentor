import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron text-center">
      <div className="container">
        <h1 className="display-4">
          Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
          <div className="logout-btn"><a href="/logout">Logout</a></div>
        </h1>
        <p className="lead">Your journey to a better mental state</p>
        <hr />
      </div>
    </div>
  );
};

export default Jumbotron;
