//Elements needed from html
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0; //if they miss 5 times, they lose

//hide overlay
let startButton = document.querySelector('.btn__reset');
startButton.addEventListener('click', () =>{
  let overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

//list of phrases
let phrases = [
  "Google Overlord",
  "I cast Fireball",
  "Data Always Wins",
  "This is Dog",
  "Marry Me"
];

//get random phrase as array of chars
function getRandomPhraseAsArray(array){
  let diceroll = Math.floor( Math.random()*array.length);
  return array[diceroll].split("");
}

//add chosen phrase array to display
function addPhraseToDisplay(charArray){
  for (let i=0; i<charArray.length; i++){
    let li = document.createElement('li');
    li.textContent = charArray[i];
    if (charArray[i]!==" "){
      li.className = "letter";
    } else {
      li.className = "space";
    }
    let phraseUl = document.querySelector('#phrase ul');
    phraseUl.appendChild(li);
  }
}

//init game
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Check For Letter!
function checkLetter(keybutton){
  let letters = document.querySelectorAll('.letter');
  console.log(letters.length);
  let result = null;
  for (let i=0; i<letters.length; i++){
    if (letters[i].textContent.toUpperCase() == keybutton.textContent.toUpperCase()){
      letters[i].classList.add("show");
      result = keybutton;
    }
  }
  return result;
}

//button that will init checking for letter
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName == "BUTTON"){
    e.target.className = "chosen";
    e.target.disabled = true;
    let letterFound = checkLetter(e.target);
  }
});
