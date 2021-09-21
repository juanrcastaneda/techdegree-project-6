const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const ul = document.getElementById("phrase").children[0];
const triesContainer = document.getElementById("scoreboard").children[0];
const keyrow1 = document.getElementById("qwerty").children[0].children[0];
const button = overlay.children[1];

//prases
const phrases = [
    "monster hunter", "hit and run", "rocket league", "persona five", "rainbow six siege"
]

//Start Game Remove Overlay
startButton.addEventListener("click", () => {
    overlay.style.display = 'none';
    let phrase = getRandomPhraseAsArray(phrases)
    addPhraseToDisplay(phrase);
});

// function that randomly chooses string from an array and return a new array with characters from that string
function getRandomPhraseAsArray(array){
    let phrase = array[Math.floor(Math.random() * array.length)]; 
    let characterArray = phrase.split('');
    return characterArray;
}

//addphrase to display
function addPhraseToDisplay(phrase){
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
            let li = document.createElement('li');
            li.className = 'space';
            ul.appendChild(li);
        }
        else {
            let li = document.createElement('li');
            li.textContent = phrase[i];
            li.className = 'letter';
            ul.appendChild(li);
        }
    }
}

// checks if letter player chooses is in phrase      
//idk if this works need to make event listener
function checkLetter(button) {
    let phraseCharArray = ul.children;
    let match = null;
    for (let i = 0; i < phraseCharArray.length; i++) {
        if (button.textContent === phraseCharArray[i].textContent) {
            phraseCharArray[i].classList.add('show');
            match = phraseCharArray[i].textContent;
        }
    }
    return match;
}

//event listener when player presses digital keyboard button when choosing letters
qwerty.addEventListener('click', e => {
    if (e.target.parentElement.parentElement.id === "qwerty" && e.target.className !== "chosen") {
        e.target.classList.add("chosen");
        let letterFound = checkLetter(e.target);
        if (letterFound == null){
            document.getElementsByClassName("tries")[missed].children[0].src = "images/lostHeart.png";
            missed++
        }  
    }
    checkWin();
});

// checks if li's with show class are equal to li with letter class, if true displays win overlay. also checks if missed is over 4, if true displays lose overlay 
function checkWin() {
    if(document.getElementsByClassName('show').length === document.getElementsByClassName('letter').length){
        overlay.classList.add('win');
        overlay.children[0].textContent = "You Win";
        overlay.style.display = 'flex';
        overlay.removeChild(button);

    } else if (missed > 4){
        overlay.classList.add('lose')
        overlay.children[0].textContent = "You Lose";
        overlay.style.display = 'flex';
        overlay.removeChild(button);
    }
}

