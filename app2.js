const rollButton = document.getElementById("rollButton");
const holdButton = document.getElementById("holdButton");
const diceImage = document.getElementById("diceImage");
const current1 = document.getElementById("current1");
const total1 = document.getElementById("total1");
const current2 = document.getElementById("current2");
const total2 = document.getElementById("total2");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let activePlayer = 1;
let currentScore = 0;
let scores = [0, 0];
let gameActive = true;

function rollDice() {
  if (!gameActive) return;

  const diceValue = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `dice-${diceValue}.png`; // Шооны зургийг шинэчлэх

  if (diceValue === 1) {
    currentScore = 0; // Оноо тэглэх
    switchPlayer(); // Тоглогч солих
  } else {
    currentScore += diceValue;
    document.getElementById(`current${activePlayer}`).textContent =
      currentScore;
  }
}

function holdScore() {
  if (!gameActive) return;

  scores[activePlayer - 1] += currentScore; // Нийт оноонд хадгалах
  document.getElementById(`total${activePlayer}`).textContent =
    scores[activePlayer - 1];

  if (scores[activePlayer - 1] >= 100) {
    gameActive = false;
    document.getElementById(`player${activePlayer}`).classList.add("winner");
    alert(`Player ${activePlayer} wins!`);
    return;
  }

  currentScore = 0; // Одоогийн оноог тэглэх
  switchPlayer();
}

function switchPlayer() {
  document.getElementById(`current${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1; // Ээлжийг солих
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

// Event listener-үүдийг нэмэх
rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdScore);
