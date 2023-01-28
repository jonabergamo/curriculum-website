

const menu  = document.querySelector('.menu');
const NavMenu  = document.querySelector('.nav-menu');
var load  = document.querySelector('#load')


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


window.addEventListener("load", function() {
    load.style.display = "none";
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
