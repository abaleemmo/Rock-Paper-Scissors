let playerScore = 0;
let playerScoreDisplay = document.querySelector(".player-score-counter");
let computerScore = 0;
let computerScoreDisplay = document.querySelector(".computer-score-counter");
let playerChoice = 0;
let computerChoice;
let computerNumChoice;
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");
let gameResult;
let gameResultDisplay = document.querySelector(".game-result");
let clearScoreButton = document.querySelector(".clear-score");

// computer choice  
function computerPicks (){
   computerNumChoice = Math.floor(Math.random()*3);
   if (computerNumChoice === 0){
        computerChoice = "Rock";
   }
   if (computerNumChoice === 1){
        computerChoice = "Paper";
   }
   if (computerNumChoice === 2){
        computerChoice = "Scissors";
   }
   console.log(computerChoice);
}

// player choice buttons 
rockButton.addEventListener("click", function(){
    computerPicks();
    playerChoice = "Rock";
    playerVsComputer();
});
paperButton.addEventListener("click", function(){
    computerPicks();
    playerChoice = "Paper";
    playerVsComputer();
});
scissorsButton.addEventListener("click", function(){
    computerPicks();
    playerChoice = "Scissors";
    playerVsComputer();
});

//checking result 
function playerVsComputer(){
    // Draw
    if (playerChoice === computerChoice){
        gameResult = "Draw";
        gameResultDisplay.innerHTML = gameResult;
    };
    // Player Win Conditions 
    if (playerChoice === "Rock" && computerChoice === "Scissors"){
        gameResult = "Win";
        gameResultDisplay.innerHTML = gameResult;
        playerScore = playerScore + 1;
        playerScoreDisplay.innerHTML = playerScore;
    };
    if (playerChoice === "Paper" && computerChoice === "Rock"){
        gameResult = "Win";
        gameResultDisplay.innerHTML = gameResult;
        playerScore = playerScore + 1;
        playerScoreDisplay.innerHTML = playerScore;
    };
    if (playerChoice === "Scissors" && computerChoice === "Paper") {
        gameResult = "Win";
        gameResultDisplay.innerHTML = gameResult;
        playerScore = playerScore + 1;
        playerScoreDisplay.innerHTML = playerScore;
    };
    // Player Loss Conditions
    if (playerChoice === "Rock" && computerChoice === "Paper"){
        gameResult = "Loss";
        gameResultDisplay.innerHTML = gameResult;
        computerScore = computerScore + 1;
        computerScoreDisplay.innerHTML = computerScore;
    }
    if (playerChoice === "Paper" && computerChoice === "Scissors"){
        gameResult = "Loss";
        gameResultDisplay.innerHTML = gameResult;
        computerScore = computerScore + 1;
        computerScoreDisplay.innerHTML = computerScore;
    }
    if (playerChoice === "Scissors" && computerChoice === "Rock"){
        gameResult = "Loss";
        gameResultDisplay.innerHTML = gameResult;
        computerScore = computerScore + 1;
        computerScoreDisplay.innerHTML = computerScore;
    }
};

//clear score button 
clearScoreButton.addEventListener("click", function(){
    computerScore = 0;
    computerScoreDisplay.innerHTML = computerScore;
    playerScore = 0;
    playerScoreDisplay.innerHTML = playerScore;
})
