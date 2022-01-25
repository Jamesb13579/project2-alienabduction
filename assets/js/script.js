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


let score = document.getElementById("guesses-left")
/**
 * pick random word from wordOptions
 */
 const game = 
    function chooseWord() {
        word = wordOptions[Math.floor(Math.random()*wordOptions.length)];;
            game.start();
        },

function start() {
    word = word.toUpperCase();
        $("#main-image").attr("src", "assets/images/alien-8.jpg");
    $("#randomWord").html(output);
    }

function LetterChoice (letter) {
    let error = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            output[i] = letter;
            error = false;
            game.rightGuess();
        }
    }
    if (error) {
        game.wrongGuess();
    }
}

// update displayed word and score
function rightGuess () {
    $("#random-word").html(output);
        // Check winning condition
    if (output.toString().replace(/,/g, "") == word) {
        $("#outcome").text("Well Done!");
        game.over();
    }
}

//  update image and score
function wrongGuess () {
    $("#main-image").attr("src", `assets/images/alien-` + score + `.jpg`);
    score -= 1;
    if (points < 0) { points = 0; }
    // Check losing condition
    if (score == 0) {
        $("#outcome").text("You Lost...");
        game.over();
        $("#main-image").attr("src", `assets/images/alien-` + score + `.jpg`);
    }
}

$(".btn-key").click(function () {
    $(this).attr("disabled", true);
    game.chooseLetter(this.textContent);
});