// In this exercise we will create “the typing game”.
// 1. Fetch a new word from the API https://random-word-api.herokuapp.com/word and
// display it to the user.
// 2. Now it’s time for listening to the user input. One every key down check if the correct
// character is typed:
// a. If yes, colorize the correct typed character in your favorite color
// b. If no, print an error message to the console
// 3. Now write the logic that if the user types in the correct character, the next character
// expected and if a word is finished a new word should load by the API endpoint
// 4. Create a button “START” that will start the game and show the first word. Also, a
// counter should be created and displayed that runs down from 60 seconds.
// a. If a user types in the wrong character, seconds should be reduced by 3.
// b. After the timer is running out of time the game should be over.
// 5. Create a success word count that shows the correct typed in words. This number
// should be increased after the user types in a word correctly. At the end of the game
// this number should be shown in an alert.
// 6. Now show the best result (highscore) on your application. Make sure, it is saved
// even if the user refreshes the page. Update the result every time a new best result
// comes in.
// optional tasks: 1. Before the user starts a game, he/she can enter a name and this name will be also saved when user gets the highscore. This means highscore will be shown like: "Highscore: NAME_OF_THE_USER - X words" inside the application.
// optional task: 2. Create different levels for the game like "normal" and "hard". Easy is the same mode that you already programmed. For "hard" you need to fetch a word that has at least 8 characters (you neeed to fetch multiple times). In addition to that on the hard mode a wrong input of the user will decrease the time by 5 seconds.

const api = "https://random-word-api.herokuapp.com/word";
const wordPlaceholder = document.querySelector(".word");
const points = document.querySelector(".scoreSpan");
const time = document.querySelector(".time");
const startBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const highscoreValue = document.querySelector(".hScore");
const nameInput = document.getElementById("name");
const hard = document.getElementById("hard");
const normal = document.getElementById("normal");
let randomWord = null;
let value;
let count = 0;
let seconds = 60;
let score = 0;
let highscore = 0;
let userName;
let decrease = -3;

const getWords = async () => {
  const response = await fetch(api);
  const data = await response.json();
  randomWord = data[0];
  console.log(randomWord);
  manipulateWord();
};

const manipulateWord = () => {
  randomWord.split("").forEach((character) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = character;
    wordSpan.classList.add("span-value");
    wordPlaceholder.appendChild(wordSpan);
  });
  value = document.getElementsByClassName("span-value");
};

const handleKey = (event) => {
  let pressedKey = event.key;
  const wordValue = value[count];
  if (pressedKey === wordValue.textContent) {
    wordValue.classList.add("correct");
    count++;
  } else {
    wordValue.classList.add("wrong");
    console.log("wrong letter");
    seconds += decrease;
    document.removeEventListener("keydown", handleKey);
    setTimeout(() => {
      document.addEventListener("keydown", handleKey);
      reset();
    }, 1000);
    console.log("a");
  }
  if (count === randomWord.length) {
    score++;
    points.textContent = score;
    reset();
  }
};

const reset = () => {
  count = 0;
  wordPlaceholder.innerHTML = "";
  getWords();
};

startBtn.addEventListener("click", () => {
  getWords();
  container.removeAttribute("hidden");
  countDown();
  score = 0;
  seconds = 60;
  points.textContent = 0;
  userName = nameInput.value;
  if (hard.checked) {
    decrease = -5;
  } else {
    decrease = -3;
  }
});

document.addEventListener("keydown", handleKey);

const countDown = () => {
  const timer = setInterval(function () {
    seconds--;
    time.innerHTML = seconds;
    if (seconds <= 0) {
      console.log("Game is over");
      clearInterval(timer);
      container.setAttribute("hidden", "hidden");
      handleHighscore();
    }
  }, 1000);
};

const handleHighscore = () => {
  if (score > highscore) {
    localStorage.setItem("highscore", score);
    localStorage.setItem("name", userName);
    highscore = score;
    highscoreValue.textContent = `Your highscore ${userName}  is ${highscore} `;
  }
};

const beforeStart = () => {
  highscore = localStorage.getItem("highscore");
  userName = localStorage.getItem("name");
  if (highscore !== null && userName !== null) {
    highscoreValue.textContent = ` Your highscore ${userName} is ${highscore}`;
  }
};

beforeStart();

// function radioBtnChecked() {
//   const radioBtn = document.querySelectorAll("input");
//   for (var i = 0; i < radioBtn.length; i++) {
//     if (radioBtn[i].type == "radio" && radioBtn[i].checked) {
//       console.log("Hello");
//       return true;
//     } else {
//       console.log("Please choose level");
//       return false;
//     }
//   }
// }

// radioBtnChecked();
