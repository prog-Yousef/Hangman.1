// En lista med ord
let wordList = ["apple", "banana", "car", "dog", "elephant",
    "flower", "guitar", "house", "ice cream", "jacket",
    "kite", "lion", "mountain", "notebook", "ocean",
    "pencil", "quilt", "rabbit", "sun", "tree"];

    /* **/

//random ord

const   wordDisplay = document.querySelector('.word-display');
let clickedWord; wrongGuessCount = 0;
const maxGuesses = 5;
//Ändrar klassen gusses-text! 
const guessesText = document.querySelector(".guesses-text b")

const RandomWord = () => {
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    clickedWord = answer;
    console.log(answer);
    wordDisplay.innerHTML =  answer.split('') .map(() => `<li class='letter'></li>`) .join('');
}




const initGame = (button,clicked) => {
    //Kontrollera om den valde bokstaven finns med i det nuvarande ord!
        if (clickedWord.includes(clicked)) {
            //Om bokstaven finns med i ordet så visas den i rätt postion/postioner i ordet 
            [...clickedWord].forEach((letter, index) => {
                if (letter === clicked) {
                    //Bokstaven visas i rätt postion!
            wordDisplay.querySelectorAll('li')[index].innerText = letter;
            //wordDisplay.querySelectorAll("li")[index].classList.add = ("guessed");
            }
        })
    } else {
        //adderar en "1" till antal fel gissningar varje gång man gissar fel!
        wrongGuessCount++;
        // Lägg till en ny kroppsdel varje gång man gissar fel
        
    
    } if ( wrongGuessCount > 5 ) { return;
    }
    //Lägger till antal fel gissade och maximala tillåtna fel!
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
}




//det här våran Tangentbord
//teckenkoden för 'a' är 97 och 'z' är 122 enligt ASCII-teckenkodtabellen.
const KeyboardDiv = document.querySelector('.keyboard');

for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    KeyboardDiv.appendChild(button);
    console.log(String.fromCharCode(i));
    button.addEventListener('click', b => initGame(b.target, String.fromCharCode(i)));
}


RandomWord();

/* ***************************************************************************** */
virtualKeys.forEach(function (virtualKey) {
    if (virtualKey.innerText === key) {
      initGame(virtualKey);
      virtualKey.classList.add("active");
    }
  });


/* ********************************************************************** */










