function initFlipbook() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  
  var isMobile = windowWidth < 768;
  var displayMode = isMobile ? 'single' : 'double';

  var width = isMobile ? windowWidth * 0.9 : 1000;   // 1000px desktop
  var height = isMobile ? windowHeight * 0.9 : 700;  // 700px desktop

  $('#flipbook').turn({
    width: width,
    height: height,
    autoCenter: true,
    display: displayMode,
    acceleration: true,
    gradients: true,
    elevation: 50,
    duration: 1000,
    pages: $('#flipbook .page').length
  });
}

// Inizializza al caricamento
$(document).ready(initFlipbook);

// Ricalcola se si ridimensiona finestra
$(window).resize(function() {
  $('#flipbook').turn('destroy');
  initFlipbook();
});

// Controlli pulsanti
$('#prev').click(function(){ $('#flipbook').turn('previous'); });
$('#next').click(function(){ $('#flipbook').turn('next'); });
$('#download').click(function(){ alert('Funzione download da implementare'); });
$('#print').click(function(){ window.print(); });
$('#home').click(function(){ window.location.href = 'https://www.febax.it'; });
