
console.log("Hello World!")






const array = ["ROCK", "PAPER", "SCISSORS"];
let scorePlayer = 0
let scoreComputer = 0
var message = "Something went wrong"


// One Round of the game

function playRound(playerSelectionUpperCase, computerSelection) {
     // get player input
    let playerSelection = prompt("Rock, paper or Scissors? ");
    
     //get computer choice
    function getComputerChoice(choice) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * choice.length);
        // get random item
        const item = choice[randomIndex];
        return item;
        }
    computerSelection = getComputerChoice(array);
        console.log(computerSelection);
    
    playerSelectionUpperCase = playerSelection.toUpperCase();

    if(playerSelectionUpperCase == computerSelection) {
        message = "It's a tie!"
        } else if (playerSelectionUpperCase == "ROCK" && computerSelection == "SCISSORS" ) {
            message = "You win this round! -- Rock beats Scissors";
            scorePlayer = scorePlayer + 1;            
        } else if (playerSelectionUpperCase == "PAPER" && computerSelection == "ROCK") {
            message = "You win this round! -- Paper beats Rock";
            scorePlayer = scorePlayer + 1;
        } else if (playerSelectionUpperCase == "SCISSORS" && computerSelection == "PAPER") {
            message = "You win this round! -- Scissors beat Paper";
            scorePlayer = scorePlayer + 1;
        } else if (computerSelection ==  "ROCK" && playerSelectionUpperCase == "SCISSORS") {
            message = "You lose this round, you loser! -- Rock beats Scissors";
            scoreComputer = scoreComputer +1;
        } else if (computerSelection ==  "PAPER" && playerSelectionUpperCase == "ROCK") {
            message = "You lose this round, you loser! -- Paper beats Rock";
            scoreComputer = scoreComputer +1;
        } else if (computerSelection ==  "SCISSORS" && playerSelectionUpperCase == "PAPER") {
            message = "You lose this round, you loser! -- Scissors beat Paper";
            scoreComputer = scoreComputer +1;
        };
        
}

// game function

function game() {
    for(let i = 0; i < 5 && scoreComputer < 3 && scorePlayer < 3; i++) {
        playRound(); 
        console.log(message);
        console.log(`Computer Score is: ${scoreComputer}, Player Score is: ${scorePlayer}`);
  
    }
         // if computer wins
         if (scoreComputer > scorePlayer) {
            console.log(`You lose, go home and practice! Computer is awesome!!`)
            
        // if player wins    
        } else if (scorePlayer > scoreComputer) {
            console.log(`You win, you legend you! Awesome skills!` )
            
        // if tie            
        } else { 
            console.log("It all ends even, booooooooring!")
        }

}

game(); 



