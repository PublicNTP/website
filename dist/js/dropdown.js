;(function ($){
    $(function() {

		var firstHalfUrl = 'https://s3.amazonaws.com/stats.publicntp.org/png/stratum2'
		var secondHalfUrl = '-packets.png';
		var timeValue  = '0007d';
		var locationValue = '.pdx01';
     
		$('.dropdown__input').blur(function() {
			$($(this).siblings('.dropdown')[0]).removeClass('dropdown__show')
			var dd_close = $($(this).siblings('.dropdown__close')[0])
			$(dd_close.children()[0]).addClass('dropdown__arrow')
			$(dd_close.children()[1]).addClass('dropdown__arrow')
		})

		$('.report__image').load(function() {
				$('.report__curtain').removeClass('active');
		})


		$('.dropdown__item').click(function() {
			var name = $(this).text()
			var value = $(this).attr('value');
			var clickedItem = this;
			$('.report__curtain').addClass('active');
			window.setTimeout(function() {
				if ($(clickedItem).hasClass('dropdown__time')) {
					timeValue = value;	
					$('.report__time').text(name);
				} else {
					locationValue = value;	
				}
				$($($(clickedItem).parent()).siblings('.dropdown__input')[0]).val(name);
				$('.report__image').attr('src', firstHalfUrl + locationValue + '-' + timeValue + secondHalfUrl);
			
			}, 300)

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
