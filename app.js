let playerCounter = 0;
let computerCounter = 0;
let playerSelection = "";
let playerCounterSpan = document.createElement("span");
let divideSpan = document.createElement("span");
let computerCounterSpan = document.createElement("span");
divideSpan.textContent = " | ";
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
    const h1 = document.createElement("h1");
    h1.textContent = "";
    results.appendChild(h1);
    switch (true) {
        case playerSelection === "ROCK" && computerSelection === "PAPER":
            computerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;
        // return `P ${playerCounter} | PC ${computerCounter}`;
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            playerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            playerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            computerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            computerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            playerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "ROCK" && computerSelection === "ROCK":
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "PAPER" && computerSelection === "PAPER":
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;

        case playerSelection === "SCISSORS" && computerSelection === "SCISSORS":
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(playerCounterSpan, divideSpan, computerCounter);
            break;
    }
}

const results = document.querySelector("#results");
const weapons = document.querySelectorAll("section button");
const chooseWeaponH1 = document.querySelector("#results h1");
const restart = document.querySelector("#restart");

restart.addEventListener("click", () => {
    playerCounter = 0;
    computerCounter = 0;
    const restartH1 = document.querySelector("#results h1");
    restartH1.textContent = "Choose your weapon!";
});

weapons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
        chooseWeaponH1.remove();

        const child = results.lastChild;
        if (child != null) {
            results.removeChild(child);
        }

        playerSelection = weapon.value;
        // const h1Results = document.createElement("h1");
        round(playerSelection, getComputerChoice());
        const h1Results = document.querySelector("h1");
        if (playerCounter === 5 && playerCounter > computerCounter) {
            playerCounterSpan.style.background = "green";
            end = `You won! ${playerCounter} | ${computerCounter}`;
            playerCounter = 0;
            computerCounter = 0;
        }

        if (computerCounter === 5 && computerCounter > playerCounter) {
            end = `You lose! ${playerCounter} | ${computerCounter}`;
            playerCounter = 0;
            computerCounter = 0;
        }

        // h1Results.textContent = end;
        // results.appendChild(h1Results);
    });
});
