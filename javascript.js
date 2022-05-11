let playerScore = 0;
let computerScore = 0;
let tiedGames = 0;

// Gets a random choice for the computer
function computerPlay() {
    randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Checks who won the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tiedGames++
        return "tied";
    } if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++
        return "lost";
    } if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        return "won";
    } else {
        return "invalid";
    }
}

// Asks the player for their choice, then checks who won. Repeated 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt().toLowerCase();
        if (!["rock", "paper", "scissors"].includes(playerChoice)) {
            console.log("Please make sure you typed your choice correctly.")
        }
        let playGame = playRound(playerChoice, computerPlay());
        if (playGame === "invalid") {
            return;
        }
        console.log(`You ${playGame}. You've won ${playerScore} out of ${i + 1} rounds.`);
    }
}

// Tells the player the final score
function endResult() {
    if (playerScore > computerScore) {
        console.log(`You won the game! In the end you won ${playerScore} rounds and tied in ${tiedGames} rounds. Reload the page to play again.`)
    } else if (playerScore < computerScore) {
        console.log(`You lost the game! In the end you won ${playerScore} rounds and tied in ${tiedGames} rounds. Reload the page to play again.`)
    } else if (playerScore === computerScore) {
        console.log(`You tied! In the end you both won ${playerScore} rounds and tied in ${tiedGames} rounds. Reload the page to play again.`)
    }
}

game();
endResult();