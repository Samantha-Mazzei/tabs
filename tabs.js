/*
 * License MIT (c) 2015 Samantha-Mazzei <http://samantha-mazzei.com>
 */
$(document).ready(function() {
    // Afficher uniquement le premier contenu
    $('.tabs > *:first-child').addClass('active');
    $('.tabs-contents > *').hide();
    $('.tabs-contents > *:first-child').show();
    
    // Lorsqu'on clique sur un onglet
    $( ".tabs > *" ).click(function() {
        // Activer seulement l'onglet cliqué
        $('.tabs > *').removeClass('active');
        $(this).addClass('active');
        // Récupérer la position par rapport à ses frères
        var index = $(this).index();
        // Afficher le contenu correspondant à l'onglet cliqulé
        $('.tabs-contents > *').hide();
        $('.tabs-contents > *').eq(index).show();
    });
});