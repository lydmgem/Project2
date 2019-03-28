// Set up the routes for displaying and saving data to the database

// Require our models
var db = require("../models")

// Routes
// ============================================================
module.exports = function(app) {

  app.get("/api/snakeLeaderboard", function(req, res) {
    db.UserSnake.findAll({
      order: [["score", "DESC"]]
    })
      .then(function(dbUser) {
        res.json(dbUser);
        console.log(dbUser)
      });
  });

  app.get("/api/clickLeaderboard", function(req, res) {
    db.UserClick.findAll({
      order: [["score", "DESC"]]
    })
      .then(function(dbUser) {
        res.json(dbUser);
        console.log(dbUser)
      });
  });

  app.get("/api/brickLeaderboard", function(req, res) {
    db.UserBrick.findAll({
      order: [["score", "DESC"]]
    })
      .then(function(dbUser) {
        res.json(dbUser);
        console.log(dbUser)
      });
  });

  app.post("/api/newSnakeScore", function(req, res) {
    
    var scores = parseInt(req.body.score);

    db.UserSnake.create({
      username: req.body.username,
      score: scores

    }).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/newClickScore", function(req, res) {

    var scores = parseInt(req.body.score);

    db.UserClick.create({
      username: req.body.username,
      score: scores

    }).then(function(results) {
      res.json(results);
      console.log(results)
    });
  });
};
