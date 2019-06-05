// 1. Particles
// 2. Menu


/*------------------------------------------------------------------------------
1. PARTICLES
------------------------------------------------------------------------------*/

particlesJS.load("hero_particles", "particles.json");


/*------------------------------------------------------------------------------
2. MENU
------------------------------------------------------------------------------*/

const panel = document.querySelector("#menu-panel");
const closeMenu = document.getElementById("close-menu");

document.querySelector("#open-menu").addEventListener("click", function () {

    panel.classList.add("show-menu");

});

document.querySelector('#close-menu').addEventListener('click', function(){

    panel.classList.remove('show-menu');
});
