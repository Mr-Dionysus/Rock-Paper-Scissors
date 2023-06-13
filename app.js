function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function round(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    switch (true) {
        case playerSelection === "ROCK" && computerSelection === "PAPER":
            return `You lose! Paper beats Rock!`;
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            return `You won! Paper beats Rock!`;
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            return `You won! Rock beats Scissors!`;
        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            return `You lose! Rock beats Scissors`;
        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            return `You lose! Scissors beats Paper!`;
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            return `You won! Scissors beats Paper!`;
        case playerSelection === "ROCK" && computerSelection === "ROCK":
            return `It's tie! Rock can't beats Rock!`;
        case playerSelection === "PAPER" && computerSelection === "PAPER":
            return `It's tie! Paper can't beats Paper!`;
        case playerSelection === "SCISSORS" && computerSelection === "SCISSORS":
            return `It's tie! Scissors can't beats Scissors!`;
    }
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    let i = 0;

    while (i < 5) {
        round("paper", "rock");
        i++;
    }
}
