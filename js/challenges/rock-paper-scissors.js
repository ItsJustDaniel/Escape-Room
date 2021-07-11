let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function wins(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    comp
  )}. you win!`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("green-glow"),
    300
  );
  document.getElementsByClassName("lock")[0].value -= 1;
  console.log(document.getElementsByClassName("lock")[0].value);
}

function lose(user, comp) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(
    comp
  )}. you lose!`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("red-glow"),
    300
  );
}

function draw(user) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `its a tie!`;
  document.getElementById(user).classList.add("grey-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("grey-glow"),
    300
  );
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      wins(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
