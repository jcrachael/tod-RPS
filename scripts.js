let playerScore = 0;
let computerScore = 0;

// play 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        // prompt user for input
        let playerSelection = prompt("Rock, paper, or scissors?");
        // check if input is correct
        if (playerSelection.toLowerCase() === "rock") {
            playerSelection = "rock";
        } else if (playerSelection.toLowerCase() === "paper") {
            playerSelection = "paper";
        } else if (playerSelection.toLowerCase() === "scissors") {
            playerSelection = "scissors";
        } else {
            alert("Please enter either rock, paper, or scissors.");
        };

        console.log("The user chose " + playerSelection);

        function getComputerChoice() {
            //  randomly return either "Rock", "Paper" or "Scissors"
            // This will be stored in a variable called 'computerSelection'
            let choices = ["rock", "paper", "scissors"];
            let choice = choices[Math.floor(Math.random()*choices.length)];
            return choice;
        };
        let computerSelection = getComputerChoice();
        console.log("The computer chose " + computerSelection);

        function playRound(playerSelection, computerSelection) {
            // determine who wins, and then return a string declaring the winner
            // rock > scissors, scissors > paper, paper > rock

            // draw
            if (playerSelection === computerSelection) {
                console.log("It's a tie! You both chose " + playerSelection +"!");
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            // player wins
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
                playerScore += 1;
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
                playerScore += 1;
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
                playerScore += 1;
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            // computer wins
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
                computerScore += 1;
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
                computerScore += 1;
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
                computerScore +=1;
                console.log("Scores: You are on " + playerScore + " points. The computer is on " + computerScore + " points.");
            }
        };

        // play once
        playRound(playerSelection, computerSelection);

    }
}

game()

if (playerScore === computerScore) {
    console.log("It's a tie!");
} else if (playerScore > computerScore) {
    console.log("You won! " + playerScore + " to " + computerScore + ". Thanks for playing!");
} else if (playerScore < computerScore) {
    console.log("You lost! " + playerScore + " to " + computerScore + ". Better luck next time.");
}