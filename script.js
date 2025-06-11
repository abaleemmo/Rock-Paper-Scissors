let computerChoice = document.querySelector(".computer-choice");
let playerChoice = document.querySelector(".player-choice");
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
let gameResult = document.querySelector(".game-result");

let pc;
let gr;

function getComputerChoice(){
   computerChoice = Math.floor(Math.random()*3);

};

getComputerChoice()
console.log(computerChoice);

if (computerChoice === 0)
 {
    console.log("Rock");
    computerChoice = "Rock";
}

if (computerChoice === 1)
{
    console.log("Paper");
    computerChoice = "Paper";
}

if (computerChoice === 2)
{
    console.log("Scissors");
    computerChoice = "Scissors";
}

rockButton.addEventListener("click", function(){
    pc = "Rock";
    playerChoice.innerHTML = pc;
    checkResult();
});

paperButton.addEventListener("click", function(){
    pc = "Paper";
    playerChoice.innerHTML = pc;
     checkResult();
});

scissorsButton.addEventListener("click", function(){
    pc = "Scissors";
    playerChoice.innerHTML = pc;
    checkResult();
});

function checkResult(){
    
}