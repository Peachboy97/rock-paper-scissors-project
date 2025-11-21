// console.log("Hello world!");

function getComputerChoice () {
    if (Math.floor(Math.random()*3) == 0) {
        return "Rock!";
    } else if (Math.floor(Math.random()*3) == 1) {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

let box = prompt ("Make your choice. Rock,Paper, or Scissors");

function getHumanChoice () {
    if (box == "rock") {
        return "you picked rock";
    } else if (box == "paper") {
        return "you picked paper";
    } else if (box == "scissors") {
        return "you picked scissors";
    }
}


console.log(getHumanChoice());