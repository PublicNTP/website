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
				$(this).addClass('active')
			}, function () {
				console.log(getIndexFromId(this), active)
				if (getIndexFromId(this)  !== active) $(this).removeClass('active');
			})


			$('.home__location').click(function() {
				active = getIndexFromId(this);
				$('.home__sidebar-wrap').removeClass('show')
				$('.home__location').removeClass('active')
				$('#side-' + $(this).attr('id')).addClass('show')
				$('#' + $(this).attr('id')).addClass('active')
			})

    });
})(jQuery);
