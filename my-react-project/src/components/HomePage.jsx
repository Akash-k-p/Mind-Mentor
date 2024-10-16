import React from 'react';  // Import React
import '../assets/css/index.css';  // Adjust the path to your custom CSS file
import { Link } from 'react-router-dom';

function HomePage() {  // Define the component
  return (
    <div className="video-container homepage">
       <video autoPlay muted loop id="background-video">
            <source src="./videp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <div className="jumbotron jumbotron-fluid text-center main-heading">
        <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
          </h1>
          <p className="lead">Your journey to a better mental state</p>
          <hr className="my-4" />
          <Link className="btn btn-primary btn-lg mt-4" to="/login" role="button">
            Login/Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;  // Export the component so it can be used in other files
