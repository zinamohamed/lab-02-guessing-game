// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const resultsString = document.getElementById('barometer');
const guessSpan = document.getElementById('remaining-guesses');
const guessNumber = document.getElementById('guess-number');
const gamePrompt = document.getElementById('pick');
const startGame = document.getElementById('main-section');
const startButton = document.getElementById('play-now');

startGame.style.visibility = 'hidden';



let correctNumber = (Number(Math.ceil(Math.random() * 20)));

let guessLeft = 4;

gamePrompt.textContent = 'Through my crystal I see a number 1 through 20. Guess it below, and I will grant you wishes aplenty!';
guessSpan.textContent = `You have 4 guesses. Good Luck!`;


resultsString.style.visibility = 'hidden';






// initialize state

startButton.addEventListener('click', () => {
    startGame.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';

});

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
        gamePrompt.textContent = 'Make any wish and I will see it through, but this will only work if you believe it to be true!';
        guessButton.style.visibility = 'hidden';
        guessNumber.style.visibility = 'hidden';
    }

    if (guessLeft === 0 && finalNumber === 1) {
        resultsString.textContent = 'I am afraid you have no more guesses left.';
        guessSpan.style.visibility = 'hidden';
        gamePrompt.textContent = 'Looks like I can not grant you any wishes my friend, but we can try once more if you play again!';
        guessButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        guessNumber.style.visibility = 'hidden';
        
    }

    if (guessLeft === 0 && finalNumber === -1) {
        resultsString.textContent = 'I am afraid you have no more guesses left.';
        gamePrompt.textContent = 'Looks like I can not grant you any wishes my friend, but we can try once more if you play again!';
        guessSpan.style.visibility = 'hidden';
        guessButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        guessNumber.style.visibility = 'hidden';
        
    }

    if (userGuess > 20) {
        resultsString.textContent = 'Spirit only wants you to pick a number 1-20!'; 
    }
    
});








// set event listeners to update state and DOM