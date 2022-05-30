console.log("Hello World");

/*
Rock Paper Scissors Game

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

let playButton = document.querySelector("button");

playButton.addEventListener("click", () => console.log(playGame()));

function computerPlay() {
  //random number generation
  let choice = Math.round(Math.random() * 2);
  let options = ["Rock", "Paper", "Scissors"];

  let computerChoice = options[choice];

  return computerChoice;
}

function playerPlay() {
  let playerChoice = prompt("Rock, Paper or Scissors?");
  let insPlayerChoice = playerChoice.toLowerCase();
  let properChoice = insPlayerChoice[0]
    .toUpperCase()
    .concat(insPlayerChoice.substring(1));

  return properChoice;
}

function validatePlayerPlay(playerPlay) {
  if (
    properChoice !== "Rock" ||
    properChoice !== "Paper" ||
    properChoice !== "Scissors"
  ) {
    playerPlay();
  } else {
    return playerPlay();
  }
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    ++computerScore;
    return "Paper beats Rock. You Lose.";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    ++playerScore;
    return "Rock beats Scissors. You Win!";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    ++computerScore;
    return "Rock beats Scissors. You Lose.";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    ++playerScore;
    return "Scissors beats Paper. You Win!";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    ++computerScore;
    return "Scissors beats Paper. You Lose.";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    ++playerScore;
    return "Paper beats Rock. You Win!";
  } else if (playerSelection == computerSelection) {
    return "Game Draw";
  }
}

function playGame() {
  let rounds = 0;
  let roundsResults = [];
  playerScore = 0;
  computerScore = 0;
  for (let i = 5; i > rounds; i--) {
    playRound();
    roundsResults.push([{ You: playerScore }, { Computer: computerScore }]);
  }
  if (playerScore > computerScore) {
    return `You scored ${playerScore}: Computer : ${computerScore}.You Won the Game`;
  } else if (computerScore > playerScore) {
    return `You scored ${playerScore}: Computer : ${computerScore}. You Lost the Game`;
  } else {
    return `You scored ${playerScore}: Computer : ${computerScore}. Game ends in a Draw`;
  }
}
