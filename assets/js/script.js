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
      updateHangmanPicture();
    }
}

function gameWon(){
    if ( wordChoice === underlined) {
        document.getElementById('random-word').innerHTML = "Congratulations Winner!!!!";
    }
}

function gameOver() {
    if (mistakes === maxWrongGuesses){
       document.getElementById('random-word').innerHTML = `You lost!! The answer was ${wordChoice}. Try again!!`;
       document.getElementById('main-image').src =`assets/images/alien-0.jpg`;
    }
}
function addToMistakes(){
    document.getElementById("mistakes").innerHTML = mistakes;
}
function reset(){
    location.reload()
}


chooseWord();
generateButtons() 
guessedWord();