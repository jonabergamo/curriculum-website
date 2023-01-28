// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Website estilo curriculo",
    subtitle: "Website ainda em desenvolvimento, consiste em um curriculo criado utilizando HTML, CSS E JAVASCRIPT. Estou estudando torna-lo 100% responsivo para qualquer dispositivo.",
    url: "https://jonabergamo.netlify.app",
    git: "https://github.com/jonabergamo/curriculum-website",
    thumb: "./imgs/pastinha.svg",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Calculadora Simples",
    subtitle: "Um site onde é possivel acessar uma calculadora que faz operações matematicas simples. Foi feita utilizando HTML, CSS E JAVASCRIPT",
    url: "https://calculadora-jona.netlify.app",
    git: "https://github.com/jonabergamo/Calculadora",
    thumb: "./imgs/pastinha.svg",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Website Curriculo (Simples)",
    subtitle: "Este website foi o primeiro que criei, ele consiste em um curriculo básico feito em HTML e CSS. Também possui um pouco de javascript onde adiciona um scroll bar colorido.",
    url: "#projects",
    git: "https://github.com/jonabergamo/Site-Curriculo",
    thumb: "./imgs/pastinha.svg",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "Exercicios de Python",
    subtitle: "Alguns exercicios feitos em python para estudo.",
    url: "#projects",
    git: "https://github.com/jonabergamo/CursoemVideo",
    thumb: "./imgs/pastinha.svg",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Efeito Matrix",
    subtitle: "Este é um canvas em HTML que possui o efeito matrix feito utilizando JavaScript",
    url: "https://matrix-jona.netlify.app",
    git: "https://github.com/jonabergamo/Matrix",
    thumb: "./imgs/pastinha.svg",
    video_id: "GSqR2i-Pq6o"
  },

];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector('#url-link').href = video.url;
  cardClone.querySelector('#git-link').href = video.git;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--low").innerHTML =
    video.subtitle;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});

