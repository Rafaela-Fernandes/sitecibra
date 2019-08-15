// Autor: Rafaela Fernandes 
// Cargo: Desenvolvedora Junior
// Data: 26/07/2019

$(document).ready(function(){
    
    // Carousel da sessao produto. Usando Plugin Slick JS;
    $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 3,
                arrows: false,
                autoplay: true,
                 speed: 1000,
                slidesToScroll: 3,
                dots: true,

                responsive: [
                    
                   
                    {
                        breakpoint: 800,
                        settings: {
                            arrows: true,
                            slidesToShow: 2
                        }
                    },
                             
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: true,
                            slidesToShow: 1,
                            dots: false
                        }
                    }
                ]
            });
})
