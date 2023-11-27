window.onload = function(){

let pChoice = "";
let playerChoice = "";
let compChoice = "";
let compScore = 0;
let playerScore = 0;
let gameOver = 5;

// UI ELEMENTS

const btnSelection = document.querySelectorAll('button');
const displayChosenOptionPlayer = document.getElementById('selection-player');
const displayChosenOptionComputer = document.getElementById('selection-computer');

function updateChosenOption(player, computer, result){
    //PLAYER DISPLAY
    if(displayChosenOptionPlayer){
    const playerOptionImage = displayChosenOptionPlayer.querySelector('#player-chosen');

    playerOptionImage.src = `img/${player}.png`;
    playerOptionImage.alt = player;

    if (result.includes('won')) {
        displayChosenOptionPlayer.style.backgroundColor = 'green';
      } else if (result === "It's a tie!") {
        displayChosenOptionPlayer.style.backgroundColor = 'yellow';
      } else if (result.includes('lost')) {
        displayChosenOptionPlayer.style.backgroundColor = 'red';
      } else {
        displayChosenOptionPlayer.style.backgroundColor = 'white';
      }
    }else{
        console.log("Player option image not found");

    }

    //COMPUTER DISPLAY
    if(displayChosenOptionComputer){
    const computerOptionImage = displayChosenOptionComputer.querySelector('#computer-chosen');

    computerOptionImage.src = `img/${computer}.png`;
    computerOptionImage.alt = computer;

    if (result.includes('won')) {
        displayChosenOptionComputer.style.backgroundColor = 'red';
      } else if (result === "It's a tie!") {
        displayChosenOptionComputer.style.backgroundColor = 'yellow';
      } else if (result.includes('lost')) {
        displayChosenOptionComputer.style.backgroundColor = 'green';
      } else {
        displayChosenOptionComputer.style.backgroundColor = 'white';
      }
    }else{
        console.log("Computer option image not found");
    }
}

// Score display

function updateCounters(){
    const playerCounter = document.getElementById('pcounter');
    const computerCounter = document.getElementById('ccounter');
    
    playerCounter.textContent = playerScore.toString();
    computerCounter.textContent = compScore.toString();

    if (playerScore >= gameOver || compScore >= gameOver) {
        setTimeout(() => {
        alert('Game over! Wanna play again?');
        restartGame();
        }, 200)
      }

}



btnSelection.forEach((button) => {
  button.addEventListener('click', () => {
    pChoice = button.id;

    playerChoice = pChoice;

    compChoice = getComputerChoice();

    console.log('Player choice:', playerChoice);
    console.log('Computer choice:', compChoice);


    const result = gameSession(compChoice, playerChoice);

    console.log(result);
    
    updateChosenOption(pChoice, compChoice, result);
    updateCounters();

  });

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'yellow';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
  });

});

// LOGIC



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


function gameSession(getComputerChoice, getPlayerChoice){
    let computer = getComputerChoice;
    let player = getPlayerChoice;

    if(computer === player){
        return "It's a tie!";
    }else if (computer === "rock" && player === "scissors"){
        compScore++;
        return `You lost! ${computer} beats ${player}`; 
    }else if (computer === "paper" && player === "rock"){
        compScore++;
        return `You lost! ${computer} beats ${player}`;
    }else if (computer === "scissors" && player === "paper"){
        compScore++;
        return `You lost! ${computer} beats ${player}`;
    }else{
        playerScore++;
        return `You won! ${player} beats ${computer}`;
    }
}

function restartGame(){
    playerScore = 0;
    compScore = 0;
    updateCounters();
    updateChosenOption('question', 'question', "")
}

}

