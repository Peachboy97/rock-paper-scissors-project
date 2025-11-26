// console.log("Hello world!");

function getComputerChoice () {
    if (Math.floor(Math.random()*3) == 0) {
        return "rock";
    } else if (Math.floor(Math.random()*3) == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice (){
    let input = prompt ("Make your choice. Rock, Paper, or Scissors");
    return input.toLocaleLowerCase();
}

const humanChoice = getHumanChoice ();
const computerChoice = getComputerChoice ();

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        
        if (humanChoice == computerChoice) {
         console.log("It's a draw");
         return (getHumanChoice (), getComputerChoice ());
        } else if (humanChoice == "rock" && computerChoice == "scissors"
                || humanChoice == "paper" && computerChoice == "rock" 
                || humanChoice == "scissors" && computerChoice == "paper") { 
                    ++humanScore;
                    console.log("You win");
                    return (getHumanChoice (), getComputerChoice ());
                } else {
                    ++computerScore;
                    console.log("You lose");
                    return (getHumanChoice (), getComputerChoice ());
                }
    } 
    
   playRound (humanChoice, computerChoice);

  return "game over"
}



console.log(computerChoice);
console.log(humanChoice);
console.log(playGame());
// console.log(humanScore);
// console.log(computerScore);