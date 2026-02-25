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

function getPlayerChoice() {
    let selection;

    switch (choice) {
        case "rock":
            selection = document.querySelector("#rockButton");
            break;
        case "paper":
            selection = document.querySelector("#paperButton");
            break;
        case "scissors":
            selection = document.querySelector("#scissorsButton")
            break;
    }

    
    console.log("The button works :D");
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
        (playRound());
    })
});
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

