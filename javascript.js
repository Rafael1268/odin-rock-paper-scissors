let playerScore = 0;
let computerScore = 0;
let tiedGames = 0;

// Updates the score board
function updateScore() {
    const score = document.querySelector('#scoreBoard');
    score.textContent = `${playerScore} - ${computerScore}`;
    return;
}

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
        updateScore();
        return "tied";
    } if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++
        updateScore();
        return "lost";
    } if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        updateScore();
        return "won";
    } else {
        return "invalid";
    }
}

// Starts a round when the player clicks a button
function handleClick(playerChoice) {
    const computerChoice = computerPlay();
    const gameResult = playRound(playerChoice, computerChoice);
    showResult(gameResult, computerChoice);
    if (playerScore >= 5 || computerScore >= 5) {
        return endGame();
    }
    return;
}

// Updates the text to show the result of the round
function showResult(gameResult, computerChoice) {
    const resultTxt = document.querySelector("#resultTxt");
    switch (gameResult) {
        case "won":
            return resultTxt.textContent = `Computer chose ${computerChoice}, you won!`;
        case "lost":
            return resultTxt.textContent = `Computer chose ${computerChoice}, you lost!`;
        case "tied":
            return resultTxt.textContent = `Computer chose ${computerChoice}, you tied!`;
        default:
            return resultTxt.textContent = "Click one of the buttons to start the game. First to 5 wins!";
    }
}

// Ends the game and shows the play again button
function endGame() {
    const rpsButtons = document.querySelector(".buttons");
    rpsButtons.style.display = "none";
    playAgainBtn.style.display = "flex";
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const playAgainBtn = document.querySelector("#playAgainBtn");

playAgainBtn.style.display = "none";
rockBtn.addEventListener('click', () => handleClick("rock"));
paperBtn.addEventListener('click', () => handleClick("paper"));
scissorsBtn.addEventListener('click', () => handleClick("scissors"));
playAgainBtn.addEventListener('click', () => location.reload());

