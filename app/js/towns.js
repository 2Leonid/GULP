(function($){
		$(function(){
			$.ajax({
				url: 'http://geoapi.spacenear.ru/api.php?method=getCities&limit=20',
				type: 'GET',
				dataType: 'json',
				success: function(data){
					for (var i = 0; i != data.length; i++) {
						$('.div').append('<option value="'+data[i].name+'" >' + data[i].name + '1</option>'  );
					}
				}	
			});
		})
	})(jQuery);