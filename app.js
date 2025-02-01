const image = document.getElementById("diceImage");

var scores;
var roundScore;
var activePlayer;
var dice;
var isNewGame;
gameStart();

function gameStart() {
  isNewGame = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = Math.floor(Math.random() * 2);
  image.src = "mongolz.png";
  document.getElementById("player" + activePlayer).classList.add("active");
  document
    .getElementById("player" + (1 - activePlayer))
    .classList.remove("active");
  document.getElementById("current0").textContent = 0;
  document.getElementById("current1").textContent = 0;
  document.getElementById("total0").textContent = 0;
  document.getElementById("total1").textContent = 0;
  document.getElementById("playerName0").textContent = "Player 1";
  document.getElementById("playerName1").textContent = "Player 2";
}

function switchPlayer() {
  document.getElementById("player0").classList.toggle("active");
  document.getElementById("player1").classList.toggle("active");
  roundScore = 0;
  document.getElementById("current" + activePlayer).textContent = 0;
  activePlayer = 1 - activePlayer;
}

document.getElementById("rollButton").addEventListener("click", function () {
  if (isNewGame) {
    dice = Math.floor(Math.random() * 6) + 1;
    image.src = "dice-" + dice + ".png";
    if (dice === 1) {
      switchPlayer();
    } else {
      roundScore += dice;
      document.getElementById("current" + activePlayer).textContent =
        roundScore;
    }
  } else alert("Тоглоом дууссан байна.");
});

document.getElementById("holdButton").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] += roundScore;
    document.getElementById("total" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      isNewGame = false;
      document.getElementById("playerName" + activePlayer).textContent =
        "WINNER!";
    } else {
      switchPlayer();
    }
  } else alert("Тоглоом дууссан байна.");
});

document.getElementById("newGame").addEventListener("click", function () {
  gameStart();
});
