;(function ($){
    $(function() {

      //Stripe.setPublishableKey('pk_live_A0ZBe4eQAenJlhbcv2wIdV8G');
      Stripe.setPublishableKey('pk_test_hagCUEZIKkraUVhbV6gnNbB4');
      
      // Get the values:

      function reportError(err) {
        console.log('err', err)
      }
        

      $("#payment-form").submit(function(event) {
        $('#submitBtn').attr('disabled', 'disabled');
        validateAndGetToken();
        return false;
      });

      function stripeResponseHandler(status, res) {
        console.log('res', res)
        console.log('status', status)
        if (res.error) {
          reportError(res.error.message);
        } else { 
          var f = $("#payment-form");
          var token = res.id;
          f.append('<input type="hidden" name="stripeToken" value="' + token + '" />');
          f.get(0).submit();
        }

      }

      function validateAndGetToken() {
        var ccNum = $('.card-number').val();
        var cvcNum = $('.card-cvc').val();
        var expMonth = $('.card-expiry-month').val();
        var expYear = $('.card-expiry-year').val();
        var error = false;
        if (!Stripe.card.validateCardNumber(ccNum)) {
            error = true;
            reportError('The credit card number appears to be invalid.');
        }
          
        if (!Stripe.card.validateCVC(cvcNum)) {
            error = true;
            reportError('The CVC number appears to be invalid.');
        }
          
        if (!Stripe.card.validateExpiry(expMonth, expYear)) {
            error = true;
            reportError('The expiration date appears to be invalid.');
        }

        if (!error) {
          Stripe.card.createToken({
              number: ccNum,
              cvc: cvcNum,
              exp_month: expMonth,
              exp_year: expYear
          }, stripeResponseHandler);
      }
      }



    });
})(jQuery);
