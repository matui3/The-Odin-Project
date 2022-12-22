function getComputerChoice() {
    let choice = Math.random(0, 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase == "rock") {
        return "Try again!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase == "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase == "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase == "paper") {
        return "Try Again";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase == "scissors") {
        return "You lose! Scissors beats Paper";
    } else if  (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase == "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase == "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase == "scissors") {
        return "Try again!";
    }
}

function game() {
    let pscore = 0;
    let cscore = 0;
    let playerSelection = prompt("Rock, Paper, Scissors!");
    let computerSelection = getComputerChoice();
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.substring(0,8) == "You win!") {
            pscore += 1;
        } else if (result.substring(0, 8) == "You lose!") {
            cscore += 1;
        }
    }
    if (pscore > cscore) {
        alert("Player wins!");
    } else if (pscore < cscore) {
        alert("Player loses!")
    } else {
        alert("It's a tie!");
    }
}

game();
