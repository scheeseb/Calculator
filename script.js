const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton")

const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const roundCountDisplay = document.querySelector("#roundCount");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

        rockButton.addEventListener('click', function(){
            if(roundCount < 5){
                findWinner(computerChoice(), "rock");
            }else{
                announceWinner()
            }
        })
        paperButton.addEventListener('click', function(){
            if(roundCount < 5){
                findWinner(computerChoice(), "paper");
            }else{
                announceWinner()
            }
        })
        scissorButton.addEventListener('click', function(){
            if(roundCount < 5){
                findWinner(computerChoice(), "scissor");
            }else{
                announceWinner()
            }        })

function printScore(){
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundCountDisplay.textContent = roundCount;

}
function announceWinner(){
    if(playerScore > computerScore){
        alert("You Win!")
    }else("Loser!")
}

function computerChoice() {
    const pick = Math.floor(Math.random() * 3);
    if (pick === 1) { return "rock" }
    else if (pick === 2) { return "paper" }
    else { return "scissors" }
}

function findWinner(comChoice, userIn) {
    let winStatus = ""
    let userChoice = userIn.toLowerCase();
    if (comChoice === "rock") {
        if (comChoice === userChoice) {
            winStatus = "Tied on " + comChoice;
        }
        else if (userChoice === "paper") {
            winStatus = "Win " + userChoice + " over " + comChoice;
            playerScore++;
            roundCount++;
        }
        else {
            winStatus = "Lose " + comChoice + " over " + userChoice;
            computerScore++;
            roundCount++;
        }
    }
    else if (comChoice === "paper") {
        if (comChoice === userChoice) {
            winStatus = "Tied on " + comChoice;
        }
        else if (userChoice === "scissors") {
            winStatus = "Win " + userChoice + " over " + comChoice;
            playerScore++;
            roundCount++;
        }
        else {
            winStatus = "Lose " + comChoice + " over " + userChoice;
            computerScore++;
            roundCount++;
        }
    }
    else {
        if (userChoice === comChoice) {
            winStatus = "Tied on " + comChoice;
        }
        else if (userChoice === "rock") {
            winStatus = "Win " + userChoice + " over " + comChoice;
            playerScore++;
            roundCount++;
        }
        else {
            winStatus = "Lose " + comChoice + " over " + userChoice;
            computerScore++;
            roundCount++;
        }
    }
    alert(winStatus)
    printScore()
    // return winStatus
}
