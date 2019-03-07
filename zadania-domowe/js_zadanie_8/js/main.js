function sortowanieBabelkowe(parametr) {
    let tablica = [];
    tablica = parametr;
    let n = tablica.length;
    do {
        for (let i = 0; i < n - 1; i++) {
            if (tablica[i] > tablica[i + 1]) {
                let obecny = tablica[i];
                tablica[i] = tablica[i + 1];
                tablica[i + 1] = obecny;
            }
        }
        n = n - 1;
    } while (n > 1)
    return tablica;
}
console.log(sortowanieBabelkowe([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));