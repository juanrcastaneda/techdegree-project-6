const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];

//Start Game Remove Overlay
startButton.addEventListener("click", (event) => {
    overlay.style.display = 'none';
});