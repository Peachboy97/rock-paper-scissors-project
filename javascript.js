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

let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
   
   if (humanChoice == computerChoice) {
    return "It's a draw";
   } else if (humanChoice == "rock" && computerChoice == "scissors"
    || humanChoice == "paper" && computerChoice == "rock" 
    || humanChoice == "scissors" && computerChoice == "paper"
   ) { 
     ++humanScore;
    return "You win";
   } else  {
    ++computerScore;
    return "You lose";
   }
} 

const humanChoice = getHumanChoice ();
const computerChoice = getComputerChoice ();

console.log(computerChoice);
console.log(humanChoice);
console.log(playRound(humanChoice,computerChoice));
console.log(humanScore);
console.log(computerScore);