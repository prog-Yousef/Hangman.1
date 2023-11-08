// Lista med ord
let wordList = ["apple", "banana", "car", "dog", "elephant",
    "flower", "guitar", "house", "ice cream", "jacket",
    "kite", "lion", "mountain", "notebook", "ocean",
    "pencil", "quilt", "rabbit", "sun", "tree"];

const wordDisplay = document.querySelector('.word-display');
let clickedWord;
let wrongGuessCount = 0;
const maxGuesses = 5;
const guessesText = document.querySelector(".guesses-text b");

// Slumpar ett ord
const RandomWord = () => {
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    clickedWord = answer;
    console.log(answer);
    wordDisplay.innerHTML = answer.split('').map(() => `<li class='letter'></li>`).join('');
}

// Initierar spelet när en knapp trycks
const initGame = (button, clicked) => {
    const clickedLetter = clicked.toLowerCase();

    if (clickedWord.includes(clickedLetter)) {
        [...clickedWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
            }
        });
    } else {
        wrongGuessCount++;
    }

    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
}

// Skapar knappar för den virtuella tangentbordet
const KeyboardDiv = document.querySelector('.keyboard');

for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement('button');
    button.innerText = letter;
    button.classList.add('virtual-key');
    KeyboardDiv.appendChild(button);

    button.addEventListener('click', function () {
        initGame(button, button.innerText);
        button.classList.add('active');
    });
}

// Väljer de virtuella knapparna
const virtualKeys = document.querySelectorAll('.virtual-key');

// Hanterar keydown-händelsen
document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();

    virtualKeys.forEach(function (virtualKey) {
        if (virtualKey.innerText === key) {
            initGame(virtualKey, key);
            virtualKey.classList.add('active');
        }
    });
});

RandomWord();
