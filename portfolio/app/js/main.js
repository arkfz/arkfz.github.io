// 1. Particles
// 2. Menu


//------------------------------------------------------------------------------
// 1. PARTICLES
//------------------------------------------------------------------------------

particlesJS.load("hero_particles", "particles.json");


//------------------------------------------------------------------------------
// 2. MENU
//------------------------------------------------------------------------------

// Open Menu
// Fast Solution. Check later for better...
const openMenu = document.getElementsByClassName("open-menu");
const closeMenu = document.getElementsByClassName("close-menu");
const panel = document.querySelector("#menu-panel");

function openM() {

    panel.classList.add("show-menu");
}

openMenu[0].onclick = function() {openM()};
openMenu[1].onclick = function() {openM()};
openMenu[2].onclick = function() {openM()};
openMenu[3].onclick = function() {openM()};

// Close Menu
function closeM() {

    panel.classList.remove("show-menu");
}

closeMenu[0].onclick = function() {closeM()};
closeMenu[1].onclick = function() {closeM()};
closeMenu[2].onclick = function() {closeM()};
closeMenu[3].onclick = function() {closeM()};


//------------------------------------------------------------------------------
// Change Hamburger Color - First Assumption.
// ScrollY doesn't work due CSS Settings?
// Check in the future.

// let scrollPosition = window.scrollY;
// window.addEventListener('scroll', function() {
//     scrollPosition = window.scrollY;
//     if (scrollPosition >= 30) {
//         openMenu.classList.add('darker');
//     } else {
//         openMenu.classList.remove('darker');
//     }
// });
//------------------------------------------------------------------------------
