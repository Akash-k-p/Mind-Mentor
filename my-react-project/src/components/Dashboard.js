import React from 'react';  // Import React
import '../assets/css/index.css';  // Adjust the path to your custom CSS file
import { Link } from 'react-router-dom';

function DashBoard() {  // Define the component
  return (
    <div className="jumbotron jumbotron-fluid text-center main-heading">
      <div className="container">
        <h1 className="display-4">
          Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
        </h1>
        <p className="lead">Your journey to a better mental state</p>
        <hr className="my-4" />
        <h1>Dashboard page........................................................</h1>
      </div>
    </div>
  );
}

export default DashBoard;  // Export the component so it can be used in other files
