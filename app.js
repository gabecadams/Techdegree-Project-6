const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

const phrases = [
  'call the po po',
  'not my circus not my monkeys',
  'the sky is the limit',
  'welcome to the jungle',
  'laugh your way to the bank'
]

startGame.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const randomPhrase = arr[randomNumber];
  return randomPhrase.split('');
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    console.log(phraseArray);
    for (let i = 0; i < phraseArray.length; i++) {
      const li = document.createElement('li');
      li.textContent = arr[i];
      const phraseUl = document.querySelector('#phrase ul'); 
      phraseUl.appendChild(li);
      if (li.textContent === " ") {
          li.classList.add("space");
      } else {
          li.classList.add("letter");
      }
    }
    };
    addPhraseToDisplay(phraseArray);

function checkLetter(button) {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < letters.length; i++) {
    if (letters[i].textContent === button.textContent) {
        letters[i].classList.add("show");
        match = (letters[i] === button.textContent);
    }
}
    return match;
};


keyboard.addEventListener('click', (e) => {
    let button = e.target;
    if (button.tagName === 'BUTTON' || button.className === 'chosen') {
        button.classList.add('chosen');
        let letterFound = checkLetter(button);
        button.disabled = true;
    if  (letterFound === null) {
    const hearts = document.querySelectorAll('.tries img');
    hearts[missed].src='images/lostHeart.png';
    missed +=1;
    }
    checkWin();
}
});


function checkWin() {
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    let title = document.querySelector(".title");
    if (letter.length === show.length) {
        overlay.className = ('win');
        title.textContent = "You won!";
        overlay.style.display = 'flex';
    } else if (missed > 4) {
        overlay.className = ('lose');
        title.textContent = "Try again";
        overlay.style.display = 'flex';
    }
}
