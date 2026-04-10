playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    let computerSelection = getComputerChoice();
    let playerSelection = getHumanChoice();
    let roundMessage = "";

    if (computerSelection === "rock") {
      if (playerSelection === "rock") {
        roundMessage = "It's a tie!";
      } else if (playerSelection === "paper") {
        humanScore++;
        roundMessage = "Paper beats Rock, you win!";
      } else if (playerSelection === "scissors") {
        computerScore++;
        roundMessage = "Rock beats Scissors, you lost...";
      } else {
        roundMessage = "Something went wrong.";
      }
    } else if (computerSelection === "paper") {
      if (playerSelection === "rock") {
        computerScore++;
        roundMessage = "Paper beats Rock, you lost...";
      } else if (playerSelection === "paper") {
        roundMessage = "It's a tie!";
      } else if (playerSelection === "scissors") {
        humanScore++;
        roundMessage = "Scissors beats Paper, you win!";
      } else {
        roundMessage = "Something went wrong.";
      }
    } else if (computerSelection === "scissors") {
      if (playerSelection === "rock") {
        humanScore++;
        roundMessage = "Rock beats Scissors, you win!";
      } else if (playerSelection === "paper") {
        computerScore++;
        roundMessage = "Scissors beats Paper, you lost...";
      } else if (playerSelection === "scissors") {
        roundMessage = "It's a tie!";
      } else {
        roundMessage = "Something went wrong.";
      }
    } else {
      roundMessage = "Something went wrong.";
    }

    console.log(roundMessage);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }

  if (humanScore === 5) {
    console.log("You won! You beat the computer!");
  } else if (computerScore === 5) {
    console.log("You lost! The computer is better than you.");
  } else {
    console.log("Something went wrong.");
  }
}

function getComputerChoice() {
  let pcChoice = "";
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      pcChoice = "rock";
      break;
    case 1:
      pcChoice = "paper";
      break;
    case 2:
      pcChoice = "scissors";
      break;
    default:
      pcChoice = "None of the 3 options picked.";
  }

  return pcChoice;
}

function getHumanChoice() {
  let playerChoice = "";
  playerChoice = prompt("Choose between Rock, Paper, or Scissors!", "scissors");

  playerChoice = playerChoice.toLowerCase();

  return playerChoice;
}
