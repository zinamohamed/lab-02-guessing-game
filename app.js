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

resultsString.style.visibility = 'hidden';






// initialize state
guessButton.addEventListener('click', () => {
    
    guessLeft--;
    
    guessSpan.textContent = `You have ${guessLeft} remaining guesses!`;

    resultsString.style.visibility = 'visible';
    

    
    let userGuess = (Number(guessNumber.value));
    let finalNumber = compareNumbers(userGuess, correctNumber);
    
    if (finalNumber === 1) {
        resultsString.textContent = 'Sprit says too high, try again!'; 

    }
    else if (finalNumber === - 1) {
        resultsString.textContent = 'Spirit says too Low, try again!';
    }
    else {
        resetButton.style.visibility = 'visible';
        guessSpan.style.visibility = 'hidden';
        resultsString.textContent = 'By the powers that be! You read my mind!';
        resultsString.style.backgroundImage = "url('https://media4.giphy.com/media/xT9IgzvnOyNDYnxeHS/giphy.gif')";
        guessButton.style.visibility = 'hidden';
        guessNumber.style.visibility = 'hidden';
    }

    if (guessLeft === 0 && finalNumber === 1) {
        resultsString.textContent = 'I am afraid you have no more guesses left.';
        guessSpan.style.visibility = 'hidden';
        guessButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        guessNumber.style.visibility = 'hidden';
        
    }

    if (guessLeft === 0 && finalNumber === -1) {
        resultsString.textContent = 'I am afraid you have no more guesses left.';
        guessSpan.style.visibility = 'hidden';
        guessButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        guessNumber.style.visibility = 'hidden';
        
    }

    if (userGuess > 20) {
        resultsString.textContent = 'Spirit only wants you to pick a number 1-20!'; 
    }
    
});

console.log(correctNumber);






// set event listeners to update state and DOM