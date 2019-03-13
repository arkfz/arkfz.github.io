function pobierzDane() {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then(data => {
            let nowyDiv = document.createElement('div');
            nowyDiv.setAttribute('id', 'dane-programisty');
            document.querySelector('button').insertAdjacentElement('afterend', nowyDiv);
            document.querySelector('div').style.marginTop='10px';
            document.querySelector('div').style.fontFamily='Arial';
            nowyDiv.innerHTML = data.imie + ' ' + data.nazwisko + ' - ' + data.zawod + ' w ' + data.firma + '.';
        })
        .catch(error => console.log(error))
}
let btn = document.querySelector('button');
btn.addEventListener('click', pobierzDane);