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
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let underlined = null;

/**
 * pick random word from wordOptions
 */
function chooseWord() {

    wordChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    alert(wordChoice)
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
      checkIfGameWon();
    } else if (wordChoice.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture();
    }
  }

chooseWord();
generateButtons() 
guessedWord();