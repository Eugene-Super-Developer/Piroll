$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', '' ], /*стрелочки*/

        responsive:{
            600:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});