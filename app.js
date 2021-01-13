// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const resultsString = document.getElementById('barometer');
const guessSpan = document.getElementById('remaining-guesses');
const guessNumber = document.getElementById('guess-number');

let correctNumber = (Number(Math.ceil(Math.random() * 20)));

let guessLeft = 4;

guessSpan.textContent = `You have 4 guesses. Good Luck!`;






// initialize state
guessButton.addEventListener('click', () => {
    
    guessLeft--;
    
    guessSpan.textContent = `You have ${guessLeft} remaining guesses!`;

    
    let userGuess = (Number(guessNumber.value));
    let finalNumber = compareNumbers(userGuess, correctNumber);
    
    if (finalNumber === 1) {
        resultsString.textContent = 'Too high, try again!'; 

    }
    else if (finalNumber === - 1) {
        resultsString.textContent = 'Too Low, try again!';
    }
    else {
        resetButton.style.visibility = 'visible';
        guessSpan.textContent = '';
        resultsString.textContent = 'Bullseye! You are a winner baby!';
        guessButton.style.visibility = 'hidden';
    }

    if (guessLeft === 0 && finalNumber === 1) {
        resultsString.textContent = 'Sorry, you have no more guesses.';
        guessSpan.textContent = '';
        guessButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        
    }

    if (guessLeft === 0 && finalNumber === -1) {
        resultsString.textContent = 'Sorry, you have no more guesses.';
        guessSpan.textContent = '';
        guessButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        
    }
    
});








// set event listeners to update state and DOM