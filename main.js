let counter = 0;
while(counter < 5){
    counter++;
    console.log(`Match number ${counter}`);

let pChoice = prompt("Enter your choice: ");

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Error";
    }
}

function getPlayerChoice (pChoice){
    let playerChoice = pChoice.toLowerCase();
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }else{
        return pChoice;
    }
}

function gameSession(getComputerChoice, getPlayerChoice){
    let compChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(pChoice);
    console.log(`Computer choice: ${compChoice}`);
    console.log(`Player choice: ${playerChoice}`);

    if(compChoice === playerChoice){
        return "It's a tie!";
    }else if (compChoice === "rock" && playerChoice === "scissors"){
        return `You lost! ${compChoice} beats ${playerChoice}`;
    }else if (compChoice === "paper" && playerChoice === "rock"){
        return `You lost! ${compChoice} beats ${playerChoice}`;
    }else if (compChoice === "scissors" && playerChoice === "paper"){
        return `You lost! ${compChoice} beats ${playerChoice}`;
    } else if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log(`Error! Player did not enter a valid choice! Match Aborted!`);
        return counter--;
    }else{
        return `You won! ${playerChoice} beats ${compChoice}`;
    }
}

console.log(gameSession(getComputerChoice, getPlayerChoice));

}


