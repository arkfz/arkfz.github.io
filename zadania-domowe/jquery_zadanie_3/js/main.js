$(function () {

    let wyplaty = $('.salary');
    let przycisk = $('#count-sum');
    let tutajWyswietl = $('#sum');

    przycisk.click(function () {
        let suma = 0;
        tutajWyswietl.text(0);
        wyplaty.each(function () {
            suma += +$(this).text()
        });
        tutajWyswietl.text(suma);
    })
});