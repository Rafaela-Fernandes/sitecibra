// Autor: Rafaela Fernandes 
// Cargo: Desenvolvedora Junior
// Data: 26/07/2019



$(document).ready(function () {

    // Script de animaca do menu quando mobile
    $(".navbar-toggler").click(function () {

        $("#navbarSupportedContent").toggle("slide", {
            direction: "right"
        }, 700)
    })

    $("#navbarSupportedContent a").click(function () {
        $("#navbarSupportedContent").hide('fade')

    })

    // Script de mudança do menu que fica no header  
    var nav = $('header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            nav.addClass("menu-fixo");
            $("header .navbar-brand img").addClass("logo-topo-alterada");
            $("header .navbar").addClass("borda-removida");
            $(".text-redes-sociais").css("display", "none");
        } else {
            nav.removeClass("menu-fixo");
            $("header .navbar-brand img").removeClass("logo-topo-alterada");
            $("header .navbar").removeClass("borda-removida");
            $(".text-redes-sociais").css("display", "block");
        }
    });

      
    //script para fazer a troca dos accordions da section onde estamos

    $('#select-onde-estamos').change(function () {
        $("#acordion-fabricas").toggle("fade");
        $("#accordion-escritorios").toggle("fade");
    })

    // script para mudança de mapa da section onde estamos
     $(".accordion a").click(function(e){
         e.preventDefault();
         var valor  = $(this).attr("href");
         $("#mapa iframe").attr("src", valor);
        
     })

});