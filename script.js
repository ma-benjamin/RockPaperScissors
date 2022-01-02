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
        return "You Win! " + pS + " beats " + cS;
    }
    else if(indicator == 0) {
        return "You Tie. " + pS + " ties " + cS;
    }
    else if(indicator == -1) {
        return "You Lose! " + cS + " beats " + pS;
    }
    else {
        return "error" + pS + cS;
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