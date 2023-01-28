

const menu  = document.querySelector('.menu');
const NavMenu  = document.querySelector('.nav-menu');
var load  = document.querySelector('#load')


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

setTimeout(function unwait(){
    load.style.display = "none";
    load.style.overflow = "none"
}, 5000)

/*window.addEventListener("load", function() {
    load.style.display = "none";
})*/
