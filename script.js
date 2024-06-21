let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * (9 - 0 + 1)+ 0);
}


function compareGuesses(humanGuess, computerGuess, targetNumber) {
    function getAbsoluteDistance(num1 = targetNumber, num2) {
        let distance = num1 - num2;
        return Math.abs(distance);
    }

    let humanDist = getAbsoluteDistance(targetNumber, humanGuess);
    let computerDist = getAbsoluteDistance(targetNumber, computerGuess);

    if (humanDist <= computerDist) {
        return true;
    } else {
        return false;
    } 
    

   
}

function updateScore(winner) {
    if (winner == 'human') {
        humanScore++;
    } else if (winner == 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

console.log(advanceRound())
console.log(updateScore())