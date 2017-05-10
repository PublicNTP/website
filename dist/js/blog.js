;(function ($){
    $(function() {

		$('.blog__search').click(function() {
			$('.blog__search-input').removeClass('blog__search-input-hide');
			$('.blog__search-item-wrap').removeClass('blog__search-input-hide');
		})

		$('.blog__x').click(function() {
			$('.blog__search-input').addClass('blog__search-input-hide');
			$('.blog__search-item-wrap').removeClass('blog__search-input-hide');
		})

		$('.time__year').click(function() {
			var time_wrap = $(this).siblings('.time__wrap');
			if ($(time_wrap[0]).hasClass('time__closed')) {
				$($(this).find('.time__icon')[0]).addClass('unrotate');
				time_wrap.each(function(index) {
					$(time_wrap[index]).removeClass('time__closed')
				});
			} else {
				$($(this).find('.time__icon')[0]).removeClass('unrotate');
				time_wrap.each(function(index) {
					$(time_wrap[index]).addClass('time__closed')
				});
			}
		})

    });
})(jQuery);
