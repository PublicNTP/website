;(function ($){
    $(function() {

      $('.connect__input').focus(function() {
        $($(this).siblings('label')[0]).addClass('connect__label--focused');
      })

      //Stripe.setPublishableKey('pk_live_A0ZBe4eQAenJlhbcv2wIdV8G');
      Stripe.setPublishableKey('pk_test_hagCUEZIKkraUVhbV6gnNbB4');
      

      $('.connect__submit').click(function() {
        console.log('click')
        var first_name = $('input[name=first_name]').val();
        var last_name = $('input[name=last_name]').val();
        var email = $('input[name=email]').val();
        var address = $('input[name=address]').val();
        var line_2 = $('input[name=line_2]').val();
        var city = $('input[name=city]').val();
        var state = $('input[name=state]').val();
        var zip = $('input[name=zip]').val();
        var card_number = $('input[name=card_number]').val();
        var cvcNum = $('input[name=ccv]').val();
        var expiration = $('input[name=expiration]').val();


        var errorText = '';
        var expMonth = null;
        var expYear = null;
        var error = false;

        if (expiration.indexOf('/') != -1) {
          expiration = expiration.split('/');
          expMonth = expiration[0];
          expYear = expiration[1];
        } else {
          errorText = '<li>Expiration Date must have a /</li>';
          error = true;
        }

        if (first_name == '' || first_name == null) {
            error = true;
            errorText += '<li>First name is required</li>';
        }

        if (last_name == '' || last_name == null) {
            error = true;
            errorText += '<li>Last name is required</li>';
        }

        if (email == '' || email == null) {
            error = true;
            errorText += '<li>Email is required</li>';
        }

        if (address == '' || address == null) {
            error = true;
            errorText += '<li>Address is required</li>';
        }

        if (city == '' || city == null) {
            error = true;
            errorText += '<li>City is required</li>';
        }

        if (state == '' || state == null) {
            error = true;
            errorText += '<li>State is required</li>';
        }

        if (zip == '' || zip == null) {
            error = true;
            errorText += '<li>Zip Code is required</li>';
        }


        if (!Stripe.card.validateCardNumber(card_number)) {
            error = true;
            errorText += '<li>The credit card number appears to be invalid.</li>';
        }
          
        if (!Stripe.card.validateCVC(cvcNum)) {
            error = true;
            errorText += '<li>The CVC number appears to be invalid.</li>';
        }
          
        if (!Stripe.card.validateExpiry(expMonth, expYear)) {
            error = true;
            errorText += '<li>The expiration date appears to be invalid.</li>';
        }

        if (!error) {
          Stripe.card.createToken({
              number: card_number,
              cvc: cvcNum,
              exp_month: expMonth,
              exp_year: expYear
          }, function(status, res) {
              console.log('res', res)
              console.log('status', status)
              if (res.error) {
                errorText += '<li>' + res.error.message + '</li>';
              } else { 
                var dataToSend = {
                  payment_info: {
                    required: {
                      amount: 5,
                      currency: "usd",
                      source: res.id,
                      description: "Test Donation"
                    },
                    optional: {
                      donor_info: {
                        donor_name: {
                          last: last_name,
                          first: first_name
                        },
                        address: {
                          street_lines: [
                            address,
                            line_2
                          ],
                          city: city,
                          state_province_region: state,
                          country: "US"
                        },
                        email: [email]
                      }
                    }
                  }
                }
                console.log('data', dataToSend)
                $.ajax({
                  url: 'https://egms0piyzc.execute-api.us-east-1.amazonaws.com/dev/v1/payment/request/',
                  method: 'POST',
                  "Content-Type": "application/json",
                  data: dataToSend,
                  success: function(response) {
                    console.log('response', responese)
                  },
                  error: function(err) {
                    console.log('err', err)
                  }

                })

                //window.location.href = "/thank-you.html";
              }
          });
        } else {
          console.log('errorText', errorText)
        }
      })



    });
})(jQuery);
