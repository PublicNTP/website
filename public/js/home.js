;(function ($){
    $(function() {
	
	$('#side-location-0').addClass('show')

	$('.home__location').hover(function() {
		for (var i = 0; i < $('.home__sidebar-wrap').length; i++) {
			$($('.home__sidebar-wrap')[i]).removeClass('show')
		}
		$('#side-' + $(this).attr('id')).addClass('show')
	})

    });
})(jQuery);
