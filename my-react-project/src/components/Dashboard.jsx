import React, { useEffect } from 'react';  // Import React and useEffect for data fetching

import { Link } from 'react-router-dom';  // Import Link for routing
import chatBotImg from '../assets/images/mhcicon.png';  // Import the chatbot image
// import moment from 'moment';
// import * as d3 from 'd3';
import calendarHeatmap from '../assets/js/calender-heatmap.min.js';  // Import the calendar heatmap library
import '../assets/css/calender-heatmap.min.css';  // Import the calendar heatmap CSS file
import SERVER_URL from '../express_url';
import initializeChatbot from '../assets/js/bot.js';  // Import the chatbot script
import { ReactSession } from 'react-client-session';  // Import ReactSession for session management
import '../assets/css/dashboard.css';  // Adjust the path to your custom CSS file
import { useNavigate } from 'react-router-dom';

function DashBoard() {  // Define the component
  const navigate = useNavigate();

  // useEffect to handle fetching data and initializing the calendar heatmap
  useEffect(() => {
    console.log("user_id at dashboard: ", ReactSession.get("user_id"));
    async function fetchDataAndRenderHeatmap() {
      console.log('Fetching data and rendering heatmap...');
      const response = await fetch(SERVER_URL + "/api/entries");
      const diaryEntries = await response.json();
      console.log(diaryEntries);

      const formattedData = diaryEntries.map(entry => {
        const entryDate = new Date(entry.time_stamp);
        let polarityValue = entry.mood_id * 0.1;
        if (entry.label && entry.label.toLowerCase() === 'positive') {
          polarityValue += 1;
        }

        return {
          date: entryDate,
          details: [{
            'mood_id': entry.mood_id,
            'label': entry.label,
            'date': entryDate,
            'value': polarityValue
          }],
          total: polarityValue
        };
      });

      const div_id = 'calendar';
      const color = '#1d39db';
      const overview = 'year';

      const print = function (val) {
        console.log(val);
      };

      // Assuming calendarHeatmap is available globally
      try {
        calendarHeatmap.init(formattedData, div_id, color, overview, print);
      }
      catch (e) {
        console.log(e);
      }
    }

    fetchDataAndRenderHeatmap();
  }, []);  // Empty dependency array to ensure this runs once on mount


  // useEffect to initialize the chatbot
  useEffect(() => {
    const cleanupChatbot = initializeChatbot();  // Call the imported function

    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
      const clockElement = document.getElementById('clock');
      if (clockElement) {
        clockElement.textContent = timeString;
      }
    }

    updateTime();  // Call once to initialize the time
    const intervalId = setInterval(updateTime, 1000);  // Update the time every secon

    return () => {
      if (cleanupChatbot) cleanupChatbot();  // Clean up if a cleanup function is returned
    };
  }, []);  // Empty dependency array to run once on mount

  return (

    <div className='video-container dashboard'>
      <video autoPlay muted loop id="background-video">
        <source src="./videp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heading">
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

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-nav mx-auto navbar-container">
            <Link className="nav-link active navbar-elements" aria-current="page" to="/dashboard">Home</Link>
            <Link className="nav-link navbar-elements" to="/newdiary">New Diary</Link>
            <Link className="nav-link navbar-elements" to="/viewdiary">View Diaries</Link>
          </div>
        </div>
      </nav> */}
       <nav className="ui">
      <center>
      <button onClick={() => navigate('/dashboard')}>Home</button>
      <button onClick={() => navigate('/newdiary')}>New Diary</button>
      <button onClick={() => navigate('/viewdiary')}>View Diary</button>
      </center>
    </nav>


      <div id="calendar">
        <br />
        {/* Calendar heatmap will be rendered in this div */}
        <br />
      </div>

      {/* Chatbot Component */}
      <div id="chatbot" className="main-card collapsed">
        <button id="chatbot_toggle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ display: "none" }}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
        <div className="main-title">
          <div>
            <svg viewBox="0 0 640 512" title="robot">
              <path fill="currentColor"
                d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
            </svg>
          </div>
          <span>
            <i className="fas fa-bug"></i> Psychiatrist Bot <i className="fas fa-bug"></i>
          </span>
        </div>

        <main className="msger-chat">
          <div className="msg left-msg">
            {/* <div className="msg-img" style={{ backgroundImage: "url(../assets/images/mhcicon.png)" }}></div> */}
            <div className="msg-img" style={{ backgroundImage: `url(${chatBotImg})` }}></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name"> Psychiatrist Bot</div>
                <div className="msg-info-time"><time id="clock"></time></div>
              </div>
              <div className="msg-text">
                Welcome to Psychiatrist, a safe and supportive space where you can share your thoughts and feelings
                without fear of judgement.
              </div>
            </div>
          </div>
        </main>
        <form className="msger-inputarea">
          <input type="text" className="msger-input" id="textInput" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </div>

      <div id="questionnaire">
        <Link id="questionnaire_btn" to="/questionnaire"
          className="btn btn-outline-primary btn-lg btn-block">Take a Questionnaire</Link>
      </div>

      <div id="questionnaire" class="recommendations">
        <Link id="questionnaire_btn" to="/recommendations"
          className="btn btn-outline-primary btn-lg btn-block">Recommended Activities</Link>
      </div>

      <div style={{ height: '10rem' }}></div>


      <div className="foot">
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
    </div>

    </div>
  );
}

export default DashBoard;  // Export the component so it can be used in other files
