// one to get homepage GET /
//one for login/signup page GET /login
// diary entry page GET /submit
// one to show all entries /diary
// POSSIBLY one to show individual entries GET /entry
//test

const router = require("express").Router();
const User = require('../models/User.js');
const withAuth = require('../utils/auth.js');
const path = require("path");

// localhost:3001/
router.get("/",withAuth,(req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/diary",withAuth,(req, res) => {
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});
router.get("/view",withAuth,(req, res) => {
  res.sendFile(path.join(__dirname, "../public/view_entry.html"));
}); 

router.get("/create",withAuth,(req, res) => {
  res.sendFile(path.join(__dirname, "../public/create_entry.html"));
});

router.get("/submit",withAuth,(req, res) => {
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});

//endpoint: localhost:3001/logout
router.get("/logout", (req, res) => {
  // console.log("GET /logout");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  } else {
    res.status(404).json({ message: "No active session to log out" });
  }
});


//------------------------------------------------
router.get("/entries", async (req, res) => {
  // try {
  //   const diaryEntries = await Diary.findAll({
  //     attributes: ["time_stamp", "polarity", "label"]
  //   });
  //   res.status(200).json(diaryEntries);
  // } catch (err) {
  //   res.status(500).json(err);
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  // }
});
//-------------------------------------------------

module.exports = router;




