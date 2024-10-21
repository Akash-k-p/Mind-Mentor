import React from 'react';
import '../assets/css/index.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="video-container homepage">
      <video autoPlay muted loop id="background-video">
        <source src="./videp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="homepage heading">
          <div className="container">
            <h1 className="display-4">
              Mind Mentor <span role="img" aria-label="Memo">💚</span>
            </h1>
            <p className="lead">Your journey to a better mental state</p>

            <div className="ui">
              <button className="btn" onClick={() => window.location.href = '/login'}>
                Login/Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
