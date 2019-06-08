// 1. Particles
// 2. Menu


/*------------------------------------------------------------------------------
1. PARTICLES
------------------------------------------------------------------------------*/

particlesJS.load("hero_particles", "particles.json");


/*------------------------------------------------------------------------------
2. MENU
------------------------------------------------------------------------------*/

const openMenu = document.querySelector("#open-menu");
const panel = document.querySelector("#menu-panel");
const closeMenu = document.getElementsByClassName("close-menu");

openMenu.addEventListener("click", function () {

    panel.classList.add("show-menu");
});

// Fast Solution. Check later for better...
function close() {
    panel.classList.remove('show-menu');
}

closeMenu[0].onclick = function() {close()};
closeMenu[1].onclick = function() {close()};
closeMenu[2].onclick = function() {close()};
closeMenu[3].onclick = function() {close()};

