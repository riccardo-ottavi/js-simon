//genero i numeri casuali


let myArray = generateRandom(5, 0, 50);
console.log(myArray);

function generateRandom(n, min, max) {
    let randomNumbs = [];
    for (let i = 0; i < n; i++) {
        randomNumbs[i] = Math.floor((Math.random() * max) +1 );
    }
    return randomNumbs;
}

//verifico che i numeri non si ripetino

//faccio partire il timer di 30 secondi e  visualizzo in pagina i numeri da ricordare

// i numeri generati spariscono

//acquisisco i numeri inseriti dall'utente

//confronto i numeri generati con quelli inseriti dall'utente

// out: quali e quanti numeri indovinati 