;(function ($){
    $(function() {
     
		console.log('callllll')	
		
		$('#connect-submit').click(function() {
			$('#connect-form').submit();
			$('.connect__success').removeClass('hide');
		})


    });
})(jQuery);
