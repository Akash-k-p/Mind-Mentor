import React, { useEffect } from 'react';
import './assets/css/dashboard.css';
import './assets/css/calender-heatmap.min.css';

const Dashboard = () => {
  useEffect(() => {
    const fetchDataAndRenderHeatmap = async () => {
      try {
        const response = await fetch('./api/entries');
        const diaryEntries = await response.json();

        // Format the data for the heatmap
        const formattedData = diaryEntries.map(entry => {
          const entryDate = new Date(entry.time_stamp);
          let polarityValue = entry.mood_id * 0.1;

          // Adjust polarity if the label is positive
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

        // Initialize heatmap (calendarHeatmap library should be available globally)
        window.calendarHeatmap.init(formattedData, div_id, color, overview, console.log);
      } catch (error) {
        console.error('Error fetching or rendering heatmap data:', error);
      }
    };

    fetchDataAndRenderHeatmap();
  }, []);

  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
            <div className="logout-btn">
              <a href="/logout">Logout</a>
            </div>
          </h1>
          <p className="lead">Your journey to a better mental state</p>
          <hr />
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-nav mx-auto navbar-container">
            <a className="nav-link active navbar-elements" aria-current="page" href="/diary">Home</a>
            <a className="nav-link navbar-elements" href="/create">New Diary</a>
            <a className="nav-link navbar-elements" href="/view">View Diaries</a>
          </div>
        </div>
      </nav>

      <div id="calendar">
        <br />
        {/* Heatmap will be rendered here */}
        <br />
      </div>

      <div id="questionnaire">
        <a id="questionnaire_btn" href="quiz-templates/quizDashboard.html" className="btn btn-outline-primary btn-lg btn-block">
          Take a Questionnaire
        </a>
      </div>

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3 author-links">
          Created by:
          <a href="https://github.com/Dominiscus1">Akash K P</a>
          <a href="https://github.com/kencford">S P Pratham</a>
          <a href="https://github.com/natpitt2393">G Gurusainath</a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
