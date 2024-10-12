var dt = new Date();
var mm = (dt.getMonth() + 1).toString().padStart(2, '0');
var dd = dt.getDate().toString().padStart(2, '0');
var yyyy = dt.getFullYear();
var dateStr = mm + "-" + dd + "-" + yyyy;
const success = document.getElementById("success");
success.textContent = "";

// Function to get audio input devices and populate a select element
async function getAudioDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const audioInputDevices = devices.filter(device => device.kind === 'audioinput');

  const audioSelect = document.getElementById("audio-source");
  audioSelect.innerHTML = ""; // Clear previous options

  audioInputDevices.forEach(device => {
    const option = document.createElement("option");
    option.value = device.deviceId;
    option.text = device.label || `Microphone ${audioSelect.length + 1}`;
    audioSelect.appendChild(option);
  });
}

//for inserting audio file
document.getElementById("audio").addEventListener("change", function() {
  const fileName = this.files[0] ? this.files[0].name : "Choose a file";
  document.getElementById("file-name").textContent = fileName;
});


// For recording audio
let chunks = [];
let mediaRecorder;

const recordButton = document.getElementById("record-button");
const audioPlayback = document.getElementById("audio-playback");
console.log("control is here :", recordButton);
recordButton.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("record button clicked");
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
    recordButton.innerHTML = "<span style='color: red; font-size: 12px; margin: 0px'>&#x1F534;</span> Record";
  } else {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support audio recording.");
      return;
    }

    try {
      console.log("inside try block");
      const audioSource = document.getElementById("audio-source").value;
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined }
      });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        console.log("data available");
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log("recording stopped")
        // document.querySelector('.title').classList.remove('hidden');
       
        const blob = new Blob(chunks, { type: "audio/wav" });
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        audioPlayback.src = audioURL;
        audioPlayback.controls = true;
        console.log("#blob", blob)
        document.getElementById("audio-playback").classList.remove('hidden');

        // Create a File object and use DataTransfer to assign it to the input
        const file = new File([blob], "recording.wav", { type: "audio/wav" });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        document.querySelector("#audio").files = dataTransfer.files;
        console.log("#audio", document.querySelector("#audio").files[0]);
      };

      mediaRecorder.start();
      recordButton.innerHTML = "&#x23F9; Stop";
    } catch (err) {
      console.error("Error accessing audio device:", err);
    }
  }
});



// Remove old function and replace it with the VoiceRecorder class

// class VoiceRecorder {
//   constructor() {
//       // Check if getUserMedia is supported
//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//           console.log("getUserMedia supported");
//       } else {
//           console.log("getUserMedia is not supported on your browser!");
//           return;
//       }

//       this.mediaRecorder = null;
//       this.stream = null;
//       this.chunks = [];
//       this.isRecording = false;

//       // Reference updated HTML elements
//       this.recorderRef = document.getElementById("audio-playback"); // Audio playback element
//       this.playerRef = document.getElementById("player");           // Player for saved recording
//       this.startRef = document.getElementById("start");             // Start recording button
//       this.stopRef = document.getElementById("stop");               // Stop recording button

//       // Attach event handlers to buttons
//       this.startRef.onclick = this.startRecording.bind(this);
//       this.stopRef.onclick = this.stopRecording.bind(this);

//       // Audio input constraints (audio only)
//       this.constraints = {
//           audio: true,
//           video: false
//       };

//       // Initially hide stop button and player
//       this.stopRef.classList.add('hidden');
//   }

//   handleSuccess(stream) {
//       this.stream = stream;
//       this.stream.oninactive = () => {
//           console.log("Stream ended!");
//       };

//       // Attach stream to recorder reference
//       this.recorderRef.srcObject = this.stream;
//       this.mediaRecorder = new MediaRecorder(this.stream);

//       this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this);
//       this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this);

//       // Start playing and recording
//       this.recorderRef.play();
//       this.mediaRecorder.start();
//   }

//   handleError(error) {
//       console.error("navigator.getUserMedia error: ", error);
//       alert("An error occurred while trying to access your microphone: " + error.message);
//   }
  
//   onMediaRecorderDataAvailable(e) {
//       this.chunks.push(e.data);
//   }

//   onMediaRecorderStop() { 
//       // Convert chunks into a blob and assign to player
//       const blob = new Blob(this.chunks, { type: 'audio/wav' });
//       const audioURL = window.URL.createObjectURL(blob);
//       this.playerRef.src = audioURL;

//       // Reset the chunks and stop the stream
//       this.chunks = [];
//       this.stream.getAudioTracks().forEach(track => track.stop());
//       this.stream = null;

//       // Show the audio player and update UI elements
//       this.playerRef.classList.remove('hidden');
//       this.stopRef.classList.add('hidden');
//       this.startRef.classList.remove('hidden');
//       document.querySelector('.title').classList.remove('hidden');
//   }

//   startRecording() {
//       if (this.isRecording) return;

//       this.isRecording = true;

//       // Hide the start button and show the stop button
//       this.startRef.classList.add('hidden');
//       this.stopRef.classList.remove('hidden');
//       this.playerRef.src = '';
//       this.playerRef.classList.add('hidden');
//       document.querySelector('.title').classList.add('hidden');

