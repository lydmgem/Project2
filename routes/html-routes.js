// This file sets up routes for sending users to various html pages

// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // leaderboard route loads leaderboard.html
  app.get("/leaderboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/leaderboard.html"));
  });

  // profile route loads profile.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // games route loads games.html
  app.get("/games", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games.html"));
  });

  // snake route loads snake game
  app.get("/snake", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games/snake/snake.html"));
  });
  // brick route loads brick game

  // click route loads click game
  app.get("/clicker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games/clicker/clicker.html"));
  });
}