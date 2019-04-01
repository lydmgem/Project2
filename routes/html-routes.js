// This file sets up routes for sending users to various html pages

// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // snake route loads snake game
  app.get("/snake", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games/snake/snake.html"));
  });
  // brick route loads brick game
  app.get("/breakout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games/breakout/break.html"));
  });
  // click route loads click game
  app.get("/clicker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/games/clicker/clicker.html"));
  });
}