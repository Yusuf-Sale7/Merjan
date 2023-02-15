/*global $*/
$(document).ready(function () {
  'use strict';
  
  
  // Hotel Info
  $('.hotel-info .rooms .rooms-filter h5').click(function () {
    $(this).siblings('.opt-menu').slideToggle(200);
  });

  $('.hotel-info .rooms .rooms-filter .opt-menu ul .apply span').click(function () {
    $(this).parents('.opt-menu').fadeOut(200);
  });

  $('.hotel-info .rooms .more-rooms .more').click(function () {
    $('.hotel-info .rooms .room-info.hidden').css('display', 'flex');
    $(this).fadeOut(0);
    $('.hotel-info .rooms .more-rooms .less').css('display', 'inline-block');
  });

  $('.hotel-info .rooms .more-rooms .less').click(function () {
    $('.hotel-info .rooms .room-info.hidden').css('display', 'none');
    $(this).fadeOut(0);
    $('.hotel-info .rooms .more-rooms .more').css('display', 'inline-block');
  });


  
  
	//dateDropper
	$('input.datePicker').dateDropper();

  
	$('.nbar .openBtn').click(function () {
    $(this).toggleClass('opened');
    
		$('.float-menu .menu').toggleClass('view');
	});
  
  
	if ($(window).width() <= 750) {
    $('.nbar .links').css('display', 'none');
    $('.nbar .openMenu').css('display', 'inline-block');
  } else {
    $('.nbar .links').css('display', 'inline-block');
    $('.nbar .openMenu').css('display', 'none');
  }
  

    $('.hotel-info .amenities .op').click(function () {
      $('.hotel-info .amenities .det').slideToggle();
    });

    $('.hotel-info .info .op').click(function () {
      $('.hotel-info .info .des').slideToggle();
    });

    $('.hotel-info .policy h5').click(function () {
      $('.hotel-info .policy .des').slideToggle();
    });
  
  
  
//  Rang Slider
   $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 0, 10000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );
    });  
  
//  Popover
   $('[data-toggle="popover"]').popover();
  
  
  
//  Filter
  $('.search-results .full-filter .filter-options h5.tog').click(function () {
    $(this).children('.fa').toggleClass('fa-minus fa-plus');
    $(this).next('div').slideToggle(200);
  });
  
  $('.search-results .category .links a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  
  $('.search-edit .action-btns .edit').click(200, function () {
    $(this).fadeOut(200, function () {
      $('.search-edit .action-btns .exit').fadeIn(200);
    });
    
    $('.search-edit .place-result').fadeOut(200, function () {
      $('.search-edit .place-edit').fadeIn(200);
    });
  });
  
  $('.search-edit .action-btns .exit').click(200, function () {
    $(this).fadeOut(200, function () {
      $('.search-edit .action-btns .edit').fadeIn(200);
    });
    
    $('.search-edit .place-edit').fadeOut(200, function () {
      $('.search-edit .place-result').fadeIn(200);
    });
  });
  
  $('.search-edit .tags a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  
  

  // Hotel Info
  $('.hotel-info .amenities .det .more-less .more').click(function () {
    $('.hotel-info .amenities .det li.hidden').css({
      display: 'inline-block'
    });

    $(this).fadeOut(0)
    $('.hotel-info .amenities .det .more-less .less').fadeIn(0);
    $('.hotel-info .amenities .det .note').fadeIn(0);
  });
  
  $('.hotel-info .amenities .det .more-less .less').click(function () {
    $('.hotel-info .amenities .det li.hidden').css({
      display: 'none'
    });

    $(this).fadeOut(0)
    $('.hotel-info .amenities .det .more-less .more').fadeIn(0);
    $('.hotel-info .amenities .det .note').fadeOut(0);
  });

  $('.hotel-info .info .show-full .read-more').click(function () {
    $('.hotel-info .info .full-des').slideDown(300);
    $(this).fadeOut(0);
    $('.hotel-info .info .show-full .read-less').fadeIn(0);
  });
  
  $('.hotel-info .info .show-full .read-less').click(function () {
    $('.hotel-info .info .full-des').slideUp(300);
    $(this).fadeOut(0);
    $('.hotel-info .info .show-full .read-more').fadeIn(0);
  });
  
    $('.hotel-info .hotel-pics .goto a').click(function () {
      $('body, html').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
  });
  
  
  
//  Holiday Detais
  $('.holiday-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true
  });
  
  $('.hotel-slides .slides').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
  });
  
  
  
//  Activity search results
  $('.search-results .toggle-filter .open-filter').click(function () {
    $('.search-results .full-filter').fadeIn();
    $(this).fadeOut(100);
    $('.search-results .toggle-filter .apply-filter').fadeIn(100);
  });
  
  $('.search-results .toggle-filter .apply-filter').click(function () {
    $('.search-results .full-filter').fadeOut();
    $(this).fadeOut(100);
    $('.search-results .toggle-filter .open-filter').fadeIn(100);
  });
  
  
  
//  Reserve Page
  $('.reserve-page .reserve-details .more-details h5').click(function () {
    $(this).next('p').slideToggle();
    $(this).children('i').toggleClass('fa-angle-left fa-angle-down')
  });
  
  

  // Temp Offers
  $('.tempOffers').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    
  $('.user-rates').slick({
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  
  
  
  
  // The slider being synced must be initialized first
  $('#hotel-carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 120,
    itemMargin: 4,
    asNavFor: '#hotel-slider'
  });
 
  $('#hotel-slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#hotel-carousel"
  });
  
  
  $('#room-slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
  });

  
  $('#activity-slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
  });

});









$(window).resize(function () {
  'use strict';
  
  
	if ($(window).width() <= 750) {
    $('.nbar .links').css('display', 'none');
    $('.nbar .openMenu').css('display', 'inline-block');
    
  // Filter
    $('.search-results .full-filter').css('display', 'none');
    $('.search-results .toggle-filter .open-filter').css('display', 'inline-block');
    $('.search-results .toggle-filter .apply-filter').css('display', 'none');
    $('.search-results .full-filter').css('display', 'none');
  } else {
    $('.nbar .links').css('display', 'inline-block');
    $('.nbar .openMenu').css('display', 'none');
    
  // Filter
    $('.search-results .full-filter').css('display', 'block');
  
  }  
  
  
//  Hotel Details
	if ($(window).width() <= 558) {
    $('.hotel-info .amenities h5').addClass('op');
    $('.hotel-info .info h5').addClass('op');
    $('.hotel-info .policy h5').addClass('op');
    $('.hotel-info .amenities .det, .hotel-info .info .des, .hotel-info .policy .des').css('display', 'none');
  } else {
    $('.hotel-info .amenities h5').removeClass('op');
    $('.hotel-info .info h5').removeClass('op');
    $('.hotel-info .policy h5').removeClass('op');
    $('.hotel-info .amenities .det, .hotel-info .info .des, .hotel-info .policy .des').css('display', 'block');
  }
  
});

