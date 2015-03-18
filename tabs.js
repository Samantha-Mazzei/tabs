$(document).ready(function() {
    // Afficher uniquement le premier contenu
    $('.tabs-contents > *').hide();
    $('.tabs-contents > *:first-child').show();
    
    // Lorsqu'on clique sur un onglet
    $( ".tabs > *" ).click(function() {
        // Activer seulement l'onglet cliqué
        $('.tabs > *').removeClass('active');
        $(this).addClass('active');
        // Récupérer la position par rapport à ses frères
        var index = $(this).index();
        
        //TODO : Afficher le contenu correspondant à l'onglet cliqulé  
    });
});