const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const heart = document.getElementsByClassName('tries');
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
    const letters = document.querySelectorAll('letters')
    let match = null;
    for (let i = 0; i < letters.length; i++) {
    if (letters.textContent[i] === button.textContent) {
        li.classList.add("show");
    } else {
        li.classList.add("letter");
    }
}
    return match
};


qwerty.addEventListener('click', (e) => {
    let button = e.target;
    if (button.tagName === 'BUTTON' || button.className === 'chosen') {
        const button = e.target;
        button.className = 'chosen';
        let letterFound = checkLetter(button);
        button.disabled = true;
    if  (letterFound === null) {
    heart.src='images/lostHeart.png';
    const tries = document.getElementById('scoreboard');
    tries.remove();
    missed +=1;
}
    }
});