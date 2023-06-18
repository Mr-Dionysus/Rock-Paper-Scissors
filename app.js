let playerCounter = 0;
let computerCounter = 0;
let playerSelection = "";

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
            computerCounter++;
            return `You lose! Paper beats Rock! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            playerCounter++;
            return `You won! Paper beats Rock! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            playerCounter++;
            return `You won! Rock beats Scissors! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            computerCounter++;
            return `You lose! Rock beats Scissors! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            computerCounter++;
            return `You lose! Scissors beats Paper! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            playerCounter++;
            return `You won! Scissors beats Paper! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "ROCK" && computerSelection === "ROCK":
            return `It's tie! Rock can't beats Rock! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "PAPER" && computerSelection === "PAPER":
            return `It's tie! Paper can't beats Paper! Player = ${playerCounter}. Computer = ${computerCounter}`;
        case playerSelection === "SCISSORS" && computerSelection === "SCISSORS":
            return `It's tie! Scissors can't beats Scissors! Player = ${playerCounter}. Computer = ${computerCounter}`;
    }
}

const results = document.querySelector("#results");
const weapons = document.querySelectorAll("body button");
const chooseWeaponH1 = document.querySelector("#results h1");

weapons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
        chooseWeaponH1.remove();
        const child = results.lastChild;
        if (child != null) {
            results.removeChild(child);
        }

        playerSelection = weapon.value;
        const h1Results = document.createElement("h1");
        let end = round(playerSelection, getComputerChoice());

        if (playerCounter === 5 && playerCounter > computerCounter) {
            end = `You won! P ${playerCounter} | PC ${computerCounter}`;
            playerCounter = 0;
            computerCounter = 0;
        }

        if (computerCounter === 5 && computerCounter > playerCounter) {
            end = `You lose! P ${playerCounter} | PC ${computerCounter}`;
            playerCounter = 0;
            computerCounter = 0;
        }

        h1Results.textContent = end;
        results.appendChild(h1Results);
    });
});
