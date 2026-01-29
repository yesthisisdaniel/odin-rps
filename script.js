let choice1 = "scissors"
let choice2 = "rock"
let choice3 = "paper"

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

console.log(getComputerChoice());