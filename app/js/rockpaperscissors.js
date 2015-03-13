////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
      return (move)? move: getinput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
      return (move)? move: randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === rock && computermove === scissors){
        winner = "player"
    } else if (playermove === paper && computermove === rock){
        winner = "player';
    } else if (playermove === scissors && computermove === paper){
        winner = "player";
    } else if (playermove === rock && computermove === paper){
        winner = "computer";
    } else if (playermove === paper && computermove === scissors){
        winner = "computer";
    } else if (playermove === scissors && computer move === rock){
        winner = "computer";
    } else {
        winner = "tie"
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
      for (var playerWins=0; winner = "player" && playerWins<6; playerWin ++)
      for (var computerwins=0; winner = "computer" && playerWins<6; computerWins++)
    return [playerWins, computerWins];
}

