$(function(){
    setTimeout(function(){ window.scrollTo(0,1); }, 0);

    var bgImage = [
        '../img/hawaii-beach-medium.jpg',
        '../img/bowling-ball-beach.jpg',
        '../img/dreamland.jpg',
        '../img/falling-hearts.png'
    ];

    var image = bgImage[Math.floor(Math.random()*bgImage.length)];

    $('html').css({
        'background-image': 'url(' + image + ')'
    });

    setTimeout(function(){ $('html').fadeIn(1000); }, 100);
});
