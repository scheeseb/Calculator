function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random === 0){return "rock"};
    if(random === 1){return "paper"};
    if(random === 2){return "scissors"};
}