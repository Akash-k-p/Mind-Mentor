import '../assets/css/create_entry.css';
import { Link } from 'react-router-dom';  // Import Link for routing
import create_entries from '../assets/js/create_entry';
import React, { useState, useEffect, useRef } from 'react';
import SERVER_URL from '../express_url';
import { ReactSession } from 'react-client-session';  // Import ReactSession for session management


const NewDiary = () => {
    const [mood, setMood] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [audioDevices, setAudioDevices] = useState([]);
    const [audioSource, setAudioSource] = useState('');
    const [recording, setRecording] = useState(false);
    const [chunks, setChunks] = useState([]);
    const [audioBlob, setAudioBlob] = useState(null);
    const [transcribedText, setTranscribedText] = useState('');
    const [analyzeResult, setAnalyzeResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const audioPlaybackRef = useRef();
    const mediaRecorderRef = useRef();

    useEffect(() => {
        // Request permission to access audio input devices
        const getAudioDevices = async () => {
            try {
                // Request access to the microphone to prompt the user for permission
                await navigator.mediaDevices.getUserMedia({ audio: true });

                // Enumerate the devices after permission is granted
                const devices = await navigator.mediaDevices.enumerateDevices();
                const audioInputDevices = devices.filter(device => device.kind === 'audioinput');
                setAudioDevices(audioInputDevices);
                setAudioSource(audioInputDevices[0]?.deviceId || '');
            } catch (err) {
                console.error('Error accessing audio devices:', err);
            }
        };

        getAudioDevices();
    }, []);

    const handleRecord = async () => {
        if (recording) {
            // Stop the media recorder
            mediaRecorderRef.current.stop();
            setRecording(false);
            console.log("Blob: ", audioBlob);
        } else {
            try {
                // Request audio stream from the user's microphone
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: { deviceId: audioSource ? { exact: audioSource } : undefined }
                });

                // Create a new MediaRecorder instance
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                try {
                    // Ensure mediaRecorder is initialized
                    if (!mediaRecorder) {
                        console.error('mediaRecorder is not initialized');
                        return;
                    }

                    // Ensure chunks are being populated
                    mediaRecorder.ondataavailable = (event) => {
                        if (event.data.size > 0) {
                            chunks.push(event.data);
                        } else {
                            console.error('No data available in event');
                        }
                    };

                    // Handle what happens when recording stops
                    mediaRecorder.onstop = () => {
                        if (chunks.length === 0) {
                            console.error('No chunks available to create audioBlob');
                        } else {
                            // Create a Blob from the collected audio chunks
                            const audioBlob = new Blob(chunks, { type: 'audio/wav' });
                            console.log('Audio Blob:', audioBlob);

                            // Reset the chunks for future recordings
                            setChunks([]);

                            // Create a URL for the Blob and assign it to the audio element
                            const audioURL = window.URL.createObjectURL(audioBlob);
                            audioPlaybackRef.current.src = audioURL;

                            // Optional: Store the Blob for other uses (e.g., uploading)
                            setAudioBlob(audioBlob);
                        }
                    };

                    // Start recording the audio
                    mediaRecorder.start();
                    setRecording(true);

                } catch (err) {
                    console.error('Error accessing audio device:', err);
                    alert('Error accessing audio device.');
                }
                
            } catch (err) {
                alert('Error accessing audio device.');
                console.error(err);
            }
        }
    };


    const handleAudioChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            setAudioBlob(file); // Save the file to state
            console.log('Selected audio file:', file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('mood_id', mood);
        formData.append('description', description);
        if (audioBlob) formData.append('audio', audioBlob);

        // Call the transcription and analysis APIs
        const transcriptionResponse = await fetch('http://localhost:5000/transcribe', {
            method: 'POST',
            body: formData,
        });

        if (transcriptionResponse.ok) {
            const resData = await transcriptionResponse.json();
            setTranscribedText(`Transcription: ${resData.transcription}`);
        } else {
            setTranscribedText('Error in transcribing');
        }

        if (description) {
            const analyzeResponse = await fetch('http://localhost:5000/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: description }),
            });

            const analyzeData = await analyzeResponse.json();
            setAnalyzeResult(`Label: ${analyzeData.label}, Polarity: ${analyzeData.polarity}`);
            formData.append('label', analyzeData.label);
            formData.append('polarity', analyzeData.polarity);
        }

        const dt = new Date();
        const mm = (dt.getMonth() + 1).toString().padStart(2, '0');
        const dd = dt.getDate().toString().padStart(2, '0');
        const yyyy = dt.getFullYear();
        const dateStr = `${mm}-${dd}-${yyyy}`;

        const now = new Date();
        const datePart = now.toISOString().split('T')[0]; // YYYY-MM-DD
        const timePart = now.toTimeString().split(' ')[0]; // HH:MM:SS
        const timeStamp = `${datePart} ${timePart}`; // Valid timestamp format

        console.log(timeStamp); // Example output: "2024-10-16 13:45:30"


        formData.append('date_created', dateStr);
        formData.append('time_stamp', timeStamp);
        formData.append('user_id', ReactSession.get('user_id'));
        console.log('user id in create entries :', ReactSession.get('user_id'));

        const response = await fetch(SERVER_URL + '/api/create', {
            method: 'POST',
            body: formData,
        });

        setLoading(false);
        if (response.ok) {
            setSuccessMessage('Your entry has been successfully added!');
        } else {
            setSuccessMessage('Error in creating entry.');
        }
    };

    return (
        <div>
            <div className="jumbotron text-center">
                <div className="container">
                    <h1 className="display-4">
                        Mental Health Tracker 💚
                        <div className="logout-btn"><a href="/logout">Logout</a></div>
                    </h1>
                    <p className="lead">Your journey to a better mental state</p>
                    <hr />
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav mx-auto navbar-container">
                        <Link className="nav-link navbar-elements" to="/dashboard">
                            Home
                        </Link>
                        <Link className="nav-link active navbar-elements" aria-current="page" to="/create">
                            New Diary
                        </Link>
                        <Link className="nav-link navbar-elements" to="/viewdiary">
                            View Diaries
                        </Link>
                    </div>
                </div>
            </nav>

            <div id="entry-form-container">
                <div id="entry-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="mood">How are you feeling?</label>
                            <select
                                name="mood"
                                id="mood"
                                value={mood}
                                onChange={(e) => setMood(e.target.value)}
                            >
                                {/* Options for mood */}
                                <option value={1}>Worst Day Ever</option>
                                <option value={2}>Really Bad</option>
                                <option value={3}>Sad</option>
                                <option value={4}>Not Good</option>
                                <option value={5}>Adequate</option>
                                <option value={6}>Pretty Good</option>
                                <option value={7}>Good</option>
                                <option value={8}>Happy</option>
                                <option value={9}>Elated</option>
                                <option value={10}>Best Day Ever</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Mood Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter Mood Title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text-area">Mood Description</label>
                            <textarea
                                className="form-control"
                                id="text-area"
                                rows="12"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter mood description here"
                            ></textarea>
                        </div>

                        <input
                            type="file"
                            id="audio"
                            accept="audio/*"
                            onChange={handleAudioChange} // Event listener for file input
                        />
                        {audioBlob && <p>Audio file selected: {audioBlob.name}</p>}

                        <div id="audio-recording">
                            <button type="button" onClick={handleRecord} className="btn btn-secondary">
                                {recording ? 'Stop' : 'Record'}
                            </button>
                            <audio ref={audioPlaybackRef} controls></audio>
                            <label htmlFor="audio-source">Select Audio Source:</label>
                            <select
                                id="audio-source"
                                value={audioSource}
                                onChange={(e) => setAudioSource(e.target.value)}
                            >
                                {audioDevices.map((device, index) => (
                                    <option key={device.deviceId} value={device.deviceId}>
                                        {device.label || `Microphone ${index + 1}`}
                                    </option>
                                ))}
                            </select>
                        </div>


                        {loading && (
                            <div id="loading">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary">Create Entry</button>
                    </form>

                    <p id="transcribed-text">{transcribedText}</p>
                    <p id="analyze">{analyzeResult}</p>
                    <p id="success">{successMessage}</p>
                </div>
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

export default NewDiary;

// function NewDiary() {
//     const mood_id = document.querySelector("#mood").value.trim();

//       // useEffect to initialize the chatbot
//   useEffect(() => {
//     const cleanupEntries = create_entries();  // Call the imported function


//     return () => {
//       if (cleanupEntries) cleanupEntries();  // Clean up if a cleanup function is returned
//     };
//   }, []);  // Empty dependency array to run once on mount

//     return (
//         <div>
//             <div className="jumbotron text-center">
//                 <div className="container">
//                     <h1 className="display-4">
//                         Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
//                         <div className="logout-btn"><a href="/logout">Logout</a></div>
//                     </h1>
//                     <p className="lead">Your journey to a better mental state</p>
//                     <hr />
//                 </div>
//             </div>

//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <div className="navbar-nav mx-auto navbar-container">
//                         <Link className="nav-link navbar-elements" to="/dashboard">
//                             Home
//                         </Link>
//                         <Link className="nav-link active navbar-elements" aria-current="page" to="/create">
//                             New Diary
//                         </Link>
//                         <Link className="nav-link navbar-elements" to="/view">
//                             View Diaries
//                         </Link>
//                     </div>
//                 </div>
//             </nav>

//             <div id="entry-form-container">
//                 <div id="entry-form">
//                     <label htmlFor="mood">How are you feeling?</label>
//                     <select name="mood" id="mood" value={mood_id} onChange={handleMoodChange}>
//                         <option value={1}>Worst Day Ever</option>
//                         <option value={2}>Really Bad</option>
//                         <option value={3}>Sad</option>
//                         <option value={4}>Not Good</option>
//                         <option value={5}>Adequate</option>
//                         <option value={6}>Pretty Good</option>
//                         <option value={7}>Good</option>
//                         <option value={8}>Happy</option>
//                         <option value={9}>Elated</option>
//                         <option value={10}>Best Day Ever</option>
//                     </select>

//                     {/* Title form */}
//                     <form id="form-title">
//                         <div className="form-group">
//                             <label htmlFor="title"></label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="title"
//                                 placeholder="Enter Mood Title"
//                                 value={title}
//                                 onChange={handleTitleChange}
//                             />
//                         </div>
//                     </form>

//                     {/* Description form */}
//                     <form id="form-description" onSubmit={handleFormSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="text-area"></label>
//                             <textarea
//                                 className="form-control"
//                                 id="text-area"
//                                 rows="12"
//                                 placeholder="Enter mood description here"
//                                 value={description}
//                                 onChange={handleDescriptionChange}
//                             ></textarea>
//                         </div>

//                         {/* Audio input */}
//                         <input
//                             type="file"
//                             id="audio"
//                             accept="audio/*"
//                             onChange={handleAudioChange}
//                         />

//                         {/* Audio recording */}
//                         <div id="audio-recording">
//                             <button
//                                 type="button"
//                                 id="record-button"
//                                 className="btn btn-secondary"
//                                 onClick={startRecording}
//                             >
//                                 {recording ? 'Recording...' : 'Record'}
//                             </button>
//                             <audio id="audio-playback" controls></audio>

//                             <label htmlFor="audio-source">Select Audio Source:</label>
//                             <select id="audio-source"></select>
//                         </div>

//                         {/* Loading spinner */}
//                         <div id="loading">
//                             <div className="spinner-border text-primary" role="status">
//                                 <span className="visually-hidden">Loading...</span>
//                             </div>
//                         </div>

//                         {/* Submit button */}
//                         <button type="submit" className="btn btn-primary">
//                             Create Entry
//                         </button>

//                         {/* Transcribed and analyzed text */}
//                         <p id="transcribed-text"></p>
//                         <p id="analyze"></p>
//                     </form>

//                     {/* Success message */}
//                     <p id="success"></p>
//                 </div>
//             </div>


//         </div>
//     );
// }


// export default NewDiary;