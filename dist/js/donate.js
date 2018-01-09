!function(e){function t(e){return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)}function r(){e("input[name=first_name]").val(""),e("input[name=last_name]").val(""),e("input[name=email]").val(""),e("input[name=address]").val(""),e("input[name=line_2]").val(""),e("input[name=city]").val(""),e("input[name=state]").val(""),e("input[name=zip]").val(""),e("input[name=card_number]").val(""),e("input[name=ccv]").val(""),e("input[name=expiration]").val(""),e("#firstNameError").text(""),e("#lastNameError").text(""),e("#emailError").text(""),e("#addressError").text(""),e("#cityError").text(""),e("#stateError").text(""),e("#zipcodeError").text(""),e("#cvvError").text(""),e("#donation-processing").text(""),e(".donate__input").val("")}var n="";e("input[name=first_name]").blur(function(){var t=e("input[name=first_name]").val();e(this).next().removeClass("red"),""!=t&&null!=t||(n="First name is required",e(this).next().addClass("red"),e("#firstNameError").text(n),setTimeout(function(){e("#firstNameError").text(""),n=""},5e3))}),e("input[name=last_name]").blur(function(){var t=e("input[name=last_name]").val();if(e(this).next().removeClass("red"),""===t||null==t)return n="Last name is required",e(this).next().addClass("red"),e("#lastNameError").text(n),setTimeout(function(){e("#lastNameError").text(""),n=""},5e3)}),e("input[name=email]").blur(function(){var r=e("input[name=email]").val();if(e(this).next().removeClass("red"),""==r||!t(r))return n="Valid email address is required",e(this).next().addClass("red"),e("#emailError").text(n),setTimeout(function(){e("#emailError").text(""),n=""},5e3)}),e("input[name=address]").blur(function(){var t=e("input[name=address]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="Address is required",e(this).next().addClass("red"),e("#addressError").text(n),setTimeout(function(){e("#addressError").text(""),n=""},5e3)}),e("input[name=city]").blur(function(){var t=e("input[name=city]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="City is required",e(this).next().addClass("red"),e("#cityError").text(n),setTimeout(function(){e("#cityError").text(""),n=""},5e3)}),e("input[name=state]").blur(function(){var t=e("input[name=state]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="State is required",e(this).next().addClass("red"),e("#stateError").text(n),setTimeout(function(){e("#stateError").text(""),n=""},5e3)}),e("input[name=zip]").blur(function(){var t=e("input[name=zip]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="Zip Code is required",e(this).next().addClass("red"),e("#zipcodeError").text(n),setTimeout(function(){e("#zipcodeError").text(""),n=""},5e3)}),e("input[name=card_number]").blur(function(){var t=e("input[name=card_number]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="Card number is required",e(this).next().addClass("red"),e("#creditCardError").text(n),setTimeout(function(){e("#creditCardError").text(""),n=""},5e3)}),e("input[name=ccv]").blur(function(){var t=e("input[name=ccv]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="CVV is required",e(this).next().addClass("red"),e("#cvvError").text(n),setTimeout(function(){e("#cvvError").text(""),n=""},5e3)}),e("input[name=expiration]").blur(function(){var t=e("input[name=expiration]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="Expiration date is required",e(this).next().addClass("red"),e("#expirationError").text(n),setTimeout(function(){e("#expirationError").text(""),n=""},5e3)});var a=(new Cleave("#expInput",{date:!0,datePattern:["m","y"]}),new Cleave("#cvvInput",{numeral:!0,numeralThousandsGroupStyle:"none"}),new Cleave("#ccInput",{creditCard:!0,onCreditCardTypeChanged:function(e){}}),500),i=!1;e("#select-value").change(function(){var t="";e("#select-value option:selected").each(function(){t+=e(this).text(),"Enter a value"!==t&&(t=100*parseFloat(t.substr(1)),a=t,e(".donate__button--submit").text("Donate $"+(t/100).toFixed(2))),"Enter a value"==t&&(i=!0,e(".donate__input").val(""),e(".donate__button--submit").text("Donate $0.00"),e(".select-style").css("display","none"),e(".donate__input").css("display","inline-block"),e(".donate__underline").removeClass("hide"),e(".donate__cash").removeClass("hide"))})}),e(".donate__input").dblclick(function(){e(".donate__button--submit").text("Donate $0.00"),e(".donate__cash").addClass("hide"),e(".donate__input").css("display","none"),e(".select-style").css("display","inline"),e(".donate__underline").addClass("hide")}),e(".donate__input").keyup(function(t){var r=parseFloat(e(".donate__input").val());a=100*r,r>=0?e(".donate__button--submit").text("Donate $"+r.toFixed(2)):e(".donate__button--submit").text("Donate $0.00")}),e(".connect__input").focus(function(){e(e(this).siblings("label")[0]).addClass("connect__label--focused")}),Stripe.setPublishableKey("pk_test_hagCUEZIKkraUVhbV6gnNbB4"),e(".donate__button--submit").click(function(){e("#error-message").text("");var n=e("input[name=first_name]").val(),i=e("input[name=last_name]").val(),s=e("input[name=email]").val(),o=e("input[name=address]").val(),u=e("input[name=line_2]").val(),d=e("input[name=city]").val(),l=e("input[name=state]").val(),c=e(".donate__country option:selected").val(),m=e("input[name=zip]").val(),p=e("input[name=card_number]").val(),x=e("input[name=ccv]").val(),v=e("input[name=expiration]").val(),_="",f=null,E=null,C=!1;-1!=v.indexOf("/")&&(v=v.split("/"),f=v[0],E=v[1]),""!=n&&null!=n||(C=!0,_="First name is required",e("#firstNameError").text(_),setTimeout(function(){e("#firstNameError").text(""),e(".donate__processing").text("")},5e3)),""!=i&&null!=i||(C=!0,_="Last name is required",e("#lastNameError").text(_),setTimeout(function(){e("#lastNameError").text(""),e(".donate__processing").text("")},5e3)),""!=s&&t(s)||(C=!0,_="Valid email address is required",e("#emailError").text(_),setTimeout(function(){e("#emailError").text(""),e(".donate__processing").text("")},5e3)),""!=o&&null!=o||(C=!0,_="Address is required",e("#addressError").text(_),setTimeout(function(){e("#addressError").text(""),e(".donate__processing").text("")},5e3)),""!=d&&null!=d||(C=!0,_="City is required",e("#cityError").text(_),setTimeout(function(){e("#cityError").text(""),e(".donate__processing").text("")},5e3)),""!=l&&null!=l||(C=!0,_="State is required",e("#stateError").text(_),setTimeout(function(){e("#stateError").text(""),e(".donate__processing").text("")},5e3)),""!=m&&null!=m||(C=!0,_="Zip Code is required",e("#zipcodeError").text(_),setTimeout(function(){e("#zipcodeError").text(""),e(".donate__processing").text("")},5e3)),Stripe.card.validateCardNumber(p)||(C=!0,_="The credit card number appears to be invalid.",e("#creditCardError").text(_),setTimeout(function(){e("#creditCardError").text(""),e(".donate__processing").text("")},5e3)),Stripe.card.validateCVC(x)||(C=!0,_="The CVV number appears to be invalid.",e("#cvvError").text(_),setTimeout(function(){e("#cvvError").text(""),e(".donate__processing").text("")},5e3)),Stripe.card.validateExpiry(f,E)||(C=!0,_="The expiration date appears to be invalid.",e("#expirationError").text(_),setTimeout(function(){e("#expirationError").text(""),e(".donate__processing").text("")},5e3)),C||e("#donation-processing").text("Processing donation"),C||Stripe.card.createToken({number:p,cvc:x,exp_month:f,exp_year:E},function(t,m){if(m.error)_+=m.error.message,e("#error-message").val(_);else{var p={payment_info:{required:{stripe_key:"test",amount:a,currency:"usd",source:m.id,description:"Test Donation"},optional:{donor_info:{donor_name:{last:i,first:n},address:{street_lines:[o,u],city:d,state_province_region:l,country:c},email:[s]}}}};e.ajax({url:"https://api.publicntp.org/v1/payment/request",method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(p),success:function(t){"succeeded"===t.status&&swal("Donation Sent","Thank you for your $"+a/100+" donation!","success").then(function(){r()}),"error"===t.status&&(swal("Oops...",t.message,"error"),e("#donation-processing").text(""))},error:function(e){swal("Oops...","Something went wrong!","error")}})}})}),e.getJSON("documents/countries.json",function(t){e.each(t,function(t,r){e(".donate__country").append("<option value='"+r.Code+"'>"+r.Name+"</option>")})})}(jQuery);