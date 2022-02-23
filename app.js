// Get elements from HTML

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

// 3. Attach Event Listener to "Start Game" button to hide start screen overlay

startGame.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
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
        li.textContent = arr[i];

        // Append that list item to the #​phrase u​l​ in your HTML
        phraseUl.appendChild(li);
        if (arr[i] === " ") {
            li.classList.add("space");
        } else {
            li.classList.add("letter");
        }
        }

        // To use the function, you’ll get the value returned by the getRandomPhraseAsArray​, save it to a variable, and pass it to addPhraseToDisplay​ as an argument.
        const getRandomPhraseAsArray;
        return getRandomPhraseAsArray(addPhraseToDisplay);
    }

// 7. CheckLetter function. 
    function checkLetter(button); {

    // The function should loop over the letters and check if they match the letter in the button the player has chosen.
    const letters = document.querySelector('button');
        let match = null;
        for (let i = 0; i < li.length; i++) {
            if (li[i].textContent === button.textContent){
                li[i].classList.add('show');
            }   match = classic
    // If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.

    }


// 8. Add an event listener to the keyboard.
qwerty.addEventListener('click', (e) => {

// Use a conditional to filter out clicks that don’t happen on the buttons or if the button already has the “chosen” class
if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.classList.add("chosen")
    button.disabled = true;
    
// Call the ​checkLetter​ function and store the results in a variable.
let result = checkLetter(button);

// If the ​checkLetter​ function does not find a letter, remove one of the heart images and increment the m​issed​ counter
    if(result === null) {
        const remove = document.querySelectorAll(".liveHeart img")
    }
        
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