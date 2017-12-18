;(function ($){
    // $(function() {

    // Input Formatting
    var expInput = new Cleave('#expInput', {
      date: true,
      datePattern: ['m', 'y']
    });

    var ccInput = new Cleave('#ccInput', {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        // update UI ...
      }
    });

    var donationAmount = 500; // starts at $5, like the list.
    var manualDonation = false;

      // Set Donation Values
      $('#select-value').change(function() {
        var str = "";

        $("#select-value option:selected").each(function () {
          str += $(this).text();

          if (str !== 'Enter a value') {
            console.log('Firing', str)
            str = parseFloat(str.substr(1)) * 100;
            donationAmount = str;
            $('.donate__button--submit').text('Donate $' + (str / 100).toFixed(2));
          }

          if (str == 'Enter a value') {
            manualDonation = true;
            $('.donate__button--submit').text('Donate $0.00');
            $('.select-style').css('display', 'none');
            $('.donate__input').css('display', 'inline-block');
            $('.donate__underline').removeClass('hide');
            $('.donate__cash').removeClass('hide');
          }
        });
        
      });

      $('.donate__input').dblclick(function() {
        $('.donate__cash').addClass('hide');
        $('.donate__input').css('display', 'none');
        $('.select-style').css('display', 'inline');
        $('.donate__underline').addClass('hide');
        console.log('double click firing');
      })

      $('.donate__input').keyup(function(e) {
        var val = parseFloat($('.donate__input').val());

        console.log('manual donation firing', val);
        donationAmount = val * 100;

        if (val >= 0) {
          $('.donate__button--submit').text('Donate $' + val.toFixed(2));
        } else {
          $('.donate__button--submit').text('Donate $0.00');
        }
      });


      $('.connect__input').focus(function() {
        $($(this).siblings('label')[0]).addClass('connect__label--focused');
      })

      //Stripe.setPublishableKey('pk_live_A0ZBe4eQAenJlhbcv2wIdV8G');
      Stripe.setPublishableKey('pk_test_hagCUEZIKkraUVhbV6gnNbB4');
      
      $('.donate__button--submit').click(function() {

        // Reset error if any
        $('#error-message').text('');

        console.log('click')
        var first_name = $('input[name=first_name]').val();
        var last_name = $('input[name=last_name]').val();
        var email = $('input[name=email]').val();
        var address = $('input[name=address]').val();
        var line_2 = $('input[name=line_2]').val();
        var city = $('input[name=city]').val();
        var state = $('input[name=state]').val();
        var country = $(".donate__country option:selected").val();
        var zip = $('input[name=zip]').val();
        var card_number = $('input[name=card_number]').val();
        var cvcNum = $('input[name=ccv]').val();
        var expiration = $('input[name=expiration]').val();

        var errorText = '';
        var expMonth = null;
        var expYear = null;
        var error = false;

        // if (expiration.indexOf('/') != -1) {
        //   expiration = expiration.split('/');
        //   expMonth = expiration[0];
        //   expYear = expiration[1];
        // } else {
        //   errorText = 'Expiration Date must have a /';
        //   $('#expirationError').text(errorText);
        //   error = true;
        //   setTimeout(function(){
        //     $('#expirationError').text('');
        //     $('.donate__processing').text('');
        //   }, 5000);
        // }

        if (first_name == '' || first_name == null) {
            error = true;
            errorText = 'First name is required';
            $('#firstNameError').text(errorText);
            setTimeout(function(){
              $('#firstNameError').text('');
              $('.donate__processing').text('');
            }, 5000);
        }

        if (last_name == '' || last_name == null) {
            error = true;
            errorText = 'Last name is required';
            $('#lastNameError').text(errorText);
            setTimeout(function(){
              $('#lastNameError').text('');
              $('.donate__processing').text('');
            }, 5000);
        }

        // if (email == '' || email == null && !validateEmail(email)) {
        if (email == '' || !validateEmail(email)) {
            error = true;
            errorText = 'Valid email address is required';
          $('#emailError').text(errorText);
          // $('#error-message').text(errorText);
          setTimeout(function(){
            $('#emailError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }

        if (address == '' || address == null) {
            error = true;
            errorText = 'Address is required';
          $('#addressError').text(errorText);
          setTimeout(function(){
            $('#addressError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }

        if (city == '' || city == null) {
            error = true;
            errorText = 'City is required';
          $('#cityError').text(errorText);
          setTimeout(function(){
            $('#cityError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }

        if (state == '' || state == null) {
            error = true;
            errorText = 'State is required';
          $('#stateError').text(errorText);
          setTimeout(function(){
            $('#stateError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }

        if (zip == '' || zip == null) {
            error = true;
            errorText = 'Zip Code is required';
          $('#zipcodeError').text(errorText);
          setTimeout(function(){
            $('#zipcodeError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }

        if (!Stripe.card.validateCardNumber(card_number)) {
            error = true;
            errorText = 'The credit card number appears to be invalid.';
          $('#creditCardError').text(errorText);
          setTimeout(function(){
            $('#creditCardError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }
          
        if (!Stripe.card.validateCVC(cvcNum)) {
            error = true;
            errorText = 'The CVV number appears to be invalid.';
          $('#cvvError').text(errorText);
          setTimeout(function(){
            $('#cvvError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }
          
        if (!Stripe.card.validateExpiry(expMonth, expYear)) {
            error = true;
            errorText = 'The expiration date appears to be invalid.';
          $('#expirationError').text(errorText);
          setTimeout(function(){
            $('#expirationError').text('');
            $('.donate__processing').text('');
          }, 5000);
        }

        // Show processing message
        if (!error) {
          $('#donation-processing').text('Processing donation');
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
                errorText += res.error.message;
                $('#error-message').val(errorText)
              } else { 
                var dataToSend = {
                  payment_info: {
                    required: {
                      stripe_key: "test",
                      amount: donationAmount,
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
                          country: country
                        },
                        email: [email]
                      }
                    }
                  }
                }
                console.log('data', dataToSend)
                $.ajax({
                  url: 'https://api.publicntp.org/v1/payment/request',
                  method: 'POST',
                  headers: { "Content-Type": "application/json" },
                  data: JSON.stringify(dataToSend),
                  success: function(response) {
                    console.log('response', response);

                    if (response.status === 'succeeded') {
                      swal(
                        'Donation Sent',
                        'Thank you for your $' + donationAmount / 100 + ' donation!',
                        'success'
                      ).then(function() {
                        clearErrors();
                        console.log('Clearing credit card and payment details from forms.');
                        console.log('Country', country);
                      })
                    }

                    if (response.status === 'error') {
                      swal(
                        'Oops...',
                        response.message,
                        'error'
                      )
                      $('#donation-processing').text('');
                    }
                  },
                  error: function(err) {
                    console.log('err', err);
                    swal(
                      'Oops...',
                      'Something went wrong!',
                      'error'
                    )
                  }
                })

                //window.location.href = "/thank-you.html";
              }
          })
        } else {
          console.log('errorText', errorText)
        }
      })
    // });

    $.getJSON("documents/countries.json", function(data) {
      // var items = [];
      $.each(data, function(key, val) {
        $(".donate__country").append("<option value='" + val.Code + "'>" + val.Name + "</option>");
        // console.log(val);
      })
    })

  function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  }

  function clearErrors() {
    $('input[name=first_name]').val('');
    $('input[name=last_name]').val('');
    $('input[name=email]').val('');
    $('input[name=address]').val('');
    $('input[name=line_2]').val('');
    $('input[name=city]').val('');
    $('input[name=state]').val('');
    $('input[name=zip]').val('');
    $('input[name=card_number]').val('');
    $('input[name=ccv]').val('');
    $('input[name=expiration]').val('');

    $('#firstNameError').text('');
    $('#lastNameError').text('');
    $('#emailError').text('');
    $('#addressError').text('');
    $('#cityError').text('');
    $('#stateError').text('');
    $('#zipcodeError').text('');
    $('#cvvError').text('');
    $('#donation-processing').text('');
    $('.donate__input').val('');
  }

})(jQuery);