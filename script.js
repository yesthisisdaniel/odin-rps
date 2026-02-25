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
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + playerChoice)
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
// function playGame() {
//    let playerSelection;
//    let computerSelection;

//     playerSelection = getPlayerChoice().toLowerCase();
//     computerSelection = getComputerChoice()
//     playRound(playerSelection, computerSelection);
    
    
//     playerSelection = getPlayerChoice().toLowerCase();
//     computerSelection = getComputerChoice()
//     playRound(playerSelection, computerSelection);
    

//     playerSelection = getPlayerChoice().toLowerCase();
//     computerSelection = getComputerChoice()
//     playRound(playerSelection, computerSelection);
    

//     playerSelection = getPlayerChoice().toLowerCase();
//     computerSelection = getComputerChoice()
//     playRound(playerSelection, computerSelection);
    

//     playerSelection = getPlayerChoice().toLowerCase();
//     computerSelection = getComputerChoice()
//     playRound(playerSelection, computerSelection);

//     console.log("You chose " + playerSelection);
//     console.log("PC chose " + computerSelection);
// }
    

// playGame()
// console.log(playerScore, computerScore)

