const modal = document.querySelector(".modal-container")
const modalMsg = document.querySelector(".modal-message")
const playAgainBtn = document.querySelector(".modal-restart")
playAgainBtn.addEventListener("click", () => {
  restartGame()
})

const playerScoreText = document.getElementById("playerScore")
const playerScoreSign = document.getElementById("playerSign")

const computerScoreText = document.getElementById("computerScore")
const computerScoreSign = document.getElementById("computerSign")

const roundResultMessage = document.getElementById("roundResultMessage")
const roundResultExplanation = document.getElementById("roundResultExplanation")

const interfaceBtns = document.querySelectorAll(".button-interface")
interfaceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button)
  })
})

const weapons = {
  Rock: {
    id: "rockBtn",
    icon: "🪨",
    weakTo: "Paper",
    strongTo: "Scissors",
    strongMsg: "Rock beats Scissors",
    weakMsg: "Paper beats Rock",
  },
  Paper: {
    id: "paperBtn",
    icon: "📄",
    weakTo: "Scissors",
    strongTo: "Rock",
    strongMsg: "Paper beats Rock",
    weakMsg: "Scissors beat Paper",
  },
  Scissors: {
    id: "scissorsBtn",
    icon: "✂️",
    weakTo: "Rock",
    strongTo: "Paper",
    strongMsg: "Scissors beat Paper",
    weakMsg: "Rock beats Scissors",
  },
}

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = Object.keys(weapons)
  const rndNumber = Math.floor(Math.random() * choices.length)
  return choices[rndNumber]
}

function getPlayerChoice(button) {
  for (let weapon in weapons) {
    if (weapons[weapon].id === button.id) {
      return weapon
    }
  }
  return null
}

function updateScore(computerChoice, playerChoice) {
  playerScoreSign.classList.remove("rotate180")
  computerScoreSign.classList.remove("rotate180")

  if (playerChoice === "Scissors") playerScoreSign.classList.add("rotate180")
  playerScoreSign.textContent = weapons[playerChoice].icon
  playerScoreText.textContent = `Player: ${playerScore}`

  if (computerChoice === "Scissors")
    computerScoreSign.classList.add("rotate180")
  computerScoreSign.textContent = weapons[computerChoice].icon
  computerScoreText.textContent = `Computer: ${computerScore}`
}

function checkRoundWinner(computerChoice, playerChoice) {
  if (weapons[playerChoice].strongTo === computerChoice) {
    roundResultMessage.textContent = "You win this round 😃"
    roundResultExplanation.textContent = `${weapons[playerChoice].strongMsg}`
    playerScore++
  }
  if (weapons[playerChoice].weakTo === computerChoice) {
    roundResultMessage.textContent = "You lose this round 😢"
    roundResultExplanation.textContent = `${weapons[playerChoice].weakMsg}`
    computerScore++
  }
  if (playerChoice === computerChoice) {
    roundResultMessage.textContent = "TIE 🤨"
    roundResultExplanation.textContent = "Keep playing!"
  }
}

function restartGame() {
  modal.classList.remove("modal-containter-active")

  playerScore = 0
  computerScore = 0

  roundResultMessage.textContent = "Choose your weapon"
  roundResultExplanation.innerHTML =
    'First one to score <span class="roundsNum">5</span> points wins the game!'

  playerScoreSign.textContent = "?"
  playerScoreSign.classList.remove("rotate180")
  playerScoreText.textContent = "Player: 0"

  computerScoreSign.textContent = "?"
  computerScoreSign.classList.remove("rotate180")
  computerScoreText.textContent = "Computer: 0"
}

function displayModal() {
  if (playerScore > computerScore) {
    modalMsg.style.whiteSpace = "normal"
    modalMsg.textContent = "Congratulations! You won 😃"
  } else if (playerScore < computerScore) {
    modalMsg.style.whiteSpace = "nowrap"
    modalMsg.textContent = "You lost 😢"
  }
  modal.classList.add("modal-containter-active")
}

function playRound(button) {
  const computerChoice = getComputerChoice()
  const playerChoice = getPlayerChoice(button)

  checkRoundWinner(computerChoice, playerChoice)
  updateScore(computerChoice, playerChoice)

  if (computerScore >= 5 || playerScore >= 5) {
    displayModal()
  }
}
