$ (document) .ready(function(){
    $('#header-scroll').hide();
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $('#header-scroll').fadeIn('fast');
        }
        else {
            $('#header-scroll').fadeOut('fast');
        }
    });
});
$ (document) .ready(function(){
    $(".header-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        navText: ''
    });
});

$ (document) .ready(function(){
    $(".post-slider").owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        navText: '',
        loop: true
    });
});

$ (document) .ready(function(){
    $(".img-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        navText: ''
    });
});