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



function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const humanChoice = getHumanChoice ();
    const computerChoice = getComputerChoice ();

    function gameOverConditions (humanScore,computerScore) {
        if (humanScore === 4 && computerScore === 1) {
            console.log("You've won the game");
        } else if (computerScore === 4 && humanScore === 1) {
            console.log("You've lost the game. The computer won");
        } else if (humanScore === 3 && computerScore === 2) {
            console.log ("You've won the game");
        } else if (humanScore === 2 && computerScore === 3) {
            console.log("You've lose the game. The computer won");
        } else if (humanScore < 5 && computerScore < 5) {
            playRound (getHumanChoice (), getComputerChoice ());

        }
    }

    playRound (humanChoice, computerChoice);
    
    


    function playRound (humanChoice, computerChoice) {
        
        if (humanChoice === computerChoice) {
         
         console.log (humanChoice);
         console.log (computerChoice);
         console.log (humanScore);
         console.log (computerScore); 
         console.log ("It's a draw");
    
         return gameOverConditions (humanScore,computerScore);

        } else if (humanChoice === "rock" && computerChoice === "scissors"
                || humanChoice === "paper" && computerChoice === "rock" 
                || humanChoice === "scissors" && computerChoice === "paper") { 
                   
                    ++humanScore;
                    console.log (humanChoice);
                    console.log (computerChoice);
                    console.log (humanScore);
                    console.log (computerScore);
                    console.log ("You win");
                    
                    return gameOverConditions (humanScore,computerScore);

                } else if (humanChoice === "paper" && computerChoice === "scissors"
                    || humanChoice === "scissors" && computerChoice === "rock"
                    || humanChoice === "rock" && computerChoice === "paper")
                    {
                    ++computerScore;
                    console.log (humanChoice);
                    console.log (computerChoice);
                    console.log (humanScore);
                    console.log (computerScore);
                    console.log ("You lose");
                
                    return gameOverConditions (humanScore, computerScore);
                }
    } 

 
  return "say what";
}




console.log (playGame());
