const container = document.querySelector('.container');
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

var playerScore = 0;
var computerScore = 0;
const scoreboard = document.querySelector('.scoreboard');
const score = document.createElement('div'); //Need to define score class in styles.css
score.classList.add('score');
scoreboard.appendChild(score);
score.textContent = playerScore + " - " + computerScore;

function computerPlay() {
    var s = Math.random();
    var indicator = Math.floor(s*3);
    if(indicator == 0){
        return 'Rock';
    }
    else if(indicator == 1){
        return 'Paper';
    }
    else if(indicator == 2){
        return 'Scissors'
    }
}

function playRound(pS, cS) {
    var indicator = winner(pS, cS);
    if (indicator == 1) {
        results.textContent =  "You Win! " + pS + " beats " + cS + ".";
        playerScore++;
    }
    else if(indicator == 0) {
        results.textContent =  "You Tie. " + pS + " ties " + cS + ".";
    }
    else if(indicator == -1) {
        results.textContent =  "You Lose! " + cS + " beats " + pS + ".";
        computerScore++;
    }
    score.textContent = playerScore + " - " + computerScore;
    if(playerScore == 5 || computerScore == 5) {
        console.log("true");
        endgame();
    }
}

function winner(pS, cS) {
    if(cS==pS){
        return 0;
    }
    else if(((cS == 'Rock') && (pS == 'Paper'))||
            ((cS == 'Paper') && (pS == 'Scissors'))||
            ((cS == 'Scissors') && (pS == 'Rock'))) {
                return 1;
    }
    else {
        return -1;
    }
}

function game() {
    for(let i=0; i<5; i++) {
        var cS = computerPlay();
        var playerSelection = window.prompt("Rock, Paper, or Scissors?");
        var pS = playerSelection.charAt(0).toUpperCase() + 
                 playerSelection.substring(1).toLowerCase();
        console.log(playRound(pS, cS));
    }
}
var pause = false;
if (!pause) {
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playRound('Rock', computerPlay());
    })

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playRound('Paper', computerPlay());
    })

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playRound('Scissors', computerPlay());
    })
}



function endgame() {
    if(playerScore == 5) {
        results.textContent = "Congrats! You beat the computer!"
    }
    else {
        results.textContent = "Oh no! You lost to the computer."
    }
    pause = true;
    console.log(pause);
}


if(pause) {
const reset = document.querySelector('.reset');
    const resetbtn = document.createElement('button');
    resetbtn.classList.add('.resetbtn');
    reset.appendChild(resetbtn);
    resetbtn.textContent = 'Reset';


    resetbtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        score.textContent = playerScore + " - " + computerScore;
        pause = false;
    })
}


