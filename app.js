// Player's turn
var activePlayer = 0;

// Players turn
var scores = [0, 0];

// Player's round score
var roundScore = 2;
//<p>Current Score: <span id="current1">0</span></p>

var dice = Math.floor(Math.random() * 6) + 1;
document.getElementById("current1").textContent = 0;
document.getElementById("total1").textContent = 0;
document.getElementById("current2").textContent = 0;
document.getElementById("total2").textContent = 0;
// document.querySelector("#current2").innerHTML = "<em>dice<em>";
// document.querySelector(".dice").style.display = "none";
// console.log(dice);
document.querySelector(".rollButton").addEventListener("click", shooShid);

function shooShid() {
  var dice = Math.floor(Math.random() * 6) + 1;
  if (dice !== 1) alert(dice + " is good");
  else alert(dice + " oh no");
}
