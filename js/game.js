const numDivs = 36;
const maxHits = 10;

let hits = 0;
let fails = 0;              
let firstHitTime = 0; //отсчет начинается с нажатия кнопки

function round() {

  $(".game-field").removeClass("target");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).removeClass("miss");

  $(".target").text(`${hits+1}`)

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  
  $(".squares-wrapper").hide();
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  

  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-fails").text(fails);
  
  $("#win-message").removeClass("d-none");
  $('#button-reload').attr("disabled", false);
  $("#button-reload").text("Играть заново");
  $('#button-reload').click(function() {
    location.reload();
  });

}

function handleClick(event) {
  
  $(".target").text("");
  
  if ($(event.target).hasClass("target")) {
    hits += 1;
    $(".game-field").removeClass('miss');
    } 
    else {
      $(event.target).addClass("miss");
      fails +=1; 
    }
    round();
  }

function init() {
  
  $('#button-reload').attr("disabled", true);

  round();


  $(".game-field").click(handleClick);
}

$(document).ready();
