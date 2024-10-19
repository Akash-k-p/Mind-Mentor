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
      {/* <div className="jumbotron jumbotron-fluid text-center main-heading"> */}
        <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
          </h1>
          <p className="lead">Your journey to a better mental state</p>

        <div className="ui">
              <button class="btn" onclick="window.location.href='/login';">Login/Sign up</button>
        </div>
          
        </div>
      </div>
    // </div>
  );
}

export default HomePage;  // Export the component so it can be used in other files
