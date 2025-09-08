//acquisisco gli elementi in pagina
let myCountOut = document.getElementById("countdown");
let myDisplay = document.getElementById("numbers-list");
let myMainOut = document.getElementById("message");
let mainBtn = document.querySelector("button");
let myInputGroup = document.getElementById("input-group");
//seleziono il form
let myForm = document.getElementById("answers-form");
//seleziono i valori inseriti



//genero i numeri casuali
//verifico che i numeri non si ripetino
let myArray = generateRandom(5, 1, 50);
console.log(myArray);

// visualizzo in pagina i numeri da ricordare
for (let i = 0; i < myArray.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = myArray[i];
    myDisplay.appendChild(li);
}

//faccio partire il timer di 30 secondi   
// i numeri generati spariscono
console.log(myDisplay.classList);
 //implemento intervallo
        let myCountDown = 30;
        myCountOut.textContent = myCountDown;
        mainBtn.disabled = true;
        const myInterval = setInterval(() => {
            myCountDown--;
            myCountOut.textContent = myCountDown;
        //timer scaduto
        if (myCountDown === 0) {
            clearInterval(myInterval);
            hideNumbs(myDisplay);
            myInputGroup.classList = "d-flex gap-5 d-block"
            myCountOut.textContent = "tempo scaduto";
            mainBtn.disabled = false;
        }
        }, 1000);


//acquisisco i numeri inseriti dall'utente
myForm.addEventListener("submit",
    function (event) {
        event.preventDefault();
        const userNumb = myForm.querySelectorAll("input.form-control");
        let guess = [];
        for (let i = 0; i < userNumb.length; i++) {
            guess.push(Number(userNumb[i].value));
        }
        console.log(guess);
        //confronto i numeri generati con quelli inseriti dall'utente
        let guessesCounter = 0;
        let rightGuesses = [];
        for (let i = 0; i < guess.length; i++) {
            if (myArray.includes(guess[i])) {
                guessesCounter++;
                console.log("hai indovinato!", guess[i]);
                rightGuesses.push(guess[i]);

            } else {
                console.log("non indovinato!", guess[i]);
            }
        }
        // out: quali e quanti numeri indovinati 
        console.log("Totale indovinati:", guessesCounter);
        if (guessesCounter > 4) {
            console.log("siamo qui vittoria" + rightGuesses);
            myMainOut.innerHTML = "Hai vinto! hai indovinato: " + rightGuesses;

        } else {
            console.log("siamo qui sconfitta");
            myMainOut.innerHTML = "Hai perso!: hai indovinato: " + rightGuesses
        }
    });

//genera n numeri casuali compresi tra min e max
function generateRandom(n, min, max) {
    let randomNumbs = [];
    while (randomNumbs.length < n) {
        rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomNumbs.includes(rand)) {
            randomNumbs.push(rand);
        }
    }
    return randomNumbs;
}

//fa sparire i numeri in pagina
function hideNumbs(myDisplay) {
    myDisplay.classList.add("d-none");
}
