let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let lista = document.createElement('ol');
document.body.appendChild(lista);

for (i = 0; i < cities.length; i++) {
    let pozycja = document.createElement('li');
    let tekst = document.createTextNode(cities[i]);
    pozycja.appendChild(tekst);
    pozycja.setAttribute('class', 'city');
    document.querySelector('ol').appendChild(pozycja);
}