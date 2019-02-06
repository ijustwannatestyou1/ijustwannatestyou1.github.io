$(function() {										// сброс значений
	$(window).resize(function() {
		if( $(window).width() > 480) {
			$(".catalog").show();
			$(".main-nav ul").show();
		}
		else {
			$(".catalog").hide();
			$(".main-nav ul").hide();
			$(".main-nav").removeClass('opened-lvl1');
			$(".main-nav").removeClass('opened-lvl2');
		}
	});
});

$("#menu-button").click(function(event) {		// открытие/закрытие меню 1 уровня
	$(".main-nav ul").toggle();
	$(".main-nav").toggleClass('opened-lvl1');
	$(".catalog").hide();
	$(".catalog-button").removeClass('opened-lvl2');
	$(".main-nav").removeClass('opened-lvl2');
});

$("#catalog-button").click(function(event) {	// меню 2 уровня
	$(".catalog").toggle();
	$("#catalog-button").toggleClass('opened-lvl2');
	$(".main-nav").toggleClass('opened-lvl2');
});



