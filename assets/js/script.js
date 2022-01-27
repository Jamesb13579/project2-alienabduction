var wordOptions = [
    "SPACEMAN",
    "ABDUCTION",
    "PROBE",
    "SPACESHIP",
    "ENCOUNTER",
    "CONSPIRACY",
    "GALAXY",
    "INVASION",
    "MARTIAN",
    "PLANETS",
    "SIGHTINGS",
    "VOYAGE",
    "CROPCIRCLE",
    "MOTHERSHIP",
    "ROSWELL",
    "SPECIES",
    "ASTEROID",
    "ORBITING",
    "EUROPA",
    "UNIVERSE",
    "TELESCOPE",
    "PHENOMENON",
    "SOLAR",
    "LANDER",
    "QUASARS",
    "VISITED",
    "WEAPONS",
    "UNEXPLAINED",
];

let wordChoice = '';
let maxWrongGuesses = 8;
let mistakes = 0;
let guessed = [];
let underlined = null;

/**
 * pick random word from wordOptions
 */
function chooseWord() {

    wordChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
}


function guessedWord() {
    underlined = wordChoice.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      
    document.getElementById('random-word').innerHTML = underlined;
}
document.getElementById('maxWrongGuesses').innerHTML = maxWrongGuesses;

function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
  
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (wordChoice.indexOf(chosenLetter) >= 0) {
      guessedWord();
      gameWon();
    } else if (wordChoice.indexOf(chosenLetter) === -1) {
      mistakes++;
      addToMistakes();
      gameOver();
      updateImage();
    }
}

function gameWon(){
    if ( wordChoice === underlined) {
        document.getElementById('random-word').innerHTML = "Congratulations Winner!!!!";
        document.getElementById('keyboard').innerHTML = `Would you like to play again`; 
    }
}

function gameOver() {
    if (mistakes === maxWrongGuesses){
       document.getElementById('random-word').innerHTML = `You lost!! Try again!!`;
       document.getElementById('keyboard').innerHTML = `The answer was ${wordChoice}.`; 
       document.getElementById('main-image').src =`assets/images/alien-8.jpg`;
    }
}
function addToMistakes(){
    document.getElementById("mistakes").innerHTML = mistakes;
}
let image = 0
function updateImage(){
    document.getElementById('main-image').src = `assets/images/alien-` + ++image + `.jpg`;
}
function reset(){
    location.reload()
}


chooseWord();
generateButtons() 
guessedWord();