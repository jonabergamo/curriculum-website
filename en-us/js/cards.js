// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Curriculum-style website",
    subtitle: "Website still under development, it consists of a resume created using HTML, CSS, and JavaScript. I am studying to make it 100% responsive for any device.",
    url: "https://jonabergamo.netlify.app",
    git: "https://github.com/jonabergamo/curriculum-website",
    thumb: "./imgs/pastinha.svg",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Simple Calculator",
    subtitle: "A website where it is possible to access a calculator that performs simple mathematical operations. It was made using HTML, CSS and JAVASCRIPT.",
    url: "https://calculadora-jona.netlify.app",
    git: "https://github.com/jonabergamo/Calculadora",
    thumb: "./imgs/pastinha.svg",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Simple Curriculum Website",
    subtitle: "This website was the first one I created, it consists of a basic resume made in HTML and CSS. It also has a bit of javascript where it adds a colorful scroll bar.",
    url: "#projects",
    git: "https://github.com/jonabergamo/Site-Curriculo",
    thumb: "./imgs/pastinha.svg",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "Python Exercises",
    subtitle: "Some exercises done in python for study purposes.",
    url: "#projects",
    git: "https://github.com/jonabergamo/CursoemVideo",
    thumb: "./imgs/pastinha.svg",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Matrix effect",
    subtitle: "This is an HTML canvas that has the matrix effect made using JavaScript.",
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


