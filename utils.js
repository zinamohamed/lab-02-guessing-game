
export function compareNumbers(userGuess, correctNumber) {
    if (userGuess > correctNumber) {
        return 1;
    }
    else if (userGuess < correctNumber) {
        return -1;
    }
    else {
        return 0;
    }

}



