;(function ($){
    $(function() {


	$('#mobile-icon').click(function() {
		$(this).addClass('shrink')
		window.setTimeout(function() {
			$('.header__mobile-wrap').addClass('pull-out');
		}, 400)
	})
	
	$('#mobile-close').click(function() {
		$('.header__mobile-wrap').removeClass('pull-out');
		window.setTimeout(function() {
			$('#mobile-icon').removeClass('shrink')
		}, 400)
	})

    });
})(jQuery);
