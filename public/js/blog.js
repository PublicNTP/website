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

    });
})(jQuery);
