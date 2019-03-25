// Set up the routes for displaying and saving data to the database

// Require our models
var db = require("../models")

// Routes
// ============================================================
module.exports = function(app) {

  app.get("/api/leaderboard", function(req, res) {
    db.User.findAll({})
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });
}
