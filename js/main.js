(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 100)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    // white background while scrolling.
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top + 100) {
          $('#mainNav').css('background-color','#FFFFFF')
                       .css('box-shadow','0 8px 80px rgba(11, 177, 255, 0.2)');
       } else {
          $('#mainNav').css('background-color', 'transparent')
                       .css('box-shadow','0 8px 80px rgba(11, 177, 255, 0)');
       }
    });

    var hamburger = $('.nav-mobile');
    var hamburger_ul = $('#nav-mobile-ul');
    hamburger.click(function(){
        // $('.nav-mobile-ul').css('background-color', 'transparent');
        hamburger_ul.slideToggle( "slow" );  
    });




})(jQuery); // End of use strict
