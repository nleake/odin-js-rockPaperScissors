const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const score = document.getElementById("score");
const results = document.getElementById("results");
let gameOver = false;
let round = 0;
let score = {
  player: 0,
  computer: 0
};

rockButton.addEventListener("click", playRound("rock"));
paperButton.addEventListener("click", playRound("paper"));
scissorsButton.addEventListener("click", playRound("scissors"));

function newGame(){
  gameOver = false;
  round = 0;
  updateScore();
  clearResults();
}

function clearResults(){
  results.innerHTML = "";
}

function updateScore(){
  playerScore.innerHTML = score.player;
  cpuScore.innerHTML = score.computer;
}

function computerPlay(){
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection){
  let winner = "";
  let computerSelection = computerPlay();
  if(playerSelection === "rock"){
    if(computerSelection === "scissors"){
      winner = "player";
    } else if (computerSelection === "rock") {
      winner = "tie";
    } else {
      winner = "computer";
    }
  } else if(playerSelection === "paper"){
    if(computerSelection === "rock"){
      winner = "player"
    } else {
      winner = "computer"
    }
  } else if(playerSelection === "scissors"){
    if(computerSelection === "paper"){
      winner = "player"
    } else {
      winner = "computer"
    }
  }
  return winner;
  updateScore();
}

function game(){
  let numrounds = 5;
  for (let index = 0; index < numrounds; index++) {
    let winRound = playRound();
    winRound === "player" ? score.player += 1 : score.computer += 1;
  }
  let winner = score.player > score.computer ? "player" : "computer";
  return `${winner} wins!`;
}


