const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//milestone 1
const imageMyCarousel = document.querySelector(".my-carousel-images");
  
images.forEach((curImages) =>{

//     //STAMPA NEL DOM TUTTE LE INFO
const imagElem = `
<div class="my-carousel-item " carousel-item="1">
    <img class="img-fluid" src="${curImages.image}"
    alt="Marvel's Spiderman Miles Morale picture"</img>
  <div class="item-description px-3">
    <h2>${curImages.title}</h2>
    <p>${curImages.text}</p>
  </div>
</div>`;
imageMyCarousel.innerHTML += imagElem;

  });

  const imagSlide = document.querySelectorAll(".my-carousel-item ");
  console.log(imagSlide);

  let activImag = 0;

  imagSlide[activImag].classList.add("active");

  document.querySelector(".my-next").addEventListener("click", function (){
  
    imagSlide[activImag].classList.remove("active")
    if (activImag < images.length -1){ 
      activImag++

    } else {
      activImag = 0
    }
    imagSlide[activImag].classList.add("active");
  })

  document.querySelector(".my-previous").addEventListener("click", function (){
  
    imagSlide[activImag].classList.remove("active")
    if (activImag < images.length -1){ 
      activImag++

    } else {
      activImag = 0
    }
    imagSlide[activImag].classList.add("active");
  })

  

