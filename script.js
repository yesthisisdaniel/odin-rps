let choice1 = "scissors"
let choice2 = "rock"
let choice3 = "paper"

let computerScore = 0;
let playerScore = 0;

function getPlayerChoice() {
    let selection = prompt("What is your choice?");

    return selection;
}
console.log("Player choice: " + getPlayerChoice());

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let selection;

    switch (random) {
        case 1:
            selection = choice1;
            break;
        case 2:
            selection = choice2;
            break;
        case 3:
            selection = choice3;
            break;
    }

    return selection;
}

console.log("Computer choice: " + getComputerChoice());

function compareChoices() {
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
    }
    else {
        computerScore++;
    }
}

let playerSelection = getPlayerChoice(selection);
let computerSelection = getComputerChoice(selection);

console.log("Player Score: " + playerScore)
console.log("Computer Score: " + computerScore)


