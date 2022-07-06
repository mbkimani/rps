/*
Rock Paper Scissors Game Plan

Play game agianst Computer. Player vs Computer
1.Use computerPlay function to randomly return Rock Paper or Scissors - Done

2.Function that takes two parameters, playerSelection and computerSelection - Done

3.Function returns a string based on winner - Done

4.playerSelection parameter is case insensitive - Done

5.This function, playRound, returns a result - Done

6.playGame function calls playRound five times. keeps score and declares winner after 5 rounds -Done

7.console.log the round results and winner - Done

8.get input using prompts - Done

*/
let playerScore = 0;
let computerScore = 0;

//Generate a Random Computer choice between Rock, Paper and Scissors
function computerPlay() {
  //random number generation
  let choice = Math.round(Math.random() * 2);
  let options = ["Rock", "Paper", "Scissors"];

  let computerChoice = options[choice];

  return computerChoice;
}

//Capture a player choice between Rock, Paper and Scissors
function playerPlay(e) {
  let playerChoice = e.target.classList.value;
  let insPlayerChoice = playerChoice.toLowerCase();
  let properChoice = insPlayerChoice[0]
    .toUpperCase()
    .concat(insPlayerChoice.substring(1));
  return properChoice;
}

const resultsDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".score");
const endResultDiv = document.querySelector(".endResult");
//Play one round of the game with game ending in win lose or draw.

function playRound(e) {
  let playerSelection = playerPlay(e);
  let computerSelection = computerPlay();
  const gameResult = document.createElement("div");
  gameResult.setAttribute("style", "color: blue; fontSize: 14px");

  if (playerSelection == "Rock" && computerSelection == "Paper") {
    ++computerScore;
    gameResult.textContent = "Paper beats Rock. You Lose.";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    ++playerScore;
    gameResult.textContent = "Rock beats Scissors. You Win!";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    ++computerScore;
    gameResult.textContent = "Rock beats Scissors. You Lose.";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    ++playerScore;
    gameResult.textContent = "Scissors beats Paper. You Win!";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    ++computerScore;
    gameResult.textContent = "Scissors beats Paper. You Lose.";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    ++playerScore;
    gameResult.textContent = "Paper beats Rock. You Win!";
  } else if (playerSelection == computerSelection) {
    gameResult.textContent = "Game Draw";
  }

  resultsDiv.replaceChildren(gameResult);
  scoreDiv.replaceChildren(
    `You: ${playerScore} vs Computer: ${computerScore} `
  );
}

function checkWinner() {
  if (playerScore == 5 || computerScore == 5) {
    whoWon();
  }
}
//Play 5 rounds of the game; winner takes best of 5.

function whoWon() {
  if (playerScore > computerScore) {
    endResultDiv.replaceChildren(
      `You scored ${playerScore}: Computer : ${computerScore}. You Won the Game`
    );
  } else if (computerScore > playerScore) {
    endResultDiv.replaceChildren(
      `You scored ${playerScore}: Computer : ${computerScore}. You Lost the Game`
    );
  } else {
    endResultDiv.replaceChildren(
      `You scored ${playerScore}: Computer : ${computerScore}. Game ends in a Draw`
    );
  }
}

function playGame(e) {
  let roundsResults = [];
  if (playerScore < 5 && computerScore < 5) {
    playRound(e);
    roundsResults.push([{ You: playerScore }, { Computer: computerScore }]);
  }
  checkWinner();
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", (e) => playGame(e));
paperButton.addEventListener("click", (e) => playGame(e));
scissorsButton.addEventListener("click", (e) => playGame(e));
