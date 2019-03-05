let jsonPracownicy = { "pracownicy": [{ "firstName": "Krystian", "lastName": "Dziopa" }, { "firstName": "Anna", "lastName": "Szapiel" }, { "firstName": "Piotr", "lastName": "Żmuda" }] };

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function (list, index) {
    console.log(index + ' ' + list.firstName + ' ' + list.lastName)
});