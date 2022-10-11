// Build a dice tossing game. Each player has two dices which he tosses at the same time. Eeach dice has 6 sides and the numbers go from 1 to 6.

// The user (player 1) plays the game against the browser (player 2).

// Each round the user tosses first by clicking on the toss button. At the same time, player 2 (browser) tosses his dices. Each round ends after two players tossed the dices. Print the number of the current round in html. After each round, update the scoreboard in html.

// Before starting the implementation, read through all the rules!

// •	The numbers on the dices are added up after each round. If the player 1 gets for instance 4 and 5 his round result is 9. If the player 2 (browser) gets 2 and 3 his round result is 5. In this round player 1 wins and he gets 1 point on the scoreboard.

// •	If a player gets the same number of both dices he gets 1 extra point even if he loses the round. This rule has one exception. If the user gets twice the number 1 (on both dices number 1), he loses 1 point. The user can’t go below 0 points so there is no negative score.

// •	If a player gets twice number 6 (on both dices number 6) he gets 2 extra points.

// Exception: If both players get the same sum number on their dices, everyone loses 1 point (it has to be the same sum, not the same numbers on the dices). Be careful:
// •	if both users get twice 6 (6 on each dice), they don't get 2 extra points, they lose 1 point each
// •	if both users get twice 1(1 on each dice), they still lose only 1 point each

// The game ends when one player reaches 12 points by the end of the round. If both players reach 12 points in the same round, they play an extra round. The winner of the next round wins the game. Repeat that till a game has a winner.

// The dices are just two numbers that should be printed in each player game board, you don't have to add any additional CSS.

// selecting elements

const diceBtn = document.querySelector(".button-wrapper");
const button = document.querySelector("button");
const firstDice = document.querySelectorAll(".dice-one");
const secondDice = document.querySelectorAll(".dice-two");
const round = document.querySelector(".round-number");
const winner = document.querySelector(".winner");

// player 1 -- selecting elements

const player1FirstDice = firstDice[0];
const player1SecondDice = secondDice[0];
const player1Score = document.querySelector(".player-one-score");

// player 2 -- selecting elements

const player2FirstDice = firstDice[1];
const player2SecondDice = secondDice[1];
const player2Score = document.querySelector(".player-two-score");

// scores

let scorePlayer = 0;
let scoreComputer = 0;
let roundCount = 0;

// player 1

diceBtn.addEventListener("click", () => {
  roundCount++;
  const playerRandom1 = Math.floor(Math.random() * 6 + 1);
  const computerRandom1 = Math.floor(Math.random() * 6 + 1);
  const playerRandom2 = Math.floor(Math.random() * 6 + 1);
  const computerRandom2 = Math.floor(Math.random() * 6 + 1);
  player1FirstDice.textContent = playerRandom1;
  player2FirstDice.textContent = computerRandom1;
  player1SecondDice.textContent = playerRandom2;
  player2SecondDice.textContent = computerRandom2;
  playerSum = playerRandom1 + computerRandom2;
  computerSum = computerRandom1 + computerRandom2;

  if (playerSum === computerSum) {
    updateScorePlayer(-1);
    updateScoreComputer(-1);
    round.textContent = roundCount;
    checkWinner();
    return;
  } else if (playerSum > computerSum) {
    updateScorePlayer(1);
  } else {
    updateScoreComputer(1);
  }

  updateScorePlayer(checkSameNumbers(playerRandom1, playerRandom2));
  updateScoreComputer(checkSameNumbers(computerRandom1, computerRandom2));

  round.textContent = roundCount;
  checkWinner();
});

function updateScorePlayer(player) {
  scorePlayer += player;
  if (scorePlayer < 0) {
    scorePlayer = 0;
  }
  player1Score.textContent = scorePlayer;
}

function updateScoreComputer(computer) {
  scoreComputer += computer;
  if (scoreComputer < 0) {
    scoreComputer = 0;
  }
  player2Score.textContent = scoreComputer;
}

function checkSameNumbers(num1, num2) {
  if (num1 === 1 && num2 === 1) {
    return -1;
  } else if (num1 === 6 && num2 === 6) {
    return 2;
  } else if (num1 === num2) {
    return 1;
  }
  return 0;
}

function checkWinner() {
  if (
    (scorePlayer === 12 && scoreComputer === 12) ||
    scorePlayer === scoreComputer
  ) {
    return;
  } else if (scorePlayer >= 12 || scoreComputer >= 12) {
    button.setAttribute("disabled", "disabled");
    reset();
    if (scorePlayer > scoreComputer) {
      winner.textContent = "Player wins!";
      console.log("winner");
    } else {
      winner.textContent = "Computer wins!";
    }
  }
}

const reset = () => {
  winner.textContent = "";
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  round.textContent = 0;
  player1FirstDice.textContent = 0;
  player2FirstDice.textContent = 0;
  player1SecondDice.textContent = 0;
  player1SecondDice.textContent = 0;
};
