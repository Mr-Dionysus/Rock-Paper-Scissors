let playerCounter = 0;
let computerCounter = 0;
let playerSelection = "";

let playerCounterSpan = document.createElement("span");
let divideSpan = document.createElement("span");
divideSpan.textContent = " | ";
let computerCounterSpan = document.createElement("span");
//Computer's logic
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
//Check who won round
function round(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    //Delete previous classes
    divideSpan.classList.remove("tie-color");
    playerCounterSpan.classList.remove("win-color");
    playerCounterSpan.classList.remove("lose-color");
    computerCounterSpan.classList.remove("win-color");
    computerCounterSpan.classList.remove("lose-color");

    const h1 = document.createElement("h1");
    h1.textContent = "";
    results.appendChild(h1);
    switch (true) {
        case playerSelection === "ROCK" && computerSelection === "PAPER":
            computerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            playerCounterSpan.classList.add("lose-color");
            computerCounterSpan.classList.add("win-color");
            break;

        case playerSelection === "PAPER" && computerSelection === "ROCK":
            playerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            playerCounterSpan.classList.add("win-color");
            computerCounterSpan.classList.add("lose-color");
            break;

        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            playerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            playerCounterSpan.classList.add("win-color");
            computerCounterSpan.classList.add("lose-color");
            break;

        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            computerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            playerCounterSpan.classList.add("lose-color");
            computerCounterSpan.classList.add("win-color");
            break;

        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            computerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            playerCounterSpan.classList.add("lose-color");
            computerCounterSpan.classList.add("win-color");
            break;

        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            playerCounter++;
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            playerCounterSpan.classList.add("win-color");
            computerCounterSpan.classList.add("lose-color");
            break;

        case playerSelection === "ROCK" && computerSelection === "ROCK":
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            divideSpan.classList.add("tie-color");
            break;

        case playerSelection === "PAPER" && computerSelection === "PAPER":
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            divideSpan.classList.add("tie-color");
            break;

        case playerSelection === "SCISSORS" && computerSelection === "SCISSORS":
            playerCounterSpan.textContent = playerCounter;
            computerCounterSpan.textContent = computerCounter;
            h1.replaceChildren(
                playerCounterSpan,
                divideSpan,
                computerCounterSpan
            );
            divideSpan.classList.add("tie-color");
            break;
    }
}

const results = document.querySelector("#results");
const weapons = document.querySelectorAll("section button");
const chooseWeaponH1 = document.querySelector("#results h1");
let restartH1 = document.querySelector("#results h1");
const restart = document.querySelector("#restart");
const svg = document.querySelector("svg");

restart.addEventListener("click", () => {
    playerCounter = 0;
    computerCounter = 0;
    restartH1 = document.querySelector("#results h1");
    restartH1.textContent = "Choose your weapon!";
    svg.style.left = "160px";
});

weapons.forEach((weapon) => {
    weapon.addEventListener("click", (e) => {
        if (weapon.id !== "restart") {
            weapon.classList.add("click-animation");
            setTimeout(() => {
                weapon.classList.remove("click-animation");
            }, 500);

            playerCounterSpan.style.background = "#f1faee63";
            computerCounterSpan.style.background = "#f1faee63";
            divideSpan.style.background = "none";
            chooseWeaponH1.remove();
            const child = results.lastChild;

            if (child != null) {
                results.removeChild(child);
            }

            playerSelection = weapon.value;
            round(playerSelection, getComputerChoice());
            const h1Results = document.querySelector("h1");

            if (playerCounter === 5 && playerCounter > computerCounter) {
                playerCounterSpan.classList.add("win-background");
                computerCounterSpan.classList.add("lose-background");
                setTimeout(() => {
                    playerCounterSpan.classList.remove("win-background");
                    computerCounterSpan.classList.remove("lose-background");
                    playerCounterSpan.style.background = "#c7f9cc";
                    computerCounterSpan.style.background = "#e639477c";
                }, 500);

                playerCounter = 0;
                computerCounter = 0;
            }

            if (computerCounter === 5 && computerCounter > playerCounter) {
                playerCounterSpan.classList.add("lose-background");
                computerCounterSpan.classList.add("win-background");
                setTimeout(() => {
                    playerCounterSpan.classList.remove("lose-background");
                    computerCounterSpan.classList.remove("win-background");
                    playerCounterSpan.style.background = "#e639477c";
                    computerCounterSpan.style.background = "#c7f9cc";
                }, 500);

                playerCounter = 0;
                computerCounter = 0;
            }

            if (
                document.querySelector("#results h1").textContent !==
                "Choose your weapon!"
            ) {
                svg.style.left = "85px";
            } else {
                svg.style.left = "160px";
            }
        }
    });

    window.addEventListener("keydown", (e) => {
        switch (true) {
            case e.code === "Digit1" && weapon.value === "rock":
                e.target.blur();
                weapon.click();
                break;

            case e.code === "Digit2" && weapon.value === "scissors":
                e.target.blur();
                weapon.click();
                break;

            case e.code === "Digit3" && weapon.value === "paper":
                e.target.blur();
                weapon.click();
                break;

            case e.code === "Enter" && weapon.id === "restart":
                e.preventDefault();
                e.target.blur();
                weapon.click();
                break;
        }
    });
});
