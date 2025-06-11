// writing a function to get the computer's choice 
let cc;
function getComputerChoice (){
    cc = Math.floor(Math.random()*3);
}
getComputerChoice();
console.log(cc)
if (cc === 0){
    cc = "rock";
}
if (cc === 1){
    cc = "paper";
}
if (cc === 2){
    cc = "scissors";
}
console.log(cc);

// getting the player choice 
let playerChoice = prompt("Please pick from one of the following: rock, paper, or scissors. Please type in all lowercase and spell it correctly");
console.log(playerChoice);

// tracking scores 
let humanScore = 0;
let computerScore = 0;

//writing a function to play a round 
function playRound(playerChoice, cc){
    
};
