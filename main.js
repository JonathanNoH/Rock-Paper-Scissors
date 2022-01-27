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
        playByPlay.innerText = `You both chose ${playerSelection}! It's a tie!`;
        return "tie";
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playByPlay.innerText = "You chose rock. Computer chose scissors. You win!";
                return "win";
            } else {
                playByPlay.innerText = "You chose rock. Computer chose paper. You lose.";
                return "lose";
            }
        case "paper":
            if (computerSelection === "rock") {
                playByPlay.innerText = "You chose paper. Computer chose rock. You win!";
                return "win";
            } else {
                playByPlay.innerText = "You chose paper. Computer chose scissors. You lose.";
                return "lose";
            }
        case "scissors":
            if (computerSelection === "paper") {
                playByPlay.innerText = "You chose scissors. Computer chose paper. You win!";
                return "win";
            } else {
                playByPlay.innerText = "You chose scissors. Computer chose rock. You lose.";
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
            if (+(playerScore.innerText) >= 5) {
                finalResult.innerText = "You got to 5 first - You win! Scores reset."
                resetScores();
            }
            return;
        case "lose":
            computerScore.innerText = +(computerScore.innerText) + 1;
            if (+(computerScore.innerText) >= 5) {
                finalResult.innerText = "Computer got to 5 first - You lose. Scores reset."
                resetScores();
            }
            return;
        case "tie":
            return;
        default:
            console.log("Something went terribly wrong");
    }
}

function resetScores() {
    playerScore.innerText = "0";
    computerScore.innerText = "0";
}

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");

const playByPlay = document.querySelector(".playByPlay");
const finalResult = document.querySelector(".finalResult");

rock.addEventListener('click',
        function() { adjustScore(playRound("rock", computerPlay())); }
    );

scissors.addEventListener('click',
        function() { adjustScore(playRound("scissors", computerPlay())); }
);

paper.addEventListener('click',
        function() { adjustScore(playRound("paper", computerPlay())); }
    );