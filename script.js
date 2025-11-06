$(document).ready(function() {

  // Funzione per ridimensionare flipbook
  function resizeFlipbook() {
    var width, height, displayMode;

    if (window.innerWidth <= 768) {
      // Mobile
      height = window.innerHeight;      // altezza piena dello schermo
      width = height / 1.414;           // rapporto A4
      displayMode = 'single';
    } else {
      // Desktop
      width = 842;
      height = 595;
      displayMode = 'double';
    }

    $('#flipbook').turn('size', width, height);
    $('#flipbook').turn('display', displayMode);
  }

  // Inizializza Turn.js
  $('#flipbook').turn({
    width: 842,          // larghezza desktop iniziale
    height: 595,         // altezza desktop iniziale
    autoCenter: true,
    display: 'double',   // doppia pagina desktop
    acceleration: true,
    gradients: true,
    elevation: 50,
    duration: 1000,
    pages: $('#flipbook .page').length
  });

  // Chiamata iniziale e on resize
  resizeFlipbook();
  $(window).resize(resizeFlipbook);

});
