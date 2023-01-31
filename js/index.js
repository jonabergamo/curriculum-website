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

// modo escuro

const html = document.querySelector("html")
const body = document.querySelector("body")
const img = document.querySelector("#logo-img")
const checkbox = document.querySelector('#darkMode')

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    img.style.filter = "invert()"
})