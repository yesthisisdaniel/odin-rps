let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const playerScoreText = document.querySelector("#playerScoreContainer")
const computerScoreText = document.querySelector("#computerScoreContainer")
const gameMessageText = document.querySelector("#gameMessageContainer")
const newGameButton = document.querySelector("#newGameButton")

const gameButton = document.querySelectorAll(".gameButton");

function getComputerChoice() {
    let scissors = "scissors";
    let paper = "paper";
    let rock = "rock";

    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return scissors;
    }
    else if (random === 2) {
        return paper
    }
    else {
        return rock
    }
}

function getPlayerChoice(button) {
    if (button === rockButton) {
        return "rock";
    } else if (button === paperButton) {
        return "paper";
    } else if (button === scissorsButton) {
        return "scissors";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = `Player Score: ${playerScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
    gameMessageText.textContent = "There can only be one."
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameMessageText.textContent = "It's a tie.... equal skill perhaps?"
        
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" ||
             playerChoice === "paper" && computerChoice === "rock" ||
             playerChoice === "scissors" && computerChoice === "paper"
    ) {
        playerScore++;
        playerScoreText.textContent = `Player Score: ${playerScore}`
        gameMessageText.textContent = "Impressive... but can you still win?"
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        computerScoreText.textContent = `Computer Score: ${computerScore}`
        gameMessageText.textContent = "The day where computers take over the world is nigh."
    }

    if (playerScore === 5) {
        gameMessageText.textContent = "Nice win kid, now don't get cocky."
        resetGame();
    }
    else if (computerScore === 5) {
        gameMessageText.textContent = "I've seen this happen in Terminator 2..."
        resetGame();
    }
}

gameButton.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = getPlayerChoice(button);
        let computerChoice = getComputerChoice();
        console.log(`Computer's Choice: ${computerChoice}`)
        console.log(`Player's Choice: ${playerChoice}`);

        playRound(playerChoice, computerChoice);
    })
})

newGameButton.addEventListener("click", () => {
    resetGame();
})

