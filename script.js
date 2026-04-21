const buttons = document.querySelector("#selection");
let humanScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (event) => playRound(event.target.id));

function playRound(playerSelection) {
  const resultDiv = document.getElementById("results");
  const winnerMessage = document.createElement("h2");
  const roundWinner = document.createElement("h2");
  const tallyCount = document.createElement("p");
  const newRoundBtn = document.createElement("button");

  let computerSelection = getComputerChoice();
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

  if (resultDiv.hasChildNodes()) {
    const lastTurnMsg = document.querySelector("#message");
    const lastTurnTally = document.querySelector("#tally");

    winnerMessage.textContent = roundMessage;
    tallyCount.textContent = `Human: ${humanScore} / Computer: ${computerScore}`;

    resultDiv.replaceChild(winnerMessage, lastTurnMsg);
    resultDiv.replaceChild(tallyCount, lastTurnTally);

    winnerMessage.setAttribute("id", "message");
    tallyCount.setAttribute("id", "tally");
  } else {
    resultDiv.appendChild(winnerMessage);
    resultDiv.appendChild(tallyCount);

    winnerMessage.textContent = roundMessage;
    winnerMessage.setAttribute("id", "message");

    tallyCount.textContent = `Human: ${humanScore} / Computer: ${computerScore}`;
    tallyCount.setAttribute("id", "tally");
  }

  if (humanScore === 5) {
    resultDiv.appendChild(roundWinner);
    resultDiv.removeChild(tallyCount);
    resultDiv.removeChild(winnerMessage);

    roundWinner.textContent = "You won all 5 rounds!";

    resultDiv.appendChild(newRoundBtn);
    newRoundBtn.textContent = "New round";

    buttons.style.display = "none";

    newRoundBtn.addEventListener("click", () => {
      resultDiv.removeChild(newRoundBtn);
      resultDiv.removeChild(roundWinner);
      humanScore = 0;
      computerScore = 0;
      buttons.style.display = "block";
    });
  } else if (computerScore === 5) {
    resultDiv.appendChild(roundWinner);
    resultDiv.removeChild(tallyCount);
    resultDiv.removeChild(winnerMessage);

    roundWinner.textContent = "You lost. The computer is better than you.";

    resultDiv.appendChild(newRoundBtn);
    newRoundBtn.textContent = "New round";
    buttons.style.display = "none";

    newRoundBtn.addEventListener("click", () => {
      resultDiv.removeChild(newRoundBtn);
      resultDiv.removeChild(roundWinner);
      humanScore = 0;
      computerScore = 0;
      buttons.style.display = "block";
    });
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
