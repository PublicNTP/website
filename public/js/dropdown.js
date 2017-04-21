;(function ($){
    $(function() {
     
		$('.dropdown__input').blur(function() {
			$($(this).siblings('.dropdown')[0]).removeClass('dropdown__show')
			var dd_close = $($(this).siblings('.dropdown__close')[0])
			$(dd_close.children()[0]).addClass('dropdown__arrow')
			$(dd_close.children()[1]).addClass('dropdown__arrow')
		})

		$('.dropdown__item').click(function() {
			var value = $(this).text()
			$($($(this).parent()).siblings('.dropdown__input')[0]).val(value)
		})
		
		$('.dropdown__input').click(function() {
			var sibClose = $($(this).siblings('.dropdown__close')[0])
			if ($(sibClose.children()[0]).hasClass('dropdown__arrow')) {
				$(sibClose.children()[0]).removeClass('dropdown__arrow')
				$(sibClose.children()[1]).removeClass('dropdown__arrow')
				$($(this).siblings('.dropdown')[0]).addClass('dropdown__show');
			} else {
				$(sibClose.children()[0]).addClass('dropdown__arrow')
				$(sibClose.children()[1]).addClass('dropdown__arrow')
				$($(this).siblings('.dropdown')[0]).removeClass('dropdown__show');
			}
		})
		
		
		 
    });
})(jQuery);