//       // Get user media and start recording
//       navigator.mediaDevices
//           .getUserMedia(this.constraints)
//           .then(this.handleSuccess.bind(this))
//           .catch(this.handleError.bind(this));
//   }
  
//   stopRecording() {
//       if (!this.isRecording) return;

//       this.isRecording = false;

//       // Stop the recorder and stream
//       this.recorderRef.pause();
//       this.mediaRecorder.stop();
//   }
// }

// // Initialize VoiceRecorder
// window.voiceRecorder = new VoiceRecorder();



// Call this function to populate the select element when the page loads
getAudioDevices();

async function createDescriptionFunc(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const mood_id = document.querySelector("#mood").value.trim();
  const description = document.querySelector("#text-area").value.trim();
  const audioBlob = document.querySelector("#audio").files[0];

  const formData = new FormData();
  const formDataForAudio = new FormData();
  formData.append("title", title);
  formData.append("mood_id", mood_id);
  formData.append("description", description);
  formData.append("date_created", dateStr);
  const time_stamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
 
  if (audioBlob) {
    console.log("Has AudioBlob");
    formData.append("audio", audioBlob);
    formDataForAudio.append("audio", audioBlob);
  }

  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "block";  // Show loader

  const TranscriptionResponse = await fetch("http://localhost:5000/transcribe", {
    method: "POST",
    body: formData,
  });
  

  if (TranscriptionResponse.ok) {
    const resData = await TranscriptionResponse.json();
    console.log("transcribe success :" + resData["transcription"]);
    document.querySelector("#transcribed-text").textContent = "transcribe success :" + resData["transcription"];
  } else {
    const resData = await TranscriptionResponse.json();
    console.error(resData);
    console.log("error in transcribe api.js");
    document.querySelector("#transcribed-text").textContent = "Error in transcribing";
  }

  


  // Make a POST request to the analyze endpoint
  if (description === "") {
    document.getElementById("analyze").innerText = "ANALYSIS: Label: N/A Polarity: N/A";
  }
  else {
  const analyzeResponse = await fetch("http://localhost:5000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: description })
  });

  const analyzeResult = await analyzeResponse.json();

  document.getElementById("analyze").innerText="ANALYSIS: Label:" + analyzeResult["label"]+" Polarity :"+analyzeResult["polarity"]; // You can update the UI based on the analyzeResult


  const polarity = analyzeResult["polarity"];
const label = analyzeResult["label"];

// Append polarity and label to formData
formData.append("label", label);
formData.append("polarity", polarity);

  //  // Handle the response from the analyze API
  console.log(analyzeResult); // You can update the UI based on the analyzeResult
  }
  const response = await fetch("/api/create", {
    method: "POST",
    body: formData,
  });

  // After loading, set it back to none
  loadingElement.style.display = "none";  // Hide loader
  if (response.ok) {
    document.querySelector("#success").textContent = "Your entry has been successfully added!";
  } else {
    const resData = await response.json();
    console.error(resData);
    console.log("error in create_entry.js");
  }

}

const createEntryForm = document.getElementById("form-description");
createEntryForm.addEventListener("submit", createDescriptionFunc);


// var dt = new Date();
//   var mm = (dt.getMonth() + 1).toString().padStart(2, '0');
//   var dd = dt.getDate().toString().padStart(2, '0');
//   var yyyy = dt.getFullYear();
//   var dateStr = mm + "-" + dd + "-" + yyyy;
//   const success = document.getElementById("success");
//   success.textContent = "";

//   // Function to get audio input devices and populate a select element
//   async function getAudioDevices() {
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     const audioInputDevices = devices.filter(device => device.kind === 'audioinput');

//     const audioSelect = document.getElementById("audio-source");
//     audioSelect.innerHTML = ""; // Clear previous options

//     audioInputDevices.forEach(device => {
//       const option = document.createElement("option");
//       option.value = device.deviceId;
//       option.text = device.label || `Microphone ${audioSelect.length + 1}`;
//       audioSelect.appendChild(option);
//     });
//   }

//   // Class for Handling Voice Recording
//   class VoiceRecorder {
//     constructor() {
//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         console.log("getUserMedia supported");
//       } else {
//         console.log("getUserMedia is not supported on your browser!");
//         return;
//       }

//       this.mediaRecorder = null;
//       this.stream = null;
//       this.chunks = [];
//       this.isRecording = false;

//       // Reference updated HTML elements
//       this.recorderRef = document.getElementById("audio-playback"); // Audio playback element
//       this.playerRef = document.getElementById("player");           // Player for saved recording
//       this.startRef = document.getElementById("start");             // Start recording button
//       this.stopRef = document.getElementById("stop");               // Stop recording button

//       // Attach event handlers to buttons
//       this.startRef.onclick = this.startRecording.bind(this);
//       this.stopRef.onclick = this.stopRecording.bind(this);

//       // Audio input constraints (audio only)
//       this.constraints = {
//         audio: true,
//         video: false
//       };

