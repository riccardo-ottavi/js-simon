//genero i numeri casuali
//verifico che i numeri non si ripetino
let myArray = generateRandom(5, 0, 50);
console.log(myArray);






//faccio partire il timer di 30 secondi e  visualizzo in pagina i numeri da ricordare

// i numeri generati spariscono

//acquisisco i numeri inseriti dall'utente

//confronto i numeri generati con quelli inseriti dall'utente

// out: quali e quanti numeri indovinati 













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

