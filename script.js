$(document).ready(function(){
    $(window).scroll(function () {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');

        }
    });
    //Typing Script

    var typed = new Typed(".typing", {
        strings: ["Creative Enthusiast", "Application Developer", "Designer", "Videographer", "Photographer", "Soccer Freestyler"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //Script to toggle menu and navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })
});