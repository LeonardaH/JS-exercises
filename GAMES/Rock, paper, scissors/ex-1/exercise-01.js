// selecting elements

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const options = [paper, rock, scissors];
let score = document.querySelector(".score");
let computerResult = document.getElementById("result");
let player = 0;
let computer = 0;

const computerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    computerResult.textContent = "rock";
  } else if (randomNum === 2) {
    computerResult.textContent = "scissors";
  } else {
    computerResult.textContent = "paper";
  }
  return computerResult.textContent;
};

const rules = (userOption, computerOption) => {
  console.log(userOption, computerOption);
  if (computerOption === userOption) {
    alert("tied");
  } else if (
    computerOption === "rock" &&
    (userOption === "paper" || userOption === "scissors")
  ) {
    alert("Computer wins");
    computer++;
  } else if (
    userOption === "rock" &&
    (computerOption === "paper" || computerOption === "scissors")
  ) {
    alert("User wins");
    player++;
  } else if (
    userOption === "paper" &&
    (computerOption === "rock" || computerOption === "scissors")
  ) {
    alert("User wins");
    player++;
  } else if (
    computerOption === "paper" &&
    (userOption === "rock" || userOption === "scissors")
  ) {
    alert("Computer wins");
    computer++;
  } else if (
    computerOption === "scissors" &&
    (userOption === "rock" || userOption === "paper")
  ) {
    alert("Computer wins");
    computer++;
  } else if (
    userOption === "scissors" &&
    (computerOption === "rock" || computerOption === "paper")
  ) {
    alert("User wins");
    player++;
  }
};

const scoreRender = () => {
  score.textContent = `User: ${player} / Computer: ${computer}`;
};

const winner = () => {
  if (computer === 5) {
    alert("Computer is the winner!");
    computer = 0;
    player = 0;
  } else if (player === 5) {
    alert("user is the winner!");
    player = 0;
    computer = 0;
  }
};

options.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const userOption = e.target.id;
    const computerOption = computerChoice();
    rules(userOption, computerOption);
    winner();
    scoreRender();
  });
});

// userChoice.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     computerChoice();
//     if (e.target.title === computerResult.innerHTML) {
//       console.log("Even");
//     }
//     gameRules(e.target.title, computerResult.innerHTML);
//   });
// });
