let clicks = 0;

$(document).ready(function () {
    $("#clickUp").hide();
    $("#restart").hide();
    $("#subScore").hide();
});

$("#start").click(function () {
    countDown()
    $("#start").hide()
    $("#clickUp").show()
});

$("#clickUp").click(function () {
    clicks++;
    console.log(clicks)
    $("#clicks").html(clicks)
})

// 15 second timer 
var timeLeft = 10;
var intervalId;

function countDown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    timeLeft--;
    $("#secondsLeft").html(timeLeft);
    if (timeLeft === 0) {
        stop();
        $("#subScore").show();
    };
};

function stop() {
    clearInterval(intervalId);
    $("#clickUp").hide()
    $("#restart").show()
};

$("#tagSub").on("click", function(e){
    e.preventDefault();
    tag=$("#tag").val().trim();
    console.log(tag)
    console.log(clicks)
    $("#subScore").hide();

    // create newScore variable
    var newScore = {
      username: tag,
      score: clicks
    }

    // post score and username (tag) to the database
    // send an AJAX POST-request with jquery
    $.post("/api/newClickScore", newScore) 
      // on success, run this callback
      .then(function(data) {
      });
});