(function($){

    var Background = {

        bgImage: [
            '../img/hawaii-beach-medium.jpg',
            '../img/bowling-ball-beach.jpg',
            '../img/dreamland.jpg',
            '../img/falling-hearts.png'
        ],

        image: function(){
            return this.bgImage[
                Math.floor(Math.random()*this.bgImage.length)
            ];
        },

        init: function(){

            var img = new Image();

            $('html').css({
                'background-image': 'url(' + this.image() + ')'
            });

            $(img).attr('src', this.image()).
            on("load", function(){
                setTimeout(function(){

                    window.scrollTo(0,1);

                    setTimeout(function(){
                        $('html').fadeIn(1000, function(){
                            Main.setMargin(false);
                        });

                    }, 100);
                }, 0);
            });
        }

    };

    var Main = {

        mql: window.matchMedia("(min-width: 561px)"),

        marginTop: function() {

            var marginTop = parseInt($('.main').css('padding-top'), 10)*2 + $('.main').height();

            marginTop = '-' + (marginTop/2) + 'px';

            return marginTop;
        },

        setMargin: function(bool){

            if (bool){
                $('.main').css({ 'margin-top': this.mql.matches ? this.marginTop() : '0px' });
            } else {
                $('.main').css({ 'margin-top': this.mql.matches ? this.marginTop() : '0px' }).
                addClass('fadeInDownBig');
            }
        },

        init: function() {

            $('.main').css({ 'opacity': 0 });

            $(window).resize(function(){ Main.setMargin(true); });
        }
    };

    Background.init();
    Main.init();

})(jQuery);
