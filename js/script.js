//acquisisco gli elementi in pagina
let myCount = document.getElementById("countdown");
let myDisplay = document.getElementById("numbers-list");

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
const timeOut = setTimeout(hideNumbs, 30000, myDisplay);
console.log(myDisplay.classList);



//acquisisco i numeri inseriti dall'utente

//confronto i numeri generati con quelli inseriti dall'utente

// out: quali e quanti numeri indovinati 



//genera n numeri casuali compresi tra min e max
function generateRandom(n, min, max) {
    let randomNumbs = [];
    while (randomNumbs.length < n) {
        rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomNumbs.includes(rand)){
            randomNumbs.push(rand);
        } 
    }
    return randomNumbs;
}

//fa sparire i numeri in pagina
function hideNumbs(myDisplay) {
    myDisplay.classList.add("d-none");
}
