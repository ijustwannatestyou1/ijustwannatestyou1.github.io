$(function(){
	$(".category-item a").hover(function(){
		$(this).parent(".category-item").children("a").children("img").css("border-color", "green")
	},function(){           
	   	$(this).parent(".category-item").children("a").children("img").css("border-color", "#888");                    
	});
});