let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let scissors = "scissors";
    let paper = "paper";
    let rock = "rock";

    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        return scissors;
    }
    else if (random == 2) {
        return paper
    }
    else {
        return rock
    }
}

function getPlayerChoice () {
    let selection = prompt("What is your choice?");

    return selection;
}



function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("It's a tie!")
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore++;
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore++;
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore++;
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + playerChoice)
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
console.log(playerScore, computerScore)