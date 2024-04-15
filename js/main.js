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
//bonus 1
const miniatures = document.querySelector(".my-thumbnails");


images.forEach((curImages) => {

  //     //STAMPA NEL DOM TUTTE LE INFO
  const imagElem = `
<div class="my-carousel-item " carousel-item="1">
    <img class="img-fluid" src="${curImages.image}"
    </img>
  <div class="item-description px-3">
    <h2>${curImages.title}</h2>
    <p>${curImages.text}</p>
  </div>
</div>`;
  imageMyCarousel.innerHTML += imagElem;

  //bonus 1
miniImag =  `
<img class=" my-thumbnail img-fluid" src="${curImages.image}" </img>`

  miniatures.innerHTML += miniImag
  //miniImag.classList.add("my-thumbnail")
  //console.log(miniImag);
 
});

//prendo la classe dove mi interessa poi metterci la stampa
const imagSlide = document.querySelectorAll(".my-carousel-item");
//console.log(imagSlide);

//setto a 0 l'indice corrente
let activImag = 0;

//aggiungo la classe active all'indice corrente
imagSlide[activImag].classList.add("active");
//console.log(imagSlide[activImag]);

//al click del bottone next 
document.querySelector(".my-next").addEventListener("click", clickNext);

function clickNext() {
  imagSlide[activImag].classList.remove("active")
  if (activImag < imagSlide.length - 1) {
      activImag++
    } else {
      activImag = 0
    }
    //aggiungo la classe
    imagSlide[activImag].classList.add("active");
}



//al click del bottone previous
document.querySelector(".my-previous").addEventListener("click", clickPrevious);
  //milestone 1 e 2
  //rimuovo la classe
  function clickPrevious() {
    
    imagSlide[activImag].classList.remove("active")
  
    //Se l'indice corrente è 0, 
    //   imposta l'indice sul immag finale, 
    //altrimenti 
    //   decrementa l'indice
  
    if (activImag == 0) {
  
      activImag = imagSlide.length - 1
  
    } else {
      activImag--
    }
    //aggiungo la classe
    imagSlide[activImag].classList.add("active");
  }



//bonus 1
//prendo la classe dove mi interessa poi metterci la stampa
const imagMiniSlide = document.querySelectorAll(".my-thumbnail");
console.log(imagMiniSlide);

//setto a 0 l'indice corrente
let activMiniImag = 0;

//aggiungo la classe active all'indice corrente
imagMiniSlide[activMiniImag].classList.add("active");
console.log(imagMiniSlide[activMiniImag]);

//al click del bottone next 
document.querySelector(".my-next").addEventListener("click", clickMiniNext)


function clickMiniNext() {
 
  //rimuovo la classe
  imagMiniSlide[activMiniImag].classList.remove("active")
  if (activMiniImag < imagMiniSlide.length - 1) {
    activMiniImag++

  } else {
    activMiniImag = 0
  }
  //aggiungo la classe
  imagMiniSlide[activMiniImag].classList.add("active");

}




//al click del bottone previous
document.querySelector(".my-previous").addEventListener("click", clickMiniPrevious);
  //milestone 1 e 2
  //rimuovo la classe
  function clickMiniPrevious() {
    
    imagMiniSlide[activMiniImag].classList.remove("active")

  //Se l'indice corrente è 0, 
  //   imposta l'indice sul immag finale, 
  //altrimenti 
  //   decrementa l'indice

  if (activMiniImag == 0) {

    activMiniImag = imagMiniSlide.length - 1

  } else {
    activMiniImag--


  }
  //aggiungo la classe
  imagMiniSlide[activMiniImag].classList.add("active");
}
  
//bonus 2
let clock = setInterval(clickNext, 3000)
let clockMini = setInterval(clickMiniNext, 3000)

document.getElementById("my-stop-button").addEventListener("click", function() {
  //se l'interval è attivo
  //lo stoppo
  //altrimenti
  //lo faccio ripartire
  if (clock !== null) {
    clearInterval(clock);
    clock = null;
  }else {
    clock = setInterval(clickNext, 3000);
    
  }
  if (clockMini !== null) {
    clearInterval(clockMini);
    clockMini = null;
  }else {
    clockMini = setInterval(clickMiniNext, 3000);
    
  }

})





