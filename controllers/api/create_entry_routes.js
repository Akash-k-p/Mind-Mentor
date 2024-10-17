const router = require("express").Router();
const Diary = require("../../models/Diary.js");
const withAuth = require("../../utils/auth.js");
const multer = require("multer");
const upload = multer({ dest: "my-react-project/public/audio" });
//localhost:3001/api/create
router.post("/", upload.single('audio'), async (req, res) => {
  console.log(req.body, "req.body");
  let audioPath = req.file ? req.file.path : null;  // Get the path of the uploaded file
  if (req.file) {
    audioPath = audioPath.split('audio\\')[1];  // Get the part after 'audio\'
    audioPath = 'audio/' + audioPath;         // Prepend 'audio' to the extracted part
    console.log("audioPath: ", audioPath);
  }
  else {
    console.log("No audio file uploaded");
  }
  try {

    const diaryData = await Diary.create({
      title: req.body.title,
      mood_id: req.body.mood_id,
      description: req.body.description,
      audio_path: audioPath,
      date_created: req.body.date_created,
      user_id: req.body.user_id,
      time_stamp: req.body.time_stamp,
      label: req.body.label,
      polarity: req.body.polarity
    });
    res.status(200).json(diaryData);
    console.log("suceess in create_entry_routes.js");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
// const router = require("express").Router();
// const Diary = require("../../models/Diary.js");
// const withAuth = require("../../utils/auth.js"); // Make sure `withAuth` middleware works properly
// const multer = require("multer");
// const path = require("path");

// // Set up multer to handle audio file uploads, storing them in the "uploads" directory
// const upload = multer({
//   dest: "uploads/", // Ensure this directory exists and is writable
//   fileFilter: (req, file, cb) => {
//     // Allow only audio files (e.g., mp3, wav)
//     const ext = path.extname(file.originalname);
//     if (ext !== ".mp3" && ext !== ".wav") {
//       return cb(new Error("Only audio files are allowed!"), false);
//     }
//     cb(null, true);
//   }
// });

// // POST request to create a diary entry
// // URL: http://localhost:3001/api/create
// router.post("/", upload.single("audio"), async (req, res) => {
//   console.log(req.body, "req.body");

//   // Get the path of the uploaded audio file
//   const audioPath = req.file ? req.file.path : null;

//   try {
//     // Check if the user session is valid
//     if (!req.session || !req.session.user_id) {
//       return res.status(403).json({ message: "User not authenticated" });
//     }

//     // Create the new diary entry in the database
//     const diaryData = await Diary.create({
//       title: req.body.title,
//       mood_id: req.body.mood_id,
//       description: req.body.description,
//       audio_path: audioPath,   // Save the audio path
//       date_created: req.body.date_created,
//       time_stamp: req.body.time_stamp, 
//       label: req.body.label,   // Sentiment label 
//       polarity: req.body.polarity, // Sentiment polarity
//       user_id: req.session.user_id, // User ID from session
//     });

//     // Respond with the created diary entry
//     res.status(200).json(diaryData);
//     console.log("Success in create_entry_routes.js");
    
//   } catch (err) {
//     console.error("Error in create_entry_routes.js:", err.message); // Better logging
//     res.status(500).json({ error: "Failed to create diary entry", details: err.message });
//   }
// });

// module.exports = router;
