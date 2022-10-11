// Rules:

// At the beginning of the game a random country name is rendered. For
// instance: Croatia. Below the, the country flags are randomly showed one by
// one every 2 seconds. The goal is to click on the correct flag.

// Build a scoreboard where every correct guess is one point for the player and
// each wrong guess is one point for the computer. The winner is who first
// reaches 5 points.

//

// API:

// https://www.countryflagsapi.com/#request

// selecting elements

const container = document.querySelector(".container");
const countryName = document.querySelector(".country-name");
const image = document.querySelector("img");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const winner = document.querySelector(".winner");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");

const countries = [
  "Afghanistan",
  "Albania",
  "Bosnia and Herzegovina",
  "Belgium",
  "Canada",
  "Chile",
  "Croatia",
  "Colombia",
  "Italy",
  "Japan",
  "Madagascar",
  "Slovenia",
  "Singapore",
  "Serbia",
  "Ukraine",
  "Turkey",
  "Sweden",
  "Switzerland",
];

// variables for random countries
let randomCountry;
let choosenCountry;

// track score
let computerScore = 0;
let userScore = 0;

const api = `https://countryflagsapi.com/png/`;

// Choose country name that will be displayed
const chooseCountry = () => {
  const randomNum = Math.floor(Math.random() * countries.length);
  choosenCountry = countries[randomNum];
  countryName.textContent = choosenCountry;
  console.log(choosenCountry);
};

chooseCountry();

// get random countries
const getCountry = async () => {
  container.removeAttribute("hidden");
  const randomNum = Math.floor(Math.random() * countries.length);
  randomCountry = countries[randomNum];
  console.log(randomCountry);
  const response = await fetch(`${api}${randomCountry}`);
  const flag = response.url;
  displayData(flag);
  return;
};

// start game
startBtn.addEventListener("click", () => {
  getCountry();
});

// show images
const displayData = (flag) => {
  image.innerHTML = "";
  image.src = flag;
  console.log(flag);
};

let myTimer = setInterval(getCountry, 2000);

// check if choosen flag is correct answear
const correctFlag = () => {
  if (randomCountry === choosenCountry) {
    console.log("Yes!");
    userScore++;
    player.textContent = `Player score: ${userScore}`;
    handleWinner();
  } else {
    computerScore++;
    computer.textContent = `Computer score: ${computerScore}`;
    handleWinner();
  }
};

image.addEventListener("click", correctFlag);

const handleWinner = () => {
  if (computerScore === 5) {
    winner.innerHTML = `Computer is the winner!`;
    gameOver();
  } else if (userScore === 5) {
    winner.innerHTML = `User is the winner!`;
    gameOver();
  }
};

const gameOver = () => {
  clearInterval(myTimer);
  image.removeEventListener("click", correctFlag);
};

resetBtn.addEventListener("click", () => {
  location.reload();
});
