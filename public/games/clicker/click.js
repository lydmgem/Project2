let clicks = 0;

$(document).ready(function () {
    $("#clickUp").hide();
    $("#restart").hide();
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

    };
};

function stop() {
    clearInterval(intervalId);
    $("#clickUp").hide()
    $("#restart").show()
};