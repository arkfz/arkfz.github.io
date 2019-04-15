const nav = $('#nav');
const widoczne = $('.navbar-nav .nav-item'); // Zmiana Hover

$(window).on('scroll', function() {
    if($(window).scrollTop() > 50) { //50 - wartosc pikseli przerolowania
        nav.addClass('scroll');   
        // widoczne.addClass('zmianaHover'); // Zmiana Hover <--- NIEPOTRZEBNE
    } else {
        nav.removeClass('scroll'); 
        // widoczne.removeClass('zmianaHover'); // Zmiana Hover <--- NIEPOTRZEBNE
    }
});

// Mozna nie na sztywno 50, tylko zrobic to dynamicznie po wysokosci sekcji i gdzie sie znajduje scroll.