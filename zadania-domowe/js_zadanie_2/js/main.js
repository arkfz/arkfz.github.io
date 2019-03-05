function posortowanyNapis(napis) {
    let zamienNaTablice = napis.split("");
    let sortuj = zamienNaTablice.sort();
    let wynik = sortuj.join(""); 
    return wynik;
};

console.log(posortowanyNapis("Akademia108"));