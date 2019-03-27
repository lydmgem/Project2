// Set up the routes for displaying and saving data to the database

// Require our models
var db = require("../models")

// Routes
// ============================================================
module.exports = function(app) {

  app.get("/api/leaderboard", function(req, res) {
    db.UserSnake.findAll({})
      .then(function(dbUser) {
        res.json(dbUser);
        console.log(dbUser)
      });
  });

  app.post("/api/newScore", function(req, res) {
    console.log(req.body.username);
  });
}
