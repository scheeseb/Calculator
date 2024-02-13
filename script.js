function computerChoice() {
    const pick = Math.floor(Math.random() * 3);
    if (pick === 1) { return "rock" }
    else if (pick === 2) { return "paper" }
    else { return "scissors" }
}

function playGame(comChoice, userIn) {
    let winStatus = ""
    let userChoice = userIn.toLowerCase();
    if (comChoice === "rock") {
        if (comChoice === userChoice) {
            winStatus = "Tied on " + comChoice;
        }
        else if (userChoice === "paper") {
            winStatus = "Win " + userChoice + " over " + comChoice
        }
        else {
            winStatus = "Lose " + comChoice + " over " + userChoice
        }
    }
    else if (comChoice === "paper") {
        if (comChoice === userChoice) {
            winStatus = "Tied on " + comChoice;
        }
        else if (userChoice === "scissors") {
            winStatus = "Win " + userChoice + " over " + comChoice;
        }
        else {
            winStatus = "Lose " + comChoice + " over " + userChoice;
        }
    }
    else {
        if (userChoice === comChoice) {
            winStatus = "Tied on " + comChoice;
        }
        else if (userChoice === "rock") {
            winStatus = "Win " + userChoice + " over " + comChoice;
        }
        else {
            winStatus = "Lose " + comChoice + " over " + userChoice;
        }
    }
    return winStatus
}

function fiveRounds() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt()
        let comChoice = computerChoice();
        let userScore = 0;
        let comScore = 0;
        let rawOutcome = playGame(comChoice, userChoice);
        let outcome = rawOutcome.slice(0,2)

        if(outcome === "Wi"){
            userScore++
        }
        else if(outcome === "Lo"){
            comScore++
        }
        else {
            i--
        }
        console.log(rawOutcome);
        console.log("user:" + userScore,"computer:" + comScore, "round:" + (i + 1));
        

    }
}
fiveRounds();