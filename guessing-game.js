
function guessingGame(guess) {
    let answer = Math.floor(Math.random() * 100);
    let correct = false;
    let guessCount = 0;

    return guessing = (guess) => {
        if (correct) return "The game is over, you already won!";
        guessCount++;
        if (answer === guess) {
            correct = true;
            let guessFormat = guessCount === 1 ? 'guess' : 'guesses';
            return `You win! You found ${answer} in ${guessCount} ${guessFormat}.`;
        } 
        if (answer > guess) return `${guess} is too low!`
        if (answer < guess) return `${guess} is too high!`
    }
}

module.exports = { guessingGame };
