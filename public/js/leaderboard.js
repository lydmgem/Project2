$(document).ready(function() {

  // Get all of the high scores from each game
  getSnakeScores();
  getClickScores();
  getBrickScores();
})

// function that creates the 
function createLeaderboardRow() {
  
};

function getSnakeScores(event) {
  $.get("/api/snakeLeaderboard", function(data) {
    console.log(data);
  })
};

function getClickScores() {
  $.get("/api/clickLeaderboard", function(data) {
    console.log(data);
  })
};

function getBrickScores() {
  $.get("/api/BrickLeaderboard", function(data) {
    console.log(data);
  })
};