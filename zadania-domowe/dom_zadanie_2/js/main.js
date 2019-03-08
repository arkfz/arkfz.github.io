let przycisk = document.querySelector('button');

function dodajKolejny() {
    let miejsce = document.getElementById('items');
    let numer = document.getElementById('items').childElementCount;
    numer++
    let element = document.createElement('li');
    let zawartosc = document.createTextNode(`Item ${numer}`);
    miejsce.appendChild(element);
    element.setAttribute('class', 'item');
    element.appendChild(zawartosc);
}

przycisk.addEventListener('click', dodajKolejny);