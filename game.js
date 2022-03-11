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
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor( Math.random() * options.length );
    return options[randomChoice].toLowerCase();
}

// Compare player and computer choice 

function playRound(e) {
    placeToShowResult.innerText = ""; //clear befor new round
    showScore.innerText = "";
    //store user choice
    let playerSelection = e.target.innerText.toLowerCase();
    let computerSelection = computerPlay();

    const comp = computerSelection;
    const user = playerSelection;
    
    //Display the running score, and announce a winner of the game once one player reaches 5 points.
    if(userScore < 5 && compScore < 5) 
    {
        
        if( comp === 'rock' && user === 'scissors'  ) {
        
            placeToShowResult.innerText = `You lose! You chose ${playerSelection} and computer choice was ${computerSelection}`;
            compScore += 1;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
        else if( comp === 'paper' && user === 'rock' ) {
            
            placeToShowResult.innerText = `You lose! You chose ${playerSelection} and computer choice was ${computerSelection}`;
            compScore += 1;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
        else if( comp === 'scissors' && user === 'paper' ) {
            placeToShowResult.innerText = `You lose! You chose ${playerSelection} and computer choice was ${computerSelection}`;
            compScore += 1;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
        else if( comp === user ) {
            placeToShowResult.innerText = `Tie! Computer choice was: ${comp} is same as User choice:  ${user}`;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
        else {
            
            placeToShowResult.innerText = `You Win! You chose ${playerSelection}, comp chose ${computerSelection}`;
            userScore += 1;
            showScore.innerText = `${userScore} : ${compScore}`;//show current score
        }
    
    } 
    else {
        showFinalScore(userScore, compScore);
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


