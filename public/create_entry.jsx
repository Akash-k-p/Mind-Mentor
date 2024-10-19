import React, { useState } from 'react';
import './assets/css/create_entry.css';
import './assets/js/create_entry.js';

const CreateEntry = () => {
  const [audioSource, setAudioSource] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');

  const handleAudioSourceChange = (event) => {
    setAudioSource(event.target.value);
  };

  const handleRecordButtonClick = () => {
    setIsRecording(!isRecording);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted');
  };

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
      {/* End Jumbotron div */}
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-nav mx-auto navbar-container">
            <a className="nav-link navbar-elements" href="/diary">Home</a>
            <a className="nav-link active navbar-elements" aria-current="page" href="/create">New Diary</a>
            <a className="nav-link navbar-elements" href="/view">View Diaries</a>
          </div>
        </div>
      </nav> 
      {/* End Navbar */}

      {/* Begin Entry Form */}
      <div id="entry-form-container">
        <div id="entry-form">
          <label htmlFor="mood">How are you feeling?</label>
          <select name="mood" id="mood">
            <option value="1">Worst Day Ever</option>
            <option value="2">Really Bad</option>
            <option value="3">Sad</option>
            <option value="4">Not Good</option>
            <option value="5">Adequate</option>
            <option value="6">Pretty Good</option>
            <option value="7">Good</option>
            <option value="8">Happy</option>
            <option value="9">Elated</option>
            <option value="10">Best Day Ever</option>
          </select>

          <form id="form-title" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="title">Mood Title</label>
              <input type="text" className="form-control" id="title" placeholder="Enter Mood Title" />
            </div>
          </form>

          <form id="form-description" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="text-area">Mood Description</label>
              <textarea className="form-control" id="text-area" rows="12" placeholder="Enter mood description here"></textarea>
            </div>
            <input type="file" id="audio" accept="audio/*" />
            
            <div id="audio-recording">
              <button type="button" id="record-button" className="btn btn-secondary" onClick={handleRecordButtonClick}>
                {isRecording ? 'Stop Recording' : 'Record'}
              </button>
              <audio id="audio-playback" controls></audio>
              
              <label htmlFor="audio-source">Select Audio Source:</label>
              <select id="audio-source" value={audioSource} onChange={handleAudioSourceChange}></select>
            </div>

            <div id="loading">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Create Entry</button>

            <p id="transcribed-text">{transcribedText}</p>
            <p id="analyze"></p> 
          </form>

          <p id="success"></p>
        </div>
      </div>
      {/* End Entry Form */}

      {/* Begin Footer */}
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

export default CreateEntry;
