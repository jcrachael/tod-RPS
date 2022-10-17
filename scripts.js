// Initialise variables
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// Gets the computer's choice
function getComputerChoice() {
    //  randomly return either "Rock", "Paper" or "Scissors"
    // This will be stored in a variable called 'computerSelection'
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
};


// buttons
rock.addEventListener("click", function(){
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    return playerSelection;
});

scissors.addEventListener("click", function() {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    return playerSelection;
});

paper.addEventListener("click", function() {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    return playerSelection;
});
    
  
function playRound(playerSelection, computerSelection) {
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
// determine who wins, and then return a string declaring the winner
// rock > scissors, scissors > paper, paper > rock
    document.getElementById('commentary').innerHTML = "<p>The player chose " + playerSelection + ".</p>";
    document.getElementById('commentary').innerHTML += "<p>The computer chose " + computerSelection + ".</p>";


// draw
        if (playerSelection === computerSelection) {
            document.getElementById('commentary').innerHTML += "<p>It's a tie! You both chose " + playerSelection +"! No points for anyone!</p>";
  
        // player wins
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            document.getElementById('commentary').innerHTML += "<p>You won! " + playerSelection + " beats " + computerSelection + ".</p>";
            playerScore += 1;
            document.getElementById('player-score').innerHTML = playerScore;
 
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            document.getElementById('commentary').innerHTML += "<p>You won! " + playerSelection + " beats " + computerSelection + ".</p>";
            playerScore += 1;
            document.getElementById('player-score').innerHTML = playerScore;
   
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            document.getElementById('commentary').innerHTML += "<p>You won! " + playerSelection + " beats " + computerSelection + ".</p>";
            playerScore += 1;
            document.getElementById('player-score').innerHTML = playerScore;

        // computer wins
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            document.getElementById('commentary').innerHTML += "<p>You lose! " + playerSelection + " loses to " + computerSelection + ".</p>";
            computerScore += 1;
            document.getElementById('computer-score').innerHTML = computerScore;
  
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            document.getElementById('commentary').innerHTML += "<p>You lose! " + playerSelection + " loses to " + computerSelection + ".</p>";
            computerScore += 1;
            document.getElementById('computer-score').innerHTML = computerScore;

        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            document.getElementById('commentary').innerHTML += "<p>You lose! " + playerSelection + " loses to " + computerSelection + ".</p>";
            computerScore +=1;
            document.getElementById('computer-score').innerHTML = computerScore;
           
    }

function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('rock').style.display = 'inline';
    document.getElementById('scissors').style.display = 'inline';
    document.getElementById('paper').style.display = 'inline';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('commentary').innerHTML = '';
    document.getElementById('computer-score').innerHTML = computerScore;
    document.getElementById('player-score').innerHTML = playerScore;

}

// scorekeeping
if (playerScore === 5 || computerScore === 5) {
    document.getElementById('rock').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('play-again').style.display = 'block';
    let playAgain = document.getElementById('play-again');
    playAgain.addEventListener('click', reset);
    if (playerScore > computerScore) {
        document.getElementById('commentary').innerHTML = "<p>You won! " + playerScore + " to " + computerScore + ". Thanks for playing!</p>";
    } else if (playerScore < computerScore) {
        document.getElementById('commentary').innerHTML = "<p>You lost! " + playerScore + " to " + computerScore + ". Better luck next time.</p>";
    };
    
};


};



