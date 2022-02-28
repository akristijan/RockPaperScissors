

// Computer randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor( Math.random() * options.length );
    return options[randomChoice].toLowerCase();
}

// Ask user to choose one option for Play (rock, paper or scissors)
function userPlay() {   
    //Ask user to enter the choice until choice is not one of options rock, paper or scissors
    let choice = '';
    while( choice !== 'rock' && choice !== 'paper' && choice !== 'scissors' ) {

        choice = prompt('Please enter your choice Rock, Paper or Scissors:').toLowerCase();

    }

    return choice;

}

// Compare player and computer choice 

function playRound(playerSelection, computerSelection) {
    const comp = computerSelection;
    const user = playerSelection;

    if( comp === 'rock' && user === 'scissors'  ) {
        
        return 0;
    }
    else if( comp === 'paper' && user === 'rock' ) {
        
        return 0;
    }
    else if( comp === 'scissors' && user === 'paper' ) {
        return 0;
    }
    else if( comp === user ) {
        return `Tie! Computer choice ${comp} is same as user choice  ${user}`;
    }
    else {
        
        return 1;
    }

}

// The function reports a winner or loser at the end 
function showFinalScore(scoreUser, scoreComp) {
    if(scoreUser > scoreComp) {
        console.log(`You won. The result is ${scoreUser}:${scoreComp}`)
    }
    else if(scoreUser === scoreComp) {
        console.log(`Tie. The result is ${scoreUser}:${scoreComp}`)
    }
    else {
        console.log(`You lost. The result is ${scoreUser}:${scoreComp}`) 
    }
}

// Start game
//show result (3 possible results are: winner, loser or tie)
function game() {
    // declare and initialize two variables for score tracking
    let scoreUser = 0;
    let scoreComp = 0;

    // play a 5 round game that keeps score
    for( let i = 0; i < 5; i++) {

        let result = playRound(userPlay(), computerPlay());
        
        if(result === 0) {
            console.log('You lose!');
            scoreComp +=1;
        }
        else if(result === 1) {
            console.log('You Win!');
            scoreUser +=1;
        }
        else {
            console.log('Tie!');
        }
    }
    
    // show final winner or loser
    showFinalScore(scoreUser, scoreComp)
    
    
}
