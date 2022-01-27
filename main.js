function random1to3() {
    // generate random int from 1 to 3 inclusive
    return Math.floor(Math.random() * (Math.ceil(3) - Math.floor(1) + 1) + Math.floor(1))
}

function computerPlay() {
    // get random number from random1to3() and then return Rock, Paper or Scissors
    let num = random1to3();
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else if (num === 3) {
        return "Scissors";
    } else {
        console.log("Something went terribly wrong")
        return;
    }
}

function playRound(playerSelection, computerSelection) {
    // take in players choice and computers choice and determine the winner.
    // returns string declaring winner
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "tie";
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "win";
            } else {
                return "lose";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "win";
            } else {
                return "lose";
            }
        case "scissors":
            if (computerSelection === "paper") {
                return "win";
            } else {
                return "lose";
            }
        default:
            console.log("Something went terribly wrong");
            return;
    }
}

function adjustScore(result) {
    switch (result) {
        case "win":
            playerScore.innerText = +(playerScore.innerText) + 1;
            return;
        case "lose":
            computerScore.innerText = +(computerScore.innerText) + 1;
            return;
        case "tie":
            return;
        default:
            console.log("Something went terribly wrong");
    }
}

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");

rock.addEventListener('click',
        function() { adjustScore(playRound("rock", computerPlay())); }
    );

scissors.addEventListener('click',
        function() { adjustScore(playRound("scissors", computerPlay())); }
);

paper.addEventListener('click',
        function() { adjustScore(playRound("paper", computerPlay())); }
    );