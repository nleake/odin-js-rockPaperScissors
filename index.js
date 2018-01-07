function computerPlay(){
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playerPlay(){
  let playerChoice = prompt("choose rock paper or scissors", "rock");
  return playerChoice;
}

function playRound(playerSelection, computerSelection){
  let winner = "";
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  if(playerSelection === "rock"){
    if(computerSelection === "scissors"){
      winner = "player"
    } else {
      winner = "computer"
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
}

function game(){
  let score = {
    player: 0,
    computer: 0
  }

  let numrounds = 5;
  for (let index = 0; index < numrounds; index++) {
    let winRound = playRound();
    winRound === "player" ? score.player += 1 : score.computer += 1;
  }
  let winner = score.player > score.computer ? "player" : "computer";
  return `${winner} wins!`;
}


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const score = document.getElementById("score");
const results = document.getElementById("results");

