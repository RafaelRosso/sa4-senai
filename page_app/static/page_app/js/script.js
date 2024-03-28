$(function() {
    var header = jQuery(".voltar-topo");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        
        if (scroll <= 300) { // Altura da pagina em pixels
            header.addClass('display-none');
        } else {
            header.removeClass("display-none");
        }
    });
});

