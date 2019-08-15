// Autor: Rafaela Fernandes 
// Cargo: Desenvolvedora Junior
// Data: 01/08/2019

$(document).ready(function($) { 

    // Scroll suave das sections
    
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
        $("#navbarSupportedContent").collapse('hide')
   });
    
    // Scroll botao footer
    
     $("#div-btn-topo").hide();


        $('#div-btn-topo a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#div-btn-topo').fadeIn();
            } else {
                $('#div-btn-topo').fadeOut();
            }
        });
    
});