
/* OWL CAROUSEL */
$(document).ready(function(){

	var owl = $(".owl-carousel").owlCarousel({
		items : 1,
        autoPlay : true,
		navigation:true,
		navigationText: [
			'<i class="fa fa-angle-left fa-lg">',
			'<i class="fa fa-angle-right fa-lg">'
		],
        slideSpeed : 300,
        pagination : false,
        paginationNumbers: false,
        singleItem : true,
        transitionStyle : "fade",
        rewindSpeed : 2000,
        paginationSpeed : 2000
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
