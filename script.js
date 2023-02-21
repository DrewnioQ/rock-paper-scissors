// 1. Function getChomputerChoice() generates a random integer from 0 to 2. Then this function returns a string from "choices" list, depending on a generated integer.

// 2. Function getPlayerChoice() displays a prompt asking a user to enter their guess [Rock | Paper | Scissors] and then stores this value in a variable. Variable is converted to first letter uppercase and returned.

// 3. Function playRound() takes playerChoice and computerChoice as arguments. It creates a const variable "weapons" that matches each case with .weakTo or .strongTo cases. Then it compares if playerChoice is .strongTo or .weakTo a computerChoice. Then it alerts a message depending of the roundResult. At last it returns a value roundResult.

// 4. Function game() takes roundNum as an argument. Then it creates a for loop that ends, when roundNum is reached. Each loop prompts user for their choice, generates computer choice and plays a round

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const rndNumber = Math.floor(Math.random() * choices.length);
  return choices[rndNumber];
}

function getPlayerChoice() {
  let choice = prompt("Please insert your guess [Rock | Paper | Scissors]");
  try {
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
  } catch (error) {
    console.error(error);
  }
}

function playRound(playerChoice, computerChoice) {
  const weapons = {
    Rock: {
      weakTo: "Paper",
      strongTo: "Scissors",
      strongMsg: "Rock beats Scissors",
      weakMsg: "Paper beats Rock",
    },
    Paper: {
      weakTo: "Scissors",
      strongTo: "Rock",
      strongMsg: "Paper beats Rock",
      weakMsg: "Scissors beat Paper",
    },
    Scissors: {
      weakTo: "Rock",
      strongTo: "Paper",
      strongMsg: "Scissors beat Paper",
      weakMsg: "Rock beats Scissors",
    },
  };

  let resultString = "Something went wrong :(";
  let roundResult;

  if (weapons[playerChoice].strongTo === computerChoice) {
    resultString = `You win 😃 ${weapons[playerChoice].strongMsg}`;
    console.log(resultString);
    return (roundResult = 1);
  }
  if (weapons[playerChoice].weakTo === computerChoice) {
    resultString = `You lose 😢 ${weapons[playerChoice].weakMsg}`;
    console.log(resultString);
    return (roundResult = -1);
  }
  if (playerChoice === computerChoice) {
    resultString = `TIE 🤨`;
    console.log(resultString);
    return (roundResult = 0);
  }

  return resultString;
}

function game(roundsToWin) {
  let isScoreReached = false;
  let playerScore = 0;
  let computerScore = 0;
  let roundNum = 1;

  while (!isScoreReached) {
    console.log(`Round: ${roundNum}`);
    console.log(`User ${playerScore} : ${computerScore} Computer`);
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const result = playRound(playerChoice, computerChoice);

    switch (result) {
      case -1:
        computerScore++;
        roundNum++;
        break;
      case 0:
        roundNum++;
        break;
      case 1:
        roundNum++;
        playerScore++;
        break;
    }

    if (computerScore >= roundsToWin || playerScore >= roundsToWin) {
      isScoreReached = true;
      const finalScore = `Final Score:
User ${playerScore} : ${computerScore} Computer`;
      console.log(finalScore);
      break;
    }
  }
}

game(1);
