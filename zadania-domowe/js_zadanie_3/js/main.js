const tablica = [1, 2, 3, 4, 5, 6];

function tablicaDzialania(tablica) {
    let suma = 0;
    let iloczyn = 1;
    for (let i = 0; i < tablica.length; i++) {
        suma += tablica[i]
    };
    for (let i = 0; i < tablica.length; i++) {
        iloczyn = iloczyn * tablica[i]
    };
    console.log(suma);
    console.log(iloczyn);
}

tablicaDzialania(tablica);