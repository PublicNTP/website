;(function ($){
    // $(function() {

    // Country Code Setter
    var country;
    $.ajax({
      dataType: "jsonp",
      url: 'https://freegeoip.net/json',
      success: function(data) {
        country = data.country_code;
        console.log('Country Code:', country);
        setTimeout(function() {
          document.querySelector('.donate__country option[value="' + country + '"]').selected = true;
        }, 1000);
      },
      error: function(data) {
        console.log('Not able to get country data');
      }
    })

    // Blur Error
    var errorText = '';

    $('input[name=first_name]').blur(function() {
      var first_name = $('input[name=first_name]').val();
      $(this).next().removeClass('red');

      if (first_name == '' || first_name == null) {
        errorText = 'First name is required';
        $(this).next().addClass('red')
        $('#firstNameError').text(errorText);
        setTimeout(function () {
          $('#firstNameError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=last_name]').blur(function () {
      var last_name = $('input[name=last_name]').val();
      $(this).next().removeClass('red');

      if (last_name === '' || last_name == null) {
        errorText = 'Last name is required';
        $(this).next().addClass('red')
        $('#lastNameError').text(errorText);
        return setTimeout(function () {
          $('#lastNameError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=email]').blur(function () {
      var email = $('input[name=email]').val();
      $(this).next().removeClass('red');

      if (email == '' || !validateEmail(email)) {
        errorText = 'Valid email address is required';
        $(this).next().addClass('red')
        $('#emailError').text(errorText);
        return setTimeout(function () {
          $('#emailError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=address]').blur(function () {
      var address = $('input[name=address]').val();
      $(this).next().removeClass('red');

      if (address == '' || address == null) {
        errorText = 'Address is required';
        $(this).next().addClass('red')
        $('#addressError').text(errorText);
        return setTimeout(function () {
          $('#addressError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=city]').blur(function () {
      var city = $('input[name=city]').val();
      $(this).next().removeClass('red');

      if (city == '' || city == null) {
        errorText = 'City is required';
        $(this).next().addClass('red')
        $('#cityError').text(errorText);
        return setTimeout(function () {
          $('#cityError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=state]').blur(function () {
      var state = $('input[name=state]').val();
      $(this).next().removeClass('red');

      if (state == '' || state == null) {
        errorText = 'State / Province / Region is required';
        $(this).next().addClass('red')
        $('#stateError').text(errorText);
        return setTimeout(function () {
          $('#stateError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=zip]').blur(function () {
      var zip = $('input[name=zip]').val();
      $(this).next().removeClass('red');

      if (zip == '' || zip == null) {
        errorText = 'ZIP / Postal Code is required';
        $(this).next().addClass('red')
        $('#zipcodeError').text(errorText);
        return setTimeout(function () {
          $('#zipcodeError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=card_number]').blur(function () {
      var card_number = $('input[name=card_number]').val();
      $(this).next().removeClass('red');

      if (card_number == '' || card_number == null) {
        errorText = 'Card Number is required';
        $(this).next().addClass('red')
        $('#creditCardError').text(errorText);
        return setTimeout(function () {
          $('#creditCardError').text('');
          errorText = '';
        }, 5000);
      }
    })

    $('input[name=ccv]').blur(function () {
      var cvcNum = $('input[name=ccv]').val();
      $(this).next().removeClass('red');

      if (cvcNum == '' || cvcNum == null) {
        errorText = 'CVV is required';
        $(this).next().addClass('red')
        $('#cvvError').text(errorText);
        return setTimeout(function () {
          $('#cvvError').text('');
          errorText = '';
        }, 5000);
      }
    })

    function expCheck(expiration) {
      var d = new Date();
      var currentYear = d.getFullYear();
      var currentMonth = d.getMonth() + 1;
      // get parts of the expiration date
      var parts = expiration.split('/');
      var year = parseInt(parts[1], 10) + 2000;
      var month = parseInt(parts[0], 10);
      // compare the dates
      if (year < currentYear || (year == currentYear && month < currentMonth)) {
        errorText += "The expiry date has passed.\n";
        return true;
      }
    }

    $('input[name=expiration]').blur(function () {
      var expiration = $('input[name=expiration]').val();
      $(this).next().removeClass('red');

      if (expiration == '' || expiration == null || expCheck(expiration)) {
        errorText = 'Valid Expiration required';
        $(this).next().addClass('red');
        $('#expirationError').text(errorText);
        return setTimeout(function () {
          $('#expirationError').text('');
          errorText = '';
        }, 5000);
      }
    })

    // Input Formatting
    var donateInput = new Cleave('#donateInput', {
      numeral: true,
      prefix: '$'
    })

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
            $('.donate__input').val('');
            $('.donate__button--submit').text('Donate $0.00');
            $('.select-style').css('display', 'none');
            $('.donate__input').css('display', 'inline-block');
            $('.donate__underline').removeClass('hide');
            $('.donate__cash').removeClass('hide');
          }
        });
      });

      $('.donate__input').dblclick(function() {
        $('.donate__button--submit').text('Donate $0.00');
        $('.donate__cash').addClass('hide');
        $('.donate__input').css('display', 'none');
        $('.select-style').css('display', 'inline');
        $('.donate__underline').addClass('hide');
        console.log('double click firing');
      })

      $('.donate__input').keyup(function(e) {
        var donation = $('.donate__input').val().replace(/\$|,/g, "");
        var val = parseFloat(donation);
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

      // Fancy Stripe Credit Card Magic //
      // Create a Stripe client
      var stripe = Stripe('pk_test_hagCUEZIKkraUVhbV6gnNbB4');

      // Create an instance of Elements
      var elements = stripe.elements();

      // Custom styling can be passed to options when creating an Element.
      // (Note that this demo uses a wider set of styles than the guide below.)
      var style = {
        base: {
          // color: '#32325d',
          lineHeight: '18px',
          fontFamily: '"Roboto", sans-serif',
          fontWeight: '500',
          // fontSmoothing: 'antialiased',
          fontSize: '14px',
          '::placeholder': {
            color: '#9b9b9b'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      };

      // Create an instance of the card Element
      var card = elements.create('card', {
        style: style
      });

      // Add an instance of the card Element into the `card-element` <div>
      card.mount('#card-element');

      // Handle real-time validation errors from the card Element.
      card.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      //Stripe.setPublishableKey('pk_live_A0ZBe4eQAenJlhbcv2wIdV8G');
      // Stripe.setPublishableKey('pk_test_hagCUEZIKkraUVhbV6gnNbB4');
      
      $('.donate__button--submit').click(function() {

        // Reset error if any
        $('#error-message').text('');

        var first_name = $('input[name=first_name]').val();
        var last_name = $('input[name=last_name]').val();
        var email = $('input[name=email]').val();
        var address = $('input[name=address]').val();
        var line_2 = $('input[name=line_2]').val();
        var city = $('input[name=city]').val();
        var state = $('input[name=state]').val();
        var country = $(".donate__country option:selected").val();
        var zip = $('input[name=zip]').val();


        var errorText = '';
        var expMonth = null;
        var expYear = null;
        var error = false;

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

        if (!error) {
          $('#donation-processing').text('Processing donation');

          var data = {
            name: first_name + ' ' + last_name,
            address_line1: address,
            address_line2: line_2,
            address_city: city,
            address_zip: zip,
            address_state: state,
            address_country: country
          };

          stripe.createToken(card, data).then(function(result) {
            if (result.error) {
              // Inform the user if there was an error
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;
            } else {
              // Send the token to your server
              var dataToSend = {
                payment_info: {
                  stripe_key: "test",
                  amount: donationAmount,
                  currency: "usd",
                  source: result.token.id,
                  description: "Test Donation",
                  receipt_email: email,
                }
              };
              stripeTokenHandler(result.token, dataToSend);
              console.log('results bbz:', result);
            }
          });

          function stripeTokenHandler(token, dataToSend) {
            $.ajax({
              url: 'https://api.publicntp.org/v1/payment/request',
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              data: JSON.stringify(dataToSend),
              success: function (response) {
                console.log('response', response);
                if (response.status === 'succeeded') {
                  swal(
                    'Donation Sent',
                    'Thank you for your $' + (donationAmount / 100).toFixed(2) + ' donation!',
                    'success'
                  ).then(function () {
                    clearErrors();
                    card.clear();
                    console.log('Clearing credit card and payment details from forms.');
                  })
                }
                if (response.status !== 'succeeded') {
                  swal(
                    'Oops...',
                    response.message,
                    'error'
                  )
                  $('#donation-processing').text('');
                }
              },
              error: function (err) {
                console.log('err', err);
                swal(
                  'Oops...',
                  'Something went wrong!',
                  'error'
                )

                $('#donation-processing').text('Error occured: ' + error);
                setTimeout(function () {
                  $('#donation-processing').text('');
                }, 3000);
              }
            })
          }
        }

        // if (!Stripe.card.validateCardNumber(card_number)) {
        //     error = true;
        //     errorText = 'The credit card number appears to be invalid.';
        //   $('#creditCardError').text(errorText);
        //   setTimeout(function(){
        //     $('#creditCardError').text('');
        //     $('.donate__processing').text('');
        //   }, 5000);
        // }
          
        // if (!Stripe.card.validateCVC(cvcNum)) {
        //     error = true;
        //     errorText = 'The CVV number appears to be invalid.';
        //   $('#cvvError').text(errorText);
        //   setTimeout(function(){
        //     $('#cvvError').text('');
        //     $('.donate__processing').text('');
        //   }, 5000);
        // }
          
        // if (!Stripe.card.validateExpiry(expMonth, expYear)) {
        //     error = true;
        //     errorText = 'The expiration date appears to be invalid.';
        //   $('#expirationError').text(errorText);
        //   setTimeout(function(){
        //     $('#expirationError').text('');
        //     $('.donate__processing').text('');
        //   }, 5000);
        // }

        // Show processing message
        // if (!error) {
        //   $('#donation-processing').text('Processing donation');
        // }

        // if (!error) {
        //   Stripe.card.createToken({
        //       number: card_number,
        //       cvc: cvcNum,
        //       exp_month: expMonth,
        //       exp_year: expYear,
        //       name: first_name + ' ' + last_name,
        //       address_line1: address,
        //       address_line2: line_2,
        //       address_city: city,
        //       address_zip: zip,
        //       address_state: state,
        //       address_country: country
        //   }, function(status, res) {
        //       console.log('res', res)
        //       console.log('status', status)
        //       if (res.error) {
        //         errorText += res.error.message;
        //         $('#error-message').val(errorText)
        //       } else { 
        //         var dataToSend = {
        //           payment_info: {
        //             stripe_key: "test",
        //             amount: donationAmount,
        //             currency: "usd",
        //             source: res.id,
        //             description: "Test Donation",
        //             receipt_email: email
        //           }
        //         }
        //         console.log('data', dataToSend)
                // $.ajax({
                //   url: 'https://api.publicntp.org/v1/payment/request',
                //   method: 'POST',
                //   headers: { "Content-Type": "application/json" },
                //   data: JSON.stringify(dataToSend),
                //   success: function(response) {
                //     console.log('response', response);

                //     if (response.status === 'succeeded') {
                //       swal(
                //         'Donation Sent',
                //         'Thank you for your $' + (donationAmount / 100).toFixed(2) + ' donation!',
                //         'success'
                //       ).then(function() {
                //         // clearErrors();
                //         console.log('Clearing credit card and payment details from forms.');
                //       })
                //     }

                //     if (response.status !== 'succeeded') {
                //       swal(
                //         'Oops...',
                //         response.message,
                //         'error'
                //       )
                //       $('#donation-processing').text('');
                //     }
                //   },
                //   error: function(err) {
                //     console.log('err', err);

                //     swal(
                //       'Oops...',
                //       'Something went wrong!',
                //       'error'
                //     )

                //     $('#donation-processing').text('Error occured: ' + error);
                //     setTimeout(function () {
                //       $('#donation-processing').text('');
                //     }, 3000);
                //   }
                // })

                //window.location.href = "/thank-you.html";
        //       }
        //   })
        // } else {
        //   console.log('errorText', errorText)
        // }
      })
    // });

    $.getJSON("https://raw.githubusercontent.com/umpirsky/country-list/master/data/en_US/country.json", function (data) {

      $.each(data, function(key, val) {
        $(".donate__country").append("<option value='" + key + "'>" + val + "</option>");
        // $(".donate__country").append("<option value='" + val.Code + "'>" + val.Name + "</option>");
      })
    })

  function validateEmail(email) {
    // Old regex
    // var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    // return emailReg.test(email);
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email.toLowerCase());
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