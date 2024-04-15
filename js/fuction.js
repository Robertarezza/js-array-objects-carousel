
// Funzione per avviare l'autoplay
function startAutoplay() {
    autoplayInterval = setInterval(changeImage, 1000); // Cambia l'immagine ogni 3 secondi
}

// Funzione per fermare l'autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Funzione per gestire il click sull'elemento del carousel
function handleCarouselClick() {
    stopAutoplay(); // Interrompe l'autoplay
    
    // Riprende l'autoplay dopo 3 secondi
    setTimeout(startAutoplay, 3000);
}
