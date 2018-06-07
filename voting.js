$(document).ready(function(){

var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;


  $( ".playerImage" ).click(function() {
    $(".playerImage").css("border-color", "white");
    $(this).css("border-color", "yellow");

    player3Score = player3Score + 1;
    $(".player2").find(".score").html(player3Score);

    $(".player2").find(".score").animate({fontSize: '52px'});
    $(".player2").find(".score").animate({fontSize: '38px'});
  });





});
