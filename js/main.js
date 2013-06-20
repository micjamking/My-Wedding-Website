(function($){

    var Background = {

        bgImage: [
            '../img/hawaii-beach',
            '../img/bowling-ball-beach',
            '../img/dreamland',
            '../img/falling-hearts'
        ],

        image: function(){
            return this.bgImage[
                Math.floor(Math.random()*this.bgImage.length)
            ];
        },

        imageSize: function(){

            var size,
                width = $(window).width();

            if (width > 1280){ size = 'x-large'; } 
            else if (width > 768){ size = 'large'; } 
            else if (width > 480){ size = 'medium'; } 
            else { size = 'small'; }

            return size;
        },

        init: function(){

            var fake    = new Image(),
                image   = this.image() + '-';
                FIREFOX = /Firefox/i.test(navigator.userAgent);

            $('html').css({
                'background-image': 'url(' + image + this.imageSize() + '.jpg' + ')'
            });

            $(fake).attr('src', image + this.imageSize() + '.jpg').on("load", function(){

                setTimeout(function(){

                    window.scrollTo(0,1);

                    setTimeout(function(){

                        if (FIREFOX) {
                            $('html').css({'display': 'block'});
                        }

                        $('html').fadeIn(1000, function(){

                            Main.setMargin(false);
                        });

                    }, 100);
                }, 0);
            });

            $(window).resize(function(){

                $('html').css({
                    'background-image': 'url(' + image + Background.imageSize() + '.jpg' + ')'
                });
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

            $('.main').css({ 'margin-top': this.mql.matches ? this.marginTop() : '0px' });

            if (!bool){
                $('.main').addClass('fadeInDownBig');
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
