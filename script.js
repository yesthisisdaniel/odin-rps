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

console.log(getComputerChoice())