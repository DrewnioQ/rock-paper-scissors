// 1. Function getChomputerChoice() generates a random integer from 0 to 2. Then this function returns a string from "choices" list, depending on a generated integer.

// 2. Function getPlayerChoice() displays a prompt asking a user to enter their guess [Rock | Paper | Scissors] and then stores this value in a variable. Variable is converted to first letter uppercase and returned.

// 3. Function playRound() takes playerChoice and computerChoice as arguments. It creates a const variable "weapons" that matches each case with .weakTo or .strongTo cases. Then it compares if playerChoice is .strongTo or .weakTo a computerChoice. Then it alerts a message depending of the roundResult. At last it returns a value roundResult.

// 4. Function game() takes roundNum as an argument. Then it creates a for loop that ends, when roundNum is reached. Each loop prompts user for their choice, generates computer choice and plays a round

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button);
  });
});

const weapons = {
  Rock: {
    name: "Rock",
    weakTo: "Paper",
    strongTo: "Scissors",
    strongMsg: "Rock beats Scissors",
    weakMsg: "Paper beats Rock",
  },
  Paper: {
    name: "Paper",
    weakTo: "Scissors",
    strongTo: "Rock",
    strongMsg: "Paper beats Rock",
    weakMsg: "Scissors beat Paper",
  },
  Scissors: {
    name: "Scissors",
    weakTo: "Rock",
    strongTo: "Paper",
    strongMsg: "Scissors beats Paper",
    weakMsg: "Rock beats Scissors",
  },
};

function getComputerChoice() {
  const choices = Object.keys(weapons);
  const rndNumber = Math.floor(Math.random() * choices.length);
  return weapons[choices[rndNumber]].name;
}

function getPlayerChoice(button) {}

function playRound(button) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
}
