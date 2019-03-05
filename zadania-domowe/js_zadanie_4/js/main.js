const tablica = [0, 1, 2, 3, 4, 5];

function sumaKwadratow(tablica) {
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        suma = suma + Math.pow(tablica[i],2);
    };
    return suma;
}

sumaKwadratow(tablica);

console.log(sumaKwadratow(tablica));