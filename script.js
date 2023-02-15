
console.log("Hello World!")

const array = ["ROCK", "PAPER", "SCISSORS"];
let scorePlayer = 0
let scoreComputer = 0


function playRound(playerSelection, computerSelection) {
    // get player input from event listener
    document.getElementById('declare-winner').textContent = ' .....aaaand the winner is.....';
    //get computer choice
   function getComputerChoice(choice) {
       // get random index value
       const randomIndex = Math.floor(Math.random() * choice.length);
       // get random item
       const item = choice[randomIndex];
       return item;
       }
   computerSelection = getComputerChoice(array);
       console.log('Computer choose: '+computerSelection);
      

   if(playerSelection == computerSelection) {
       message = "It's a tie!"
       } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ) {
           message = "You win this round! -- Rock beats Scissors";
           scorePlayer = scorePlayer + 1;            
       } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
           message = "You win this round! -- Paper beats Rock";
           scorePlayer = scorePlayer + 1;
       } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
           message = "You win this round! -- Scissors beat Paper";
           scorePlayer = scorePlayer + 1;
       } else if (computerSelection ==  "ROCK" && playerSelection == "SCISSORS") {
           message = "You lose this round, you loser! -- Rock beats Scissors";
           scoreComputer = scoreComputer +1;
       } else if (computerSelection ==  "PAPER" && playerSelection == "ROCK") {
           message = "You lose this round, you loser! -- Paper beats Rock";
           scoreComputer = scoreComputer +1;
       } else if (computerSelection ==  "SCISSORS" && playerSelection == "PAPER") {
           message = "You lose this round, you loser! -- Scissors beat Paper";
           scoreComputer = scoreComputer +1;
       };
    
    document.getElementById('round-result').textContent = message;
    document.getElementById('player-score').textContent = 'Player score: '+scorePlayer;
    document.getElementById('computer-score').textContent = 'Computer score: '+scoreComputer;

    if (scoreComputer > 4) {
        document.getElementById('declare-winner').textContent = 'You lose, go home and practice! Computer is awesome!!';
        scoreComputer = 0;
        scorePlayer = 0;
    } else if (scorePlayer > 4) {
        document.getElementById('declare-winner').textContent = 'You win, you legend you! Awesome skills!';
        scoreComputer = 0;
        scorePlayer = 0;
        }
    
    
  
}

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorButton = document.getElementById('scissors');

rockButton.addEventListener('click', function() {
    playRound('ROCK');
});


paperButton.addEventListener('click', function() {
    playRound('PAPER');
});


scissorButton.addEventListener('click', function() {
    playRound('SCISSORS');
});

