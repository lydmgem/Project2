$(document).ready(function() {

  // Get all of the high scores from each game
  getSnakeScores();
  getClickScores();
  getBrickScores();
})

function getSnakeScores(event) {
  $.get("/api/snakeLeaderboard", function(data) {
    
  }).then(function(data) {
    for(var i = 0; i < 5; i++) {
      var rank = i + 1;
  
      var tableRow = $("<tr>");
  
      tableRow.append("<td> " + rank + ". " + "</td>");
      tableRow.append("<td>" + data[i].username + "</td>");
      tableRow.append("<td> - " + data[i].score + "</td>");

      $("#leaderboard-snake").append(tableRow);
    }
  });
};

function getClickScores() {
  $.get("/api/clickLeaderboard", function(data) {
    
  }).then(function(data) {
    for(var i = 0; i < 5; i++) {
      var rank = i + 1;
  
      var tableRow = $("<tr>");
  
      tableRow.append("<td> " + rank + ". " + "</td>");
      tableRow.append("<td>" + data[i].username + "</td>");
      tableRow.append("<td> - " + data[i].score + "</td>");

      $("#leaderboard-clicker").append(tableRow);
    }
  });
};

function getBrickScores() {
  $.get("/api/BrickLeaderboard", function(data) {
    
  }).then(function(data) {
    for(var i = 0; i < 5; i++) {
      var rank = i + 1;
  
      var tableRow = $("<tr>");
  
      tableRow.append("<td> " + rank + ". " + "</td>");
      tableRow.append("<td>" + data[i].username + "</td>");
      tableRow.append("<td> - " + data[i].score + "</td>");

      $("#leaderboard-brickbreak").append(tableRow);
    }
  });
};