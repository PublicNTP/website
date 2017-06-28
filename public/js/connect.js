;(function ($){
    $(function() {

      $('.connect__input').focus(function() {
        $($(this).siblings('label')[0]).addClass('connect__label--focused');
      })

		$('#connect-submit').click(function() {
			$('#connect-form').submit();
			$('.connect__success').removeClass('hide');
		})


    });
})(jQuery);
