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
            // player wins
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
            // computer wins
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
            }
        };

        // play once
        playRound(playerSelection, computerSelection);

    }
}

game()