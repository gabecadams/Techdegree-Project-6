// 1. Create a guessing game

// 2. Get elements you'll need from HTML

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

// 3. Attach Event Listener to "Start Game" button to hide start screen overlay

const startGame = document.querySelector('.btn__reset');
startGame.addEventListener('click', () => {
overlay.style.display = 'none';
});

// 4. Create a phrases array that contains 5 phrases

const phrases = [
    'call the po po', 
    'not my circus not my monkeys', 
    'the sky is the limit', 
    'welcome to the jungle', 
    'laugh your way to the bank'
]

// 5. Create a getRandomPhraseAsArray function

function getRandomPhraseAsArray(arr){
    const randomNumber = Math.floor( Math.random() * arr.length );
    const randomPhrase = arr[randomNumber];
    return randomPhrase(phrases).split('');
    }

// 6. Set the game display

    // Create an addPhraseToDisplay function that loops thorugh an array of characters //
function addPhraseToDisplay(arr) {
    for (let i = 0; i < phraseArr.length; i++) {
       
        // Create a list li item
        const li = document.createElement('li');

        // Put the character inside of the list item
        // ??

        // Append that list item to the #​phrase u​l​ in your HTML
        phraseUl.append(li);

        // To use the function, you’ll get the value returned by the getRandomPhraseAsArray​, save it to a variable, and pass it to addPhraseToDisplay​ as an argument.
        const getRandomPhraseAsArray;
        return getRandomPhraseAsArray(addPhraseToDisplay);
    }

// 7. Create a checkLetter function. (Function should have one parameter: the button the player has clicked when guessing a letter.)
    function checkLetter(button) {

    // The function should loop over the letters and check if they match the letter in the button the player has chosen.
    const letters = document.querySelector('button');
    // ??

    // If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.

    // ??

    // If a match wasn’t found, the function should return null.
    let matchLetter = null

    }

}

// 8. Add an event listener to the keyboard.
element.addEventListener('click', function(qwerty) {

// Use a conditional to filter out clicks that don’t happen on the buttons or if the button already has the “chosen” class
if (clicks > i) {
    const outcome = "if block";

// Call the ​checkLetter​ function and store the results in a variable.
    // ??
checkLetter();
const results; 
// If the ​checkLetter​ function does not find a letter, remove one of the heart images and increment the m​issed​ counter
    // ??
}

// 9. Count the missed guesses in the game
    // Create an event listener for the ​qwerty ​element that listens for the “click”​ event.
qwerty.addEventListener('click', (e) )
    // Use a conditional to filter out clicks that don’t happen on the buttons or if the button already has the “chosen” class
        // ??
        if ( == '') {

        } else {
         
        }
      }
}

// 10. Create a checkWin function 
function checkWin() {
    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    // Check if the length of the 2 variables are the same. If they are, display the win overlay
    if (letters.length === show.length) {
        overlay.style.display = 'win';
    // Change the headline text of the start overlay to show a person won.
        h2.textContent = 'You won!';
    // Change the d​isplay​ property of the overlay to “flex”
        overlay.style.display = 'flex';
    } else {
       if missed > 4 {
           overlay.className = 'lose'; 
           h2.textContent = 'You lost';
           overlay.style.display = 'flex';
       } 
    }
    
}