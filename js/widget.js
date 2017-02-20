(function($){
	$(document).ready(function(){
        
	});

	// Window load event with minimum delay
	// @link https://css-tricks.com/snippets/jquery/window-load-event-with-minimum-delay/
	(function fn() {
		fn.now = +new Date;
		$(window).load(function() {
			if (+new Date - fn.now < 500) {
				setTimeout(fn, 500);
			}
			// Image Carousel
            if( $('.rwpw-image-carousel').length > 0 ) {
                $('.rwpw-image-carousel').each(function(index){
                    var instance = $(this).data('instance');
                    slideshowInstance(instance);
                });

                function slideshowInstance(instance) {
                    var obj = window['imagecarousel' + instance];

                    var sid = obj.id,
                        item = obj.items,
                        navigation = (obj.navigation == "true"),
                        pagination = (obj.pagination == "true"),
                        autoplay = (obj.autoplay == "true"),
                        smartspeed = obj.smartspeed,
                        fluidspeed = obj.fluidspeed,
                        autoheight = (obj.autoheight == "true"),
                        autowidth = (obj.autowidth == "true"),
                        lazyload = (obj.lazyload == "true"),
                        mergefit = (obj.mergefit == "true"),
                        center = (obj.center == "true"),
                        slidesmobile = obj.slidesmobile,
                        slidestablet = obj.slidestablet,
                        loop = obj.loop,
                        margin = obj.margin;

                    var owl = $('#' + sid);

                    owl.on('initialized.owl.carousel', function(e) {
                        var curr = $('#' + e.target.id),
                            maxHeight = 0;

                        curr.find('.owl-item img').each(function() {
                            if ($(this).height() > maxHeight) {
                                maxHeight = $(this).height();
                            }
                        });

                        curr.find('.owl-item').height(maxHeight);
                    });

                    owl.owlCarousel({
                        items: item,
                        margin: parseInt(margin),
                        nav: navigation,
                        dots: pagination,
                        autoplay: autoplay,
                        smartSpeed: smartspeed,
                        fluidSpeed: fluidspeed,
                        loop: loop,
                        autoHeight: autoheight,
                        center: center,
                        mergeFit: mergefit,
                        autoWidth: autowidth,
                        navText: ['&#xf104;', '&#xf105;'],
                        responsive: {
                            0: {
                                items: slidesmobile,
                                nav: navigation
                            },
                            768: {
                                items: slidestablet,
                                nav: navigation
                            },
                            1024: {
                                items: item,
                                nav: navigation
                            }
                        }
                    });
                }
            }

            // Testimonial
            if ($('.rwpw-testimonial').length > 0) {
                $('.rwpw-testimonial').each(function (index) {
                    var instance = $(this).data('instance');
                    testimonialInstance(instance);
                });

                function testimonialInstance(instance) {
                    var obj = window['testimonial' + instance];

                    var sid = obj.id,
                        item = obj.items,
                        navigation = (obj.navigation == "true"),
                        pagination = (obj.pagination == "true"),
                        autoplay = (obj.autoplay == "true"),
                        smartspeed = obj.duration,
                        fluidspeed = obj.speed,
                        autoheight = (obj.autoheight == "true"),
                        autowidth = (obj.autowidth == "true"),
                        mergefit = (obj.mergefit == "true"),
                        center = (obj.center == "true"),
                        slidesmobile = obj.slidesMobile,
                        slidestablet = obj.slidesTablet,
                        loop = (obj.loop == "true"),
                        margin = obj.margin;

                    var owl = $('#' + sid);

                    owl.owlCarousel({
                        items: item,
                        margin: parseInt(margin),
                        nav: navigation,
                        dots: pagination,
                        autoplay: autoplay,
                        smartSpeed: smartspeed,
                        fluidSpeed: fluidspeed,
                        loop: loop,
                        autoHeight: autoheight,
                        center: center,
                        mergeFit: mergefit,
                        autoWidth: autowidth,
                        // navText: ['&#xf104;', '&#xf105;'],
                        responsive: {
                            0: {
                                items: slidesmobile,
                                nav: navigation
                            },
                            768: {
                                items: slidestablet,
                                nav: navigation
                            },
                            1024: {
                                items: item,
                                nav: navigation
                            }
                        }
                    });
                }
            }

            // Popup
            if($('.rwpw-button').length > 0) {
                console.log('Hello World');
                $('.rwpw-button').each(function(index){
                    var instance = $(this).data('instance');
                    buttonInstance(instance);
                });
                function buttonInstance(instance) {
                    var obj = window['btn' + instance];
                    var sid = obj.id, 
                        type = obj.type;
                    var popup = $('#' + sid);
                    popup.magnificPopup({
                        type: type,
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                }
            }
		});
	})();
})(jQuery);