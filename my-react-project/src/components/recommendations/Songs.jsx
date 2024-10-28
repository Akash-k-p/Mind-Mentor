// import React, { useState } from 'react';
// import '../../assets/css/recommendations/songs.css'
// import { useNavigate } from 'react-router-dom';


// const Songs = () => {
//   const [thought, setThought] = useState('');
//   const [error, setError] = useState(null);
//   const [songs, setSongs] = useState([]);
//   const [displayMsg, setDisplayMsg] = useState('');
//   const [isPrediction, setIsPrediction] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!thought || thought.length > 30) {
//       setError('Thought must be within 30 words' + thought);
//       return;
//     }
//     setError(null);

//     // Send request to Flask backend
//     try {
//       const response = await fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ thought }), // Send the user's thought as JSON
//       });

//       const data = await response.json();

//       // Check for errors from backend
//       if (!response.ok) {
//         setError(data.error || 'Something went wrong');
//         return;
//       }

//       // Success: update state with mood, display message, and songs
//       setDisplayMsg(data.moodMsg); // Use a field like moodMsg for the message
//       setSongs(data.songs); // Array of songs
//       setIsPrediction(true); // Switch to prediction view

//     } catch (err) {
//       setError('Failed to fetch from the server. Please try again.');
//     }

//     // Add logic to handle form submission, e.g., send `thought` to an API
//   };

//   const validateForm = () => {
//     // Add any form validation logic if needed
//   };

//   const renderSongCards = () => {
//     return songs.map((song, index) => (
//       <div key={index} className="song-card">
//         <h4>Song Name: {song[2]}</h4> {/* Assuming the third item is the song name */}
//         <p>Artist: {song[3]}</p>      {/* Assuming the fourth item is the artist */}
//         <p>Year of Release: {song[4]}</p> {/* Assuming the fifth item is the release year */}
//       </div>
//     ));
//   };

//   return (
//     <div className="songs video-container">
//       <video autoPlay muted loop id="background-video">
//         <source src="./videp.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="heading">
//         <center><h1>
//           Mind Mentor <span role="img" aria-label="Memo">💚</span>
//         </h1>
//           <p >Your journey to a better mental state</p>
//         </center>
//       </div>

//       <nav className="ui">
//         <center>
//           <button onClick={() => navigate('/dashboard')}>Home</button>
//           <button onClick={() => navigate('/newdiary')}>New Diary</button>
//           <button onClick={() => navigate('/viewdiary')}>View Diary</button>
//         </center>
//       </nav>

//       <h1 style={{ textAlign: 'center' }}>Recommended songs to Enhance your mood</h1>
//       {error && (
//         <p className="errmsg">
//           <strong>Error:</strong> {error}
//         </p>
//       )}
//       {!isPrediction ? (
//         <div className="container">
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="centered">
//               <h4>Pen down your thoughts within 30 words</h4>
//               <div className="group">
//                 <textarea
//                   name="thought"
//                   id="thought"
//                   value={thought}
//                   onChange={(e) => setThought(e.target.value)}
//                 ></textarea>
//                 <div className="bar"></div>
//               </div>
//             </div>
//             <button type="submit" className="hitbutton" onClick={validateForm}>
//               Hit Me
//             </button>
//           </form>
//         </div>) : (
//         <div className="prediction-result">
//           <h3>{displayMsg}</h3>
//           <div className="results-container">
//             {renderSongCards()} {/* Render songs as cards */}
//           </div>
//           <div className="start-again-div">
//             <button
//               className="btn start-again"
//               onClick={() => setIsPrediction(false)}
//             >
//               Start Again
//             </button>
//           </div>
//         </div>
//       )}

//       <footer className="foot">
//         Created by:&nbsp;&nbsp;
//         <a href="https://www.linkedin.com/in/akash-k-p" className="custom-link">Akash K P</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         <a href="https://www.linkedin.com/in/sppratham108" className="custom-link">S P Pratham</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         <a href="https://www.linkedin.com/in/ggurusainath" className="custom-link">G Gurusainath</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         <button className="lgBtn" onClick={() => navigate('/logout')}>
//           <div className="sign">
//             <svg viewBox="0 0 512 512">
//               <path
//                 d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
//               />
//             </svg>
//           </div>
//           <div className="text">Logout</div>
//         </button>
//       </footer>
//     </div>
//   )
// };

// export default Songs;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/recommendations/songs.css'


const Songs = () => {
  const [thought, setThought] = useState('');
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);
  const [displayMsg, setDisplayMsg] = useState('');
  const [isPrediction, setIsPrediction] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("button clicked .")
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
      console.log(err)
      setError(`Failed to fetch from the server. Please try again. description :${err.msg}`);
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
    <div className="songs video-container">
      <video autoPlay muted loop id="background-video">
        <source src="./videp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heading">
        <center><h1>
          Mind Mentor <span role="img" aria-label="Memo">💚</span>
        </h1>
          <p >Your journey to a better mental state</p>
        </center>
      </div>

      <nav className="ui">
        <center>
          <button onClick={() => navigate('/dashboard')}>Home</button>
          <button onClick={() => navigate('/newdiary')}>New Diary</button>
          <button onClick={() => navigate('/viewdiary')}>View Diary</button>
        </center>
      </nav>

      
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
            <button type="submit" className="ui button" onClick={validateForm}>
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

      
      <footer className="foot">
        Created by:&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/akash-k-p" className="custom-link">Akash K P</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/sppratham108" className="custom-link">S P Pratham</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/ggurusainath" className="custom-link">G Gurusainath</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="lgBtn" onClick={() => navigate('/logout')}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
          </div>
          <div className="text">Logout</div>
        </button>
      </footer>
    </div>
  );
};

export default Songs;
