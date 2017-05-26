;(function ($){
    $(function() {

			console.log('v1');

			var getIndexFromId = function(tag) {
				return parseInt($(tag).attr('id').split('-')[1]);
			}
	
			$('#side-location-0').addClass('show')
			$('#location-0').addClass('active')

			var active = 0;

			$('.home__location').hover(function() {
				var outer = $(this).find('.home__location--outer');
				if (outer.length !== 0) {
					$(this).addClass('slow-active')
					$(outer[0]).addClass('active');
					$(outer[0]).children('.home__location--multiple').addClass('active');
				} else {
					$(this).addClass('active')
				}
			}, function () {
				var outer = $(this).find('.home__location--outer');
				var isActive = getIndexFromId(this) === active;
				if (!isActive && outer.length == 0) {
					$(this).removeClass('active');
				} else if (!isActive) {
					$(this).removeClass('slow-active');
					$(outer[0]).removeClass('active');
					$(outer[0]).children('.home__location--multiple').removeClass('active');
				}
			})


			$('.home__location').click(function() {
				active = getIndexFromId(this);
				$('.home__sidebar-wrap').removeClass('show')
				$('.home__location').removeClass('active')
				$('.home__location--outer').removeClass('active')
				$('.home__location--mulitple').removeClass('active')
				$('.home__location').removeClass('slow-active')

				$('#side-' + $(this).attr('id')).addClass('show')
				var outer = $(this).find('.home__location--outer');
				if (outer.length !== 0) {
					$('#' + $(this).attr('id')).addClass('slow-active')
					$(outer[0]).addClass('active');
					$(outer[0]).children('.home__location--multiple').addClass('active');
				} else {
					$('#' + $(this).attr('id')).addClass('active')
				}
			})

    });
})(jQuery);