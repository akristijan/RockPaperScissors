/* 
Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked
*/
document.querySelector('#rock').addEventListener('click', playRound);
document.querySelector('#paper').addEventListener('click', playRound);
document.querySelector('#scissors').addEventListener('click', playRound);

const placeToShowResult = document.querySelector('#placeToShowResult');
const showScore = document.querySelector('#score');
const placeToShowWinner = document.querySelector('#showWinner');
//Track scores
let userScore = 0;
let compScore = 0;

// Computer randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    
    const randomChoice =  Math.random();
    if(randomChoice < 0.33) return 'rock'
    else if(randomChoice < 0.66) return 'paper'
    else if(randomChoice < 0.99) return 'scissors';
    
}

function clearTextBeforeRound() {
    placeToShowResult.innerText = ""; //clear befor new round
    showScore.innerText = "";
}
// Compare player and computer choice 

function playRound(e) {
    //clear befor new round
    placeToShowResult.innerText = ""; 
    showScore.innerText = "";

    //store user choice
    let playerSelection = e.target.id;
    console.log(e.target.id)
    let computerSelection = computerPlay();

    const comp = computerSelection;
    const user = playerSelection;
    
    //Display the running score, and announce a winner of the game once one player reaches 5 points.
    if(userScore < 5 && compScore < 5) 
    {
        
        if( comp === 'rock' && user === 'scissors'  || comp === 'paper' && user === 'rock' || comp === 'scissors' && user === 'paper') {
        
            placeToShowResult.innerText = `You lose! You chose ${playerSelection} and the Computer chose ${computerSelection}`;
            compScore += 1;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
        
        else if( comp === user ) {
            placeToShowResult.innerText = `Tie!`;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
        else {
            
            placeToShowResult.innerText = `You Win! You chose ${playerSelection} and the Computer chose ${computerSelection}`;
            userScore += 1;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
    
    } 
    
    else {
        
        showFinalScore(userScore, compScore);
        document.querySelector('.buttons').style.visibility='hidden';
    }
    
    

}
//Something new
// The function reports a winner or loser at the end 
function showFinalScore(userScore, compScore) {
    const btns = document.querySelectorAll('buttons');
    btns.forEach((btn) => btn.disabled = true);

    if(userScore > compScore) {
        placeToShowWinner.innerText = (`You won. The result is ${userScore}:${compScore}`);
    }
    else if(userScore === compScore) {
        placeToShowWinner.innerText = (`Tie. The result is ${userScore}:${compScore}`);
    }
    else {
        placeToShowResult.innerText = (`You lost. The result is ${userScore}:${compScore}`);
    }
}


