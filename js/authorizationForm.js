$(".header-submenu input").change(function(event) {
	// $("#password").blur(function(event) {
	//	});


		if ( $(this).val() ) {
			$(this).addClass('hasText');
		}
		else {
			$(this).removeClass('hasText');
		}
		return false;
});
