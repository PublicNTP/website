var spinner='   <div class="logo-infinite-container logo-infinite__opened">           <div class="logo-infinite">             <div class="logo-infinite__inner">               <div class="logo-infinite__center">                 <div class="logo-infinite__minute logo-infinite__rotate logo-infinite__minute-move">                   <div class="logo-infinite__minute-ball"></div>                 </div>                 <div class="logo-infinite__hour logo-infinite__rotate logo-infinite__hour-move">                   <div class="logo-infinite__hour-orb">                     <div class="logo-infinite__hour-ball"></div>                   </div>                 </div>               </div>             </div>           </div>        </div>  ';!function(e){var t;e.ajax({dataType:"jsonp",url:"https://freegeoip.net/json",success:function(e){t=e.country_code,setTimeout(function(){document.querySelector('.donate__country option[value="'+t+'"]').selected=!0},1e3)},error:function(e){}});var n="";e("input[name=first_name]").blur(function(){var t=e("input[name=first_name]").val();e(this).next().removeClass("red"),""!=t&&null!=t||(n="First name is required",e(this).next().addClass("red"),e("#firstNameError").text(n),setTimeout(function(){e("#firstNameError").text(""),n=""},5e3))}),e("input[name=last_name]").blur(function(){var t=e("input[name=last_name]").val();if(e(this).next().removeClass("red"),""===t||null==t)return n="Last name is required",e(this).next().addClass("red"),e("#lastNameError").text(n),setTimeout(function(){e("#lastNameError").text(""),n=""},5e3)}),e("input[name=email]").blur(function(){var t=e("input[name=email]").val();if(e(this).next().removeClass("red"),""==t||!s(t))return n="Valid email address is required",e(this).next().addClass("red"),e("#emailError").text(n),setTimeout(function(){e("#emailError").text(""),n=""},5e3)}),e("input[name=address]").blur(function(){var t=e("input[name=address]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="Address is required",e(this).next().addClass("red"),e("#addressError").text(n),setTimeout(function(){e("#addressError").text(""),n=""},5e3)}),e("input[name=city]").blur(function(){var t=e("input[name=city]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="City is required",e(this).next().addClass("red"),e("#cityError").text(n),setTimeout(function(){e("#cityError").text(""),n=""},5e3)}),e("input[name=state]").blur(function(){var t=e("input[name=state]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="State / Province / Region is required",e(this).next().addClass("red"),e("#stateError").text(n),setTimeout(function(){e("#stateError").text(""),n=""},5e3)}),e("input[name=zip]").blur(function(){var t=e("input[name=zip]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="ZIP / Postal Code is required",e(this).next().addClass("red"),e("#zipcodeError").text(n),setTimeout(function(){e("#zipcodeError").text(""),n=""},5e3)}),e("input[name=card_number]").blur(function(){var t=e("input[name=card_number]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="Card Number is required",e(this).next().addClass("red"),e("#creditCardError").text(n),setTimeout(function(){e("#creditCardError").text(""),n=""},5e3)}),e("input[name=ccv]").blur(function(){var t=e("input[name=ccv]").val();if(e(this).next().removeClass("red"),""==t||null==t)return n="CVV is required",e(this).next().addClass("red"),e("#cvvError").text(n),setTimeout(function(){e("#cvvError").text(""),n=""},5e3)}),e("input[name=expiration]").blur(function(){var t=e("input[name=expiration]").val();if(e(this).next().removeClass("red"),""==t||null==t||function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,a=e.split("/"),o=parseInt(a[1],10)+2e3,s=parseInt(a[0],10);if(o<r||o==r&&s<i)return n+="The expiry date has passed.\n",!0}(t))return n="Valid Expiration required",e(this).next().addClass("red"),e("#expirationError").text(n),setTimeout(function(){e("#expirationError").text(""),n=""},5e3)});new Cleave("#donateInput",{numeral:!0,prefix:"$"});var r,i,a=500;e("#select-value").change(function(){var t="";e("#select-value option:selected").each(function(){"Enter a value"!==(t+=e(this).text())&&(t=100*parseFloat(t.substr(1)),a=t,e(".donate__button--submit").text("Donate $"+(t/100).toFixed(2))),"Enter a value"==t&&(!0,e(".donate__input").val(""),e(".donate__button--submit").text("Donate $0.00"),e(".select-style").css("display","none"),e(".donate__input").css("display","inline-block"),e(".donate__underline").removeClass("hide"),e(".donate__cash").removeClass("hide"))})}),e(".donate__input").dblclick(function(){e(".donate__button--submit").text("Donate $0.00"),e(".donate__cash").addClass("hide"),e(".donate__input").css("display","none"),e(".select-style").css("display","inline"),e(".donate__underline").addClass("hide")}),e(".donate__input").keyup(function(t){var n=e(".donate__input").val().replace(/\$|,/g,""),r=parseFloat(n);a=100*r,r>=0?e(".donate__button--submit").text("Donate $"+r.toFixed(2)):e(".donate__button--submit").text("Donate $0.00")}),e(".connect__input").focus(function(){e(e(this).siblings("label")[0]).addClass("connect__label--focused")}),"localhost"!==window.location.hostname&&"dev.publicntp.org"!==window.location.hostname||(r=Stripe("pk_test_hagCUEZIKkraUVhbV6gnNbB4"),i="test"),"staging.publicntp.org"!==window.location.hostname&&"publicntp.org"!==window.location.hostname||(r=Stripe("pk_live_A0ZBe4eQAenJlhbcv2wIdV8G"),i="live");var o=r.elements().create("card",{style:{base:{lineHeight:"18px",fontFamily:'"Roboto", sans-serif',fontWeight:"500",fontSize:"14px","::placeholder":{color:"#9b9b9b"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}});function s(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())}o.mount("#card-element"),o.addEventListener("change",function(e){var t=document.getElementById("card-errors");e.error?t.textContent=e.error.message:t.textContent=""}),e(".donate__button--submit").click(function(){e("#error-message").text("");var t=e("input[name=first_name]").val(),n=e("input[name=last_name]").val(),u=e("input[name=email]").val(),l=e("input[name=address]").val(),d=e("input[name=line_2]").val(),c=e("input[name=city]").val(),m=e("input[name=state]").val(),p=e(".donate__country option:selected").val(),v=e("input[name=zip]").val(),_="",x=!1;if(""!=t&&null!=t||(x=!0,_="First name is required",e("#firstNameError").text(_),setTimeout(function(){e("#firstNameError").text(""),e(".donate__processing").text("")},5e3)),""!=n&&null!=n||(x=!0,_="Last name is required",e("#lastNameError").text(_),setTimeout(function(){e("#lastNameError").text(""),e(".donate__processing").text("")},5e3)),""!=u&&s(u)||(x=!0,_="Valid email address is required",e("#emailError").text(_),setTimeout(function(){e("#emailError").text(""),e(".donate__processing").text("")},5e3)),""!=l&&null!=l||(x=!0,_="Address is required",e("#addressError").text(_),setTimeout(function(){e("#addressError").text(""),e(".donate__processing").text("")},5e3)),""!=c&&null!=c||(x=!0,_="City is required",e("#cityError").text(_),setTimeout(function(){e("#cityError").text(""),e(".donate__processing").text("")},5e3)),""!=m&&null!=m||(x=!0,_="State is required",e("#stateError").text(_),setTimeout(function(){e("#stateError").text(""),e(".donate__processing").text("")},5e3)),""!=v&&null!=v||(x=!0,_="Zip Code is required",e("#zipcodeError").text(_),setTimeout(function(){e("#zipcodeError").text(""),e(".donate__processing").text("")},5e3)),!x){swal({title:"Processing Donation",html:spinner,showConfirmButton:!1}),e("#donation-processing").text("Processing donation");var f={name:t+" "+n,address_line1:l,address_line2:d,address_city:c,address_zip:v,address_state:m,address_country:p};r.createToken(o,f).then(function(t){if(t.error){document.getElementById("card-errors").textContent=t.error.message,e("#donation-processing").text(""),swal.close()}else{var n={payment_info:{stripe_key:i,amount:a,currency:"usd",source:t.token.id,description:"Test Donation",receipt_email:u}};t.token,r=n,e.ajax({url:"https://api.publicntp.org/v1/payment/request",method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(r),success:function(t){"succeeded"===t.status&&swal("Donation Sent","Thank you for your $"+(a/100).toFixed(2)+" donation!","success").then(function(){e("input[name=first_name]").val(""),e("input[name=last_name]").val(""),e("input[name=email]").val(""),e("input[name=address]").val(""),e("input[name=line_2]").val(""),e("input[name=city]").val(""),e("input[name=state]").val(""),e("input[name=zip]").val(""),e("input[name=card_number]").val(""),e("input[name=ccv]").val(""),e("input[name=expiration]").val(""),e("#firstNameError").text(""),e("#lastNameError").text(""),e("#emailError").text(""),e("#addressError").text(""),e("#cityError").text(""),e("#stateError").text(""),e("#zipcodeError").text(""),e("#cvvError").text(""),e("#donation-processing").text(""),e(".donate__input").val(""),o.clear()}),"succeeded"!==t.status&&(swal("Oops...",t.message,"error"),e("#donation-processing").text(""))},error:function(t){swal("Oops...","Something went wrong!","error"),e("#donation-processing").text("Error occured: "+x),setTimeout(function(){e("#donation-processing").text("")},3e3)}})}var r})}}),e.getJSON("https://raw.githubusercontent.com/umpirsky/country-list/master/data/en_US/country.json",function(t){e.each(t,function(t,n){e(".donate__country").append("<option value='"+t+"'>"+n+"</option>")})})}(jQuery);