let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a tie!")
        console.log(`Player score: ${playerScore} : computerScore: ${computerScore}`)
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" ||
             playerChoice === "paper" && computerChoice === "rock" ||
             playerChoice === "scissors" && computerChoice === "paper"
    ) {
        playerScore++;
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        console.log(`Player score: ${playerScore} : computerScore: ${computerScore}`)
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        console.log(`Player score: ${playerScore} : computerScore: ${computerScore}`)
    }

    if (playerScore === 5) {
        alert("You win!!!")
    }
    else if (computerScore === 5) {
        alert("You lose! :(")
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

