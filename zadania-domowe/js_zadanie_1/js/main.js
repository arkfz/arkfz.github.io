function zapisWspak(napis) {
    let zamienNaTablice = napis.split("");
    let odwroc = zamienNaTablice.reverse();
    let wynik = odwroc.join(""); 
    return wynik;
}

console.log(zapisWspak("Akademia108"));