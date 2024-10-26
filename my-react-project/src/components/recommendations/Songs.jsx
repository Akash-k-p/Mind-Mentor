import React, { useState } from 'react';
import '../../assets/css/recommendations/songs.css'


const Songs = () => {
  const [thought, setThought] = useState('');
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);
  const [displayMsg, setDisplayMsg] = useState('');
  const [isPrediction, setIsPrediction] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!thought || thought.length > 30) {
      setError('Thought must be within 30 words' + thought);
      return;
    }
    setError(null);

    // Send request to Flask backend
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ thought }), // Send the user's thought as JSON
      });

      const data = await response.json();

      // Check for errors from backend
      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      // Success: update state with mood, display message, and songs
      setDisplayMsg(data.moodMsg); // Use a field like moodMsg for the message
      setSongs(data.songs); // Array of songs
      setIsPrediction(true); // Switch to prediction view

    } catch (err) {
      setError('Failed to fetch from the server. Please try again.');
    }

    // Add logic to handle form submission, e.g., send `thought` to an API
  };

  const validateForm = () => {
    // Add any form validation logic if needed
  };

  const renderSongCards = () => {
    return songs.map((song, index) => (
      <div key={index} className="song-card">
        <h4>Song Name: {song[2]}</h4> {/* Assuming the third item is the song name */}
        <p>Artist: {song[3]}</p>      {/* Assuming the fourth item is the artist */}
        <p>Year of Release: {song[4]}</p> {/* Assuming the fifth item is the release year */}
      </div>
    ));
  };

  return (
    <div className="songs">
      <h1 style={{ textAlign: 'center' }}>Recommended songs to Enhance your mood</h1>
      {error && (
        <p className="errmsg">
          <strong>Error:</strong> {error}
        </p>
      )}
      {!isPrediction ? (
        <div className="container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="centered">
              <h4>Pen down your thoughts within 30 words</h4>
              <div className="group">
                <textarea
                  name="thought"
                  id="thought"
                  value={thought}
                  onChange={(e) => setThought(e.target.value)}
                ></textarea>
                <div className="bar"></div>
              </div>
            </div>
            <button type="submit" className="btn submit" onClick={validateForm}>
              Hit Me
            </button>
          </form>
        </div>) : (
        <div className="prediction-result">
          <h3>{displayMsg}</h3>
          <div className="results-container">
            {renderSongCards()} {/* Render songs as cards */}
          </div>
          <div className="start-again-div">
            <button
              className="btn start-again"
              onClick={() => setIsPrediction(false)}
            >
              Start Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Songs;
