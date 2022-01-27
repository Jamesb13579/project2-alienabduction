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

let answer = '';
let maxWrongGuesses = 8;
let mistakes = 0;
let guessedLetters = [];


/**
 * pick random word from wordOptions
 */
function chooseWord() {
    word = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    alert(word)
    }

function guessedWord() {
    amountOfLetters = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      
    document.getElementById('random-word').innerHTML = amountOfLetters;
    }

document.getElementById('maxWrongGuesses').innerHTML = maxWrongGuesses;

chooseWord();
guessedWord();