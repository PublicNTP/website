;(function ($){
    $(function() {

      $('.connect__input').focus(function() {
        $($(this).siblings('label')[0]).addClass('connect__label--focused');
      })

		$('#connect-submit').click(function() {
      var email = $('#connect-email').val();

      if (email !== '' && validateEmail(email)) {
        $('#connect-form').submit();
        $('.connect__success').text('Thanks for subscribing!');
        $('.connect__success').removeClass('hide');

        $('#connect-name').val('');
        $('#connect-email').val('');
        console.log('email submit success - ', email);
      } else {
        $('.connect__success').text('Please enter a valid email address!');
        $('.connect__success').removeClass('hide');
        console.log('email submit failed');
      }

		})


    function validateEmail(email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    }

    });
})(jQuery);
