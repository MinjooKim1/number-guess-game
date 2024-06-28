let computerNumber = 0;
let goBtn = document.getElementById("go-btn");
let inputArea = document.getElementById("input-area");
let resultArea = document.getElementById("result-area");
let chances = 5;
let times = document.getElementById("times");
let gameOver = false;
let resetBtn = document.getElementById("reset-btn");
let history = [];

goBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
inputArea.addEventListener("focus", function () {
  inputArea.value = "";
});

function RandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

function play() {
  let userInput = inputArea.value;

  if (userInput > 100 || userInput < 0) {
    resultArea.textContent = "type the number between 1-100";
    return;
  }
  if (history.includes(userInput)) {
    resultArea.textContent =
      "you already typed the number! try different number";
    return;
  }

  if (userInput > computerNum) {
    resultArea.textContent = "down!!👇👇👇";
  } else if (userInput < computerNum) {
    resultArea.textContent = "up!!👍👍";
  } else {
    resultArea.textContent = "you are correct!!🥳🥳🥳";
  }

  history.push(userInput);
  console.log(history);

  chances--;
  if (chances > 1) {
    times.textContent = `${chances} more tries`;
  } else {
    times.textContent = `${chances} more try`;
  }

  if (chances < 1) {
    gameOver = true;
  }
  if (userInput == computerNum) {
    gameOver = true;
  }
  if (gameOver == true) {
    goBtn.disabled = true;
  }
}

function reset() {
  goBtn.disabled = false;
  RandomNumber();
  resultArea.textContent = "Let's Play again";
  times.textContent = "You have : 5 times";
  chances = 5;
  inputArea.value = "";
  history = [];
  gameOver = false;
}

RandomNumber();
