// one to get homepage GET /
//one for login/signup page GET /login
// diary entry page GET /submit
// one to show all entries /diary
// POSSIBLY one to show individual entries GET /entry
//test

const router = require("express").Router();
// const User = require('../models/User.js');
// const withAuth = require('../utils/auth.js');
const path = require("path");

// localhost:3001/
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/diary", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});
router.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/view_entry.html"));
}); // I dont know if this belongs here

router.get("/submit", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});

//endpoint: localhost:3001/logout
router.get("/logout", (req, res) => {
  console.log("GET /logout");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
