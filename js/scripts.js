//	изменение background-color при наличии текста в input 
$(".header-submenu input").change(function(event) {
		if ( $(this).val() ) {
			$(this).addClass('hasText');
		}
		else {
			$(this).removeClass('hasText');
		}
		return false;
});

//	авторизация через ссылку
$( "#submitLink" ).click(function() {
	$( "#authorizationForm" ).submit();
	return false;
});

//	сброс значений при смене десктоп/мобильной версии
$(function() {
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
		return false;
	});
});

//	открытие/закрытие меню 1 уровня
$("#menu-button").click(function(event) {
	$(".main-nav ul").toggle();
	$(".main-nav").toggleClass('opened-lvl1');
	$(".catalog").hide();
	$(".catalog-button").removeClass('opened-lvl2');
	$(".main-nav").removeClass('opened-lvl2');
	return false;
});

//	меню 2 уровня
$("#catalog-button").click(function(event) {
	$(".catalog").toggle();
	$("#catalog-button").toggleClass('opened-lvl2');
	$(".main-nav").toggleClass('opened-lvl2');
	return false;
});
