
/* OWL CAROUSEL */
$(document).ready(function(){

	var owl = $(".owl-carousel").owlCarousel({
		items : 1,
        itemsCustom : false,
        navigation : false,
        autoplay : true,
        stopOnHover : true,		
		loop:true,
        slideSpeed : 300,
        pagination : false,
        paginationNumbers: false,
        singleItem : true,
        transitionStyle : "fade",
        rewindSpeed : 2000,
        paginationSpeed : 2000,
	    onInitialize: callbackOwlInit
	});
	var owl2 = $(".owl-carousel2").owlCarousel({
	  autoplay: true,
	  items: 3,
	   responsive:{  
			0:{
			  items:1 // One item from 0px up to 479px
			},
			480:{
			  items:2 // Two items from 480px up to 677px
			},
			678:{
			  items:3 // Three items from 677px up to 959px
			},
			960:{
			  items:3 // Five items from 960px up
			}
			   
	   }
	});
	
	var owl3 = $(".owl-carousel2").data('owlCarousel');
	$(".leftActionOwl").on('click', function() { 
		owl3.prev();
		console.log('next');
	});
	$(".rightActionOwl").on('click', function() { 
		owl3.next();
	});
	

	function callbackOwlInit(event) {
		var control = 0;
		$('.owl-carousel div').each(function (index, value) { 
			var title = $(this).find('img').attr('title');
			if(!control) { $('.slider-label').html(title); control++; }
		});
	}
	owl.on('changed.owl.carousel', function(event) {
		var item  = event.page.index;  
		var title = $('.owl-carousel div:nth-child('+item+')').find('img').attr('title');
		if(title) { $('.slider-label').html(title); } else {  $('.slider-label').html(''); }
	});
	
});



/* MENU DROPDOWN */
$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 
    // If a menu is already open we close it
    //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
    // opening the one you clicked on
    $(this).parent().addClass('open');

    var menu = $(this).parent().find("ul");
    var menupos = menu.offset();
  
    if ((menupos.left + menu.width()) + 31 > $(window).width()) {
        var newpos = - menu.width();      
    } else {
        var newpos = $(this).parent().width();
    }
  menu.css({ left:newpos, top:'5px' });

});
