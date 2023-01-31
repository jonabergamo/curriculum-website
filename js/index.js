const menu  = document.querySelector('.menu');
const NavMenu  = document.querySelector('.nav-menu');
var load  = document.querySelector('#load')


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

/*setTimeout(function unwait(){
    load.style.display = "none";
    load.style.overflow = "none"
}, 5000)*/

window.addEventListener("load", function() {
    load.style.display = "none";
})

AOS.init({
    duration: 1500,
    offset: 200,
    once: true,
  })
  

let progress = document.getElementById("progressbar")
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + "%"
}


const html = document.querySelector("html")
const checkbox = document.querySelector('#darkModeToggle')

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
})