(function($){
		$(function(){
			$(".block").on("click", function(event){
				$(".active").toggleClass("active");
				$(this).children().toggleClass("active");
				$(".p").removeClass("active");
			});
		});
	})(jQuery);