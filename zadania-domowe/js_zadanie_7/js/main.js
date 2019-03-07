class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        if (this.przeczytana === true) {
            return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`;
        } else {
            return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor}.`
        }
    }
}

let harryPotter = new Ksiazka('Harry Potter i Książę Półkrwi', 'J.K. Rowling', true);
let wojewodzki = new Ksiazka('Nieautoryzowana Autobiografia', 'Kuba Wojewódzki', false);
let tatuazysta = new Ksiazka('Tatuażysta z Auschwitz', 'Heather Morris', false);

let ksiazki = [];
ksiazki.push(harryPotter, wojewodzki, tatuazysta);

const iloscPrzeczytanych = (ksiazki) => {
    let policz = 0;
    ksiazki.forEach(element => {
        if (element.przeczytana === true) {
            policz++;
        }
        console.log(element.opiszKsiazke());
    });
    console.log(`Przeczytanych: ${policz}`);
}

iloscPrzeczytanych(ksiazki);