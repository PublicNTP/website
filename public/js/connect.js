; (function ($) {
  $(function () {

    $('.connect__input').focus(function () {
      $($(this).siblings('label')[0]).addClass('connect__label--focused');
    })

    $('#connect-submit').click(function () {
      var email = $('#connect-email').val();
      var url = 'https://script.google.com/macros/s/AKfycbxKkfd0ksCsUAfrp9-a5aq06eH19AuWffjbDUX7tFKP21gtfBA/exec'
      var $form = $('#connect-form');

      if (email !== '' && validateEmail(email)) {
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: $form.serializeObject()
        }).success(function () {
          console.log('Contact form submitted!');
        });

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

    // Form Code
    $.fn.serializeObject = function () {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name]) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
        } else {
          o[this.name] = this.value || '';
        }
      });
      return o;
    };

  });
})(jQuery);