//       // Initially hide stop button and player
//       this.stopRef.classList.add('hidden');
//     }

//     handleSuccess(stream) {
//       this.stream = stream;
//       this.stream.oninactive = () => {
//         console.log("Stream ended!");
//       };

//       // Attach stream to recorder reference
//       this.recorderRef.srcObject = this.stream;
//       this.mediaRecorder = new MediaRecorder(this.stream);

//       this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this);
//       this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this);

//       // Start playing and recording
//       this.recorderRef.play();
//       this.mediaRecorder.start();
//     }

//     handleError(error) {
//       console.error("navigator.getUserMedia error: ", error);
//       alert("An error occurred while trying to access your microphone: " + error.message);
//     }

//     onMediaRecorderDataAvailable(e) {
//       this.chunks.push(e.data);
//     }

//     onMediaRecorderStop() {
//       // Convert chunks into a blob and assign to player
//       const blob = new Blob(this.chunks, { type: 'audio/wav' });
//       const audioURL = window.URL.createObjectURL(blob);
//       this.playerRef.src = audioURL;

//       // Update hidden input with the blob file (for submission)
//       const file = new File([blob], "recording.wav", { type: "audio/wav" });
//       const dataTransfer = new DataTransfer();
//       dataTransfer.items.add(file);
//       document.querySelector("#audio").files = dataTransfer.files; // Attach blob to hidden input

//       // Reset chunks and stop stream
//       this.chunks = [];
//       this.stream.getAudioTracks().forEach(track => track.stop());
//       this.stream = null;

//       // Show the audio player and update UI elements
//       this.playerRef.classList.remove('hidden');
//       this.stopRef.classList.add('hidden');
//       this.startRef.classList.remove('hidden');
//       document.querySelector('.title').classList.remove('hidden');
//     }

//     startRecording() {
//       if (this.isRecording) return;

//       this.isRecording = true;

//       // Hide the start button and show the stop button
//       this.startRef.classList.add('hidden');
//       this.stopRef.classList.remove('hidden');
//       this.playerRef.src = '';
//       this.playerRef.classList.add('hidden');
//       document.querySelector('.title').classList.add('hidden');

//       // Get user media and start recording
//       navigator.mediaDevices
//         .getUserMedia(this.constraints)
//         .then(this.handleSuccess.bind(this))
//         .catch(this.handleError.bind(this));
//     }

//     stopRecording() {
//       if (!this.isRecording) return;

//       this.isRecording = false;

//       // Stop the recorder and stream
//       this.recorderRef.pause();
//       this.mediaRecorder.stop();
//     }
//   }

//   // Initialize VoiceRecorder
//   window.voiceRecorder = new VoiceRecorder();

//   // Call this function to populate the select element when the page loads
//   getAudioDevices();

//   // Function for handling form submission
//   async function createDescriptionFunc(event) {
//     event.preventDefault();
//     const title = document.querySelector("#title").value.trim();
//     const mood_id = document.querySelector("#mood").value.trim();
//     const description = document.querySelector("#text-area").value.trim();
//     const audioBlob = document.querySelector("#audio").files[0];

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("mood_id", mood_id);
//     formData.append("description", description);
//     formData.append("date_created", dateStr);

//     if (audioBlob) {
//       console.log("Has AudioBlob");
//       formData.append("audio", audioBlob); // Attach audio file to form data
//     }

//     const loadingElement = document.getElementById("loading");
//     loadingElement.style.display = "block";  // Show loader

//     // Transcription API call
//     const TranscriptionResponse = await fetch("http://localhost:5000/transcribe", {
//       method: "POST",
//       body: formData,
//     });

//     if (TranscriptionResponse.ok) {
//       const resData = await TranscriptionResponse.json();
//       console.log("transcribe success: " + resData["transcription"]);
//       document.querySelector("#transcribed-text").textContent = "Transcription: " + resData["transcription"];
//     } else {
//       const resData = await TranscriptionResponse.json();
//       console.error(resData);
//       document.querySelector("#transcribed-text").textContent = "Error in transcribing.";
//     }

//     // Text Analysis API call
//     if (description) {
//       const analyzeResponse = await fetch("http://localhost:5000/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ text: description })
//       });

//       const analyzeResult = await analyzeResponse.json();
//       console.log("Analyze Result: ", analyzeResult);

//       const sentiment_label = analyzeResult.label;
//       const polarity = analyzeResult.polarity;

//       // document.querySelector("#analyze").textContent = `Sentiment: ${sentiment_label} (${polarity})`;
//       document.getElementById("analyze").textContent = "ANALYSIS: Label: " + analyzeResult["label"] + " Polarity: " + analyzeResult["polarity"];
//     }

//     // Submit to create entry
//     const response = await fetch("/api/create", {
//       method: "POST",
//       body: formData,
//     });

//     const responseJson = await response.json();
//     console.log(responseJson);
//     success.textContent = "Data saved successfully! ";
//     loadingElement.style.display = "none";  // Hide loader
//   }

//   // Event listener for form submission
//   document.querySelector("#form-description").addEventListener("submit", createDescriptionFunc);