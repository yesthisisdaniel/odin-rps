let choice1 = "scissors"
let choice2 = "rock"
let choice3 = "paper"

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    switch (random) {
        case 1:
            computerSelection = choice1;
            break;
        case 2:
            computerSelection = choice2;
            break;
        case 3:
            computerSelection = choice3;
            break;
    }

    return computerSelection;
}

console.log(getComputerChoice());

function getPlayerChoice() {
    let random = Math.floor(Math.random() * 3) + 1
    let playerSelection;

    switch (random) {
        case 1:
            computerSelection = choice1;
            break;
        case 2:
            computerSelection = choice2;
            break;
        case 3:
            computerSelection = choice3;
            break;
    }

    return computerSelection;
}

console.log(getPlayerChoice());