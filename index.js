const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const scoreView = document.getElementById("score");
const results = document.getElementById("results");
const roundView = document.getElementById("round");
const cpuChoice = document.getElementById("cpuChoice");
const newGameButton = document.getElementById("newGame");
let gameOver = false;
let round = 1;
let score = {
  player: 0,
  computer: 0
};

rockButton.addEventListener("click", throwRock);
paperButton.addEventListener("click", throwPaper);
scissorsButton.addEventListener("click", throwScissors);
newGameButton.addEventListener("click", newGame)

function newGame(){
  gameOver = false;
  round = 1;
  score.player = 0;
  score.computer = 0;
  updateView();
  clearResults();
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function clearResults(){
  results.innerHTML = "";
  cpuChoice.innerHTML = "";
}

function updateView(){
  playerScore.innerHTML = score.player;
  cpuScore.innerHTML = score.computer;
  roundView.innerHTML = round;
}

function computerPlay(){
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
  cpuChoice.innerHTML = `Computer throws ${computerSelection}`;
}

function throwScissors(){
  clearResults();
  let computerSelection = computerPlay();
  if(computerSelection === "paper"){
    playerWins()
  } else if(computerSelection === "scissors"){
    tie();
  } else {
    cpuWins();
  }
}

function throwRock(){
  clearResults();
  let computerSelection = computerPlay();
  if(computerSelection === "scissors"){
    playerWins();
  } else if (computerSelection === "rock") {
    tie();
  } else {
    cpuWins();
  }
}

function throwPaper(){
  clearResults();
  let computerSelection = computerPlay();
  if(computerSelection === "rock"){
    playerWins();
  } else if (computerSelection === "paper"){
    tie();
  } else {
    cpuWins();
  }
}

function tie(){
  round++;
  results.innerHTML = "This round is a tie.";
  updateView();
  checkWinner();
}

function playerWins(){
  round++;
  score.player++;
  results.innerHTML = "You win this round.";
  updateView();
  checkWinner();
}

function cpuWins(){
  round++;
  score.computer++;
  results.innerHTML = "You lose this round.";
  updateView();
  checkWinner();
}

function checkWinner(){
  if (round > 5){
    let winner = score.player > score.computer ? "player" : "computer";
    results.innerHTML = `${winner} wins the game! Click New Game to play again.`
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}


