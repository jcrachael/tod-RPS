#  Rock Paper Scissors 
A JavaScript game of Rock, Paper, Scissors made as part of The Odin Project's Foundations course: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors.

This game will be played entirely in the console against the computer.

## Pseudocode
A pop-up dialog prompts user to enter an input of "Rock", "Paper" or "Scissors" and saves the player's input in a variable called 'playerSelection'. The user's input is case-insensitive.

A function called getComputerChoice() will randomly return either "Rock", "Paper" or "Scissors". This will be stored in a variable called 'computerSelection'.

A function called playRound() will take two parameters, playerSelection and computerSelection, determine who wins, and then return a string declaring the winner.

A function called game() will call the playRound() function inside of it to play a 5-round game via a for-loop with 5 iterations. Then the winner will be printed to the console.

