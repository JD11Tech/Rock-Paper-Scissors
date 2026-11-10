const choices = ["rock", "paper", "scissors"];
const randomNumber = Math.random();
const randomIndex = Math.floor(randomNumber * 3);
const computerChoice = choices[randomIndex];
//console.log(computerChoice);

let wins = 0;
let losses = 0;
let ties = 0;
let rounds = 0;


function getComputerChoice() {
  const randomNumber = Math.random();
  const randomIndex = Math.floor(randomNumber * 3);
  return choices[randomIndex];
}

const rockButton = document.getElementById("rock");

rockButton.addEventListener("click", () => {
  console.log("You picked Rock!");

  const computerChoice = getComputerChoice();
  rounds++;
  console.log(computerChoice);

  if (computerChoice === "rock") {
    result.textContent = "It's a tie!";
    result.style.color = "orange";
    ties++;
  }
  else if (computerChoice === "scissors"){
    result.textContent = "You win!";
    result.style.color = "limegreen";
    wins++;
  }
  else {
    result.textContent = "You lose!";
    result.style.color = "red";
    losses++;
  }
updateScoreboard();
});

const paperButton = document.getElementById("paper");

paperButton.addEventListener("click", () => {
  console.log("You picked Paper!");
  rounds++;

  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  if (computerChoice === "paper"){
    result.textContent = "It's a tie!";
    result.style.color = "orange";
    ties++;
  }
  else if (computerChoice === "rock") {
    result.textContent = "You win!";
    result.style.color = "limegreen";
    wins++;
  }
  else {
    result.textContent = "You lose!";
    result.style.color = "red";
    losses++
  }
  updateScoreboard();
});

const scissorsButton = document.getElementById("scissors");

scissorsButton.addEventListener("click", () => {
  console.log("You picked Scissors!");

  const computerChoice = getComputerChoice();
  rounds++;
  console.log(computerChoice);

  if (computerChoice === "scissors"){
    result.textContent = "It's a tie!";
    result.style.color = "orange";
    ties++;
  }
  else if (computerChoice === "paper"){
    result.textContent = "You win!";
    result.style.color = "limegreen";
    wins++;
  }
  else {
    result.textContent = "You lose!";
    result.style.color = "red";
    losses++;
  }

  updateScoreboard();
});

const result = document.getElementById("result");
const score = document.getElementById("score");


score.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;

function updateScoreboard() {
  const totalGames = wins + losses + ties;
  const winPercent = totalGames > 0 ? Math.floor((wins / totalGames) * 100) : 0;
  score.textContent = `Wins: ${wins} | Losses ${losses} | Ties: ${ties} | Rounds: ${rounds} | Win Percentage: ${winPercent}%`;
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  wins = 0;
  losses = 0;
  ties = 0;
  rounds = 0;
  updateScoreboard();
  result.textContent = "";
});

updateScoreboard();