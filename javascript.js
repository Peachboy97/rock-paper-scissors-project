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



const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

rock.addEventListener("click", () => {
    playRound ("rock", getComputerChoice());
    console.log ("done");
});

paper.addEventListener("click", () => {
    playRound ("paper", getComputerChoice());
    console.log("done");
});

scissors.addEventListener("click", () => {
    playRound ("scissors", getComputerChoice());
    console.log("done");
})

const outcomeDisplay = document.querySelector("#outcomeDisplay");

let humanScore = 0;
let computerScore = 0;






function playRound (humanChoice, computerChoice) {

    // let humanScore = 0;
    // let computerScore = 0;
        
        if (humanChoice === computerChoice) {
         console.log (computerChoice);
         console.log (humanScore);
         console.log (computerScore);   

         const draw = document.createElement("p");
         draw.textContent = "It is a draw";
         outcomeDisplay.appendChild(draw);

         const human = document.createElement("p");
         human.textContent = `You picked: ${humanChoice}`;
         outcomeDisplay.appendChild(human);


         const hScore = document.createElement("p");
         hScore.textContent = `Your score is ${humanScore}`;
         outcomeDisplay.appendChild(hScore);


         const cScore = document.createElement("p");
         cScore.textContent = `Computer score is ${computerScore}`;
         outcomeDisplay.appendChild(cScore);

        


         
        //  add the gameover condition into return to play 5 rounds 
    
         return draw;

        } else if (humanChoice === "rock" && computerChoice === "scissors"
                || humanChoice === "paper" && computerChoice === "rock" 
                || humanChoice === "scissors" && computerChoice === "paper") { 
                   
                    ++humanScore;

                    console.log (computerChoice);
                    console.log (humanScore);
                    console.log (computerScore);


                    const win = document.createElement("p");
                    win.textContent = "You win";
                    outcomeDisplay.appendChild(win);


                    const human = document.createElement("p");
                    human.textContent = `You picked: ${humanChoice}`;
                    outcomeDisplay.appendChild(human);



                   const hScore = document.createElement("p");
                   hScore.textContent = `Your score is ${humanScore}`;
                   outcomeDisplay.appendChild(hScore);       
                   
                   const cScore = document.createElement("p");
                   cScore.textContent = `Computer score is ${computerScore}`;
                   outcomeDisplay.appendChild(cScore);


                    
                    
                    return win;

                } else if (humanChoice === "paper" && computerChoice === "scissors"
                    || humanChoice === "scissors" && computerChoice === "rock"
                    || humanChoice === "rock" && computerChoice === "paper")
                    {
                    ++computerScore;

                    console.log (computerChoice);
                    console.log (humanScore);
                    console.log (computerScore);


                    const lose = document.createElement("p");
                    lose.textContent = "You lose";
                    outcomeDisplay.appendChild(lose);



                    const human = document.createElement("p");
                    human.textContent = `You picked: ${humanChoice}`;
                    outcomeDisplay.appendChild(human);

                  const hScore = document.createElement("p");
                  hScore.textContent = `Your score is ${humanScore}`;
                  outcomeDisplay.appendChild(hScore);

                  const cScore = document.createElement("p");
                  cScore.textContent = `Computer score is ${computerScore}`;
                  outcomeDisplay.appendChild(cScore);
                    
                
                    return lose;
                }
    } 











































// function playGame () {
//     let humanScore = 0;
//     let computerScore = 0;

//     const humanChoice = getHumanChoice ();
//     const computerChoice = getComputerChoice ();

//     function gameOverConditions (humanScore,computerScore) {
//         if (humanScore === 5 && computerScore === 0) {
//             console.log ("You've won the game");
//         } else if (humanScore === 0 && computerScore === 5){
//             console.log ("You've lost the game. The computer won");
//         } else if (humanScore === 4 && computerScore === 1) {
//             console.log("You've won the game");
//         } else if (computerScore === 4 && humanScore === 1) {
//             console.log("You've lost the game. The computer won");
//         } else if (humanScore === 3 && computerScore === 2) {
//             console.log ("You've won the game");
//         } else if (humanScore === 2 && computerScore === 3) {
//             console.log("You've lose the game. The computer won");
//         } else if (humanScore < 5 && computerScore < 5) {
//             playRound (getHumanChoice (), getComputerChoice ());

//         }
//     }

//     playRound (humanChoice, computerChoice);
    
    


//     function playRound (humanChoice, computerChoice) {
        
//         if (humanChoice === computerChoice) {
         
//          console.log (humanChoice);
//          console.log (computerChoice);
//          console.log (humanScore);
//          console.log (computerScore); 
         
//         //  add the gameover condition into return to play 5 rounds 
    
//          return console.log ("It's a draw");

//         } else if (humanChoice === "rock" && computerChoice === "scissors"
//                 || humanChoice === "paper" && computerChoice === "rock" 
//                 || humanChoice === "scissors" && computerChoice === "paper") { 
                   
//                     ++humanScore;
//                     console.log (humanChoice);
//                     console.log (computerChoice);
//                     console.log (humanScore);
//                     console.log (computerScore);
                    
                    
//                     return console.log ("You win");

//                 } else if (humanChoice === "paper" && computerChoice === "scissors"
//                     || humanChoice === "scissors" && computerChoice === "rock"
//                     || humanChoice === "rock" && computerChoice === "paper")
//                     {
//                     ++computerScore;
//                     console.log (humanChoice);
//                     console.log (computerChoice);
//                     console.log (humanScore);
//                     console.log (computerScore);
                    
                
//                     return console.log ("You lose");
//                 }
//     } 

 


//   return "Game Over :D";
// }



// console.log (playGame());
