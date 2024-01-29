function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random === 0){return "rock"};
    if(random === 1){return "paper"};
    if(random === 2){return "scissors"};
}

function playGame(userRaw, computerChoice){
    const userChoice = userRaw.toLowerCase();
    if (userChoice === computerChoice){return "tie"};
    if (userChoice === "rock"){
        if(computerChoice === "paper"){
            return "User Lost"
        } else {return "User Won"}
    }
    if (userChoice === "paper"){
        if(computerChoice === "scissors"){
            return "User Lost"
        } else {return "User Won"}
    }
    if (userChoice === "scissors"){
        if(computerChoice === "rock"){
            return "User Lost"
        } else {return "User Won"}
    }
}

function fiveRounds() {
    let userScore = 0;
    let computerScore = 0
    for( i=0; i < 5; i++){
      let userRaw = prompt("Enter Rock, Paper, or Scissors");
      let computerChoice = getComputerChoice();
      if (playGame(userRaw, computerChoice) === "User Won"){
        alert("Winner! " + userRaw + " Over " + computerChoice)
        userScore++
      }
      else if (playGame(userRaw, computerChoice) === "User Lost"){
        alert("Loser! " + computerChoice + " Over " + userRaw)
        computerScore++;
      }
      else if (playGame(userRaw, computerChoice) === "tie"){
        alert("Tied");
        i--
      }else(alert("Insert Valid Input to repeat round"));

      alert("Computer: " + computerScore + " User:" + userScore)

    }
}
fiveRounds();