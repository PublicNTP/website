var spinner='   <div class="logo-infinite-container logo-infinite__opened">           <div class="logo-infinite">             <div class="logo-infinite__inner">               <div class="logo-infinite__center">                 <div class="logo-infinite__minute logo-infinite__rotate logo-infinite__minute-move">                   <div class="logo-infinite__minute-ball"></div>                 </div>                 <div class="logo-infinite__hour logo-infinite__rotate logo-infinite__hour-move">                   <div class="logo-infinite__hour-orb">                     <div class="logo-infinite__hour-ball"></div>                   </div>                 </div>               </div>             </div>           </div>        </div>  ';!function(m){var t;m.ajax({dataType:"jsonp",url:"https://freegeoip.net/json",success:function(e){t=e.country_code,setTimeout(function(){document.querySelector('.donate__country option[value="'+t+'"]').selected=!0},1e3)},error:function(e){}});var s="";m("input[name=first_name]").blur(function(){var e=m("input[name=first_name]").val();m(this).next().removeClass("red"),""!=e&&null!=e||(s="First name is required",m(this).next().addClass("red"),m("#firstNameError").text(s),setTimeout(function(){m("#firstNameError").text(""),s=""},5e3))}),m("input[name=last_name]").blur(function(){var e=m("input[name=last_name]").val();if(m(this).next().removeClass("red"),""===e||null==e)return s="Last name is required",m(this).next().addClass("red"),m("#lastNameError").text(s),setTimeout(function(){m("#lastNameError").text(""),s=""},5e3)}),m("input[name=email]").blur(function(){var e=m("input[name=email]").val();if(m(this).next().removeClass("red"),""==e||!f(e))return s="Valid email address is required",m(this).next().addClass("red"),m("#emailError").text(s),setTimeout(function(){m("#emailError").text(""),s=""},5e3)}),m("input[name=address]").blur(function(){var e=m("input[name=address]").val();if(m(this).next().removeClass("red"),""==e||null==e)return s="Address is required",m(this).next().addClass("red"),m("#addressError").text(s),setTimeout(function(){m("#addressError").text(""),s=""},5e3)}),m("input[name=city]").blur(function(){var e=m("input[name=city]").val();if(m(this).next().removeClass("red"),""==e||null==e)return s="City is required",m(this).next().addClass("red"),m("#cityError").text(s),setTimeout(function(){m("#cityError").text(""),s=""},5e3)}),m("input[name=state]").blur(function(){var e=m("input[name=state]").val();if(m(this).next().removeClass("red"),""==e||null==e)return s="State / Province / Region is required",m(this).next().addClass("red"),m("#stateError").text(s),setTimeout(function(){m("#stateError").text(""),s=""},5e3)}),m("input[name=zip]").blur(function(){var e=m("input[name=zip]").val();if(m(this).next().removeClass("red"),""==e||null==e)return s="ZIP / Postal Code is required",m(this).next().addClass("red"),m("#zipcodeError").text(s),setTimeout(function(){m("#zipcodeError").text(""),s=""},5e3)}),m("input[name=card_number]").blur(function(){var e=m("input[name=card_number]").val();if(m(this).next().removeClass("red"),""==e||null==e)return s="Card Number is required",m(this).next().addClass("red"),m("#creditCardError").text(s),setTimeout(function(){m("#creditCardError").text(""),s=""},5e3)}),m("input[name=ccv]").blur(function(){var e=m("input[name=ccv]").val();if(m(this).next().removeClass("red"),""==e||null==e)return s="CVV is required",m(this).next().addClass("red"),m("#cvvError").text(s),setTimeout(function(){m("#cvvError").text(""),s=""},5e3)}),m("input[name=expiration]").blur(function(){var e=m("input[name=expiration]").val();if(m(this).next().removeClass("red"),""==e||null==e||function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=e.split("/"),a=parseInt(i[1],10)+2e3,o=parseInt(i[0],10);if(a<n||a==n&&o<r)return s+="The expiry date has passed.\n",!0}(e))return s="Valid Expiration required",m(this).next().addClass("red"),m("#expirationError").text(s),setTimeout(function(){m("#expirationError").text(""),s=""},5e3)});new Cleave("#donateInput",{numeral:!0,prefix:"$"});var p,v,_=500;m("#select-value").change(function(){var e="";m("#select-value option:selected").each(function(){"Enter a value"!==(e+=m(this).text())&&(e=100*parseFloat(e.substr(1)),_=e,m(".donate__button--submit").text("Donate $"+(e/100).toFixed(2))),"Enter a value"==e&&(!0,m(".donate__input").val(""),m(".donate__button--submit").text("Donate $0.00"),m(".select-style").css("display","none"),m(".donate__input").css("display","inline-block"),m(".donate__underline").removeClass("hide"),m(".donate__cash").removeClass("hide"))})}),m(".donate__input").dblclick(function(){m(".donate__button--submit").text("Donate $0.00"),m(".donate__cash").addClass("hide"),m(".donate__input").css("display","none"),m(".select-style").css("display","inline"),m(".donate__underline").addClass("hide")}),m(".donate__input").keyup(function(e){var t=m(".donate__input").val().replace(/\$|,/g,""),n=parseFloat(t);_=100*n,0<=n?m(".donate__button--submit").text("Donate $"+n.toFixed(2)):m(".donate__button--submit").text("Donate $0.00")}),m(".connect__input").focus(function(){m(m(this).siblings("label")[0]).addClass("connect__label--focused")}),"localhost"!==window.location.hostname&&"dev.publicntp.org"!==window.location.hostname||(p=Stripe("pk_test_hagCUEZIKkraUVhbV6gnNbB4"),v="test"),"staging.publicntp.org"!==window.location.hostname&&"publicntp.org"!==window.location.hostname||(p=Stripe("pk_live_A0ZBe4eQAenJlhbcv2wIdV8G"),v="live");var x=p.elements().create("card",{style:{base:{lineHeight:"18px",fontFamily:'"Roboto", sans-serif',fontWeight:"500",fontSize:"14px","::placeholder":{color:"#9b9b9b"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}});function f(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())}x.mount("#card-element"),x.addEventListener("change",function(e){var t=document.getElementById("card-errors");e.error?t.textContent=e.error.message:t.textContent=""}),m(".donate__button--submit").click(function(){m("#error-message").text("");var e=m("input[name=first_name]").val(),t=m("input[name=last_name]").val(),r=m("input[name=email]").val(),n=m("input[name=address]").val(),i=m("input[name=line_2]").val(),a=m("input[name=city]").val(),o=m("input[name=state]").val(),s=m(".donate__country option:selected").val(),u=m("input[name=zip]").val(),l="",d=!1;if(""!=e&&null!=e||(d=!0,l="First name is required",m("#firstNameError").text(l),setTimeout(function(){m("#firstNameError").text(""),m(".donate__processing").text("")},5e3)),""!=t&&null!=t||(d=!0,l="Last name is required",m("#lastNameError").text(l),setTimeout(function(){m("#lastNameError").text(""),m(".donate__processing").text("")},5e3)),""!=r&&f(r)||(d=!0,l="Valid email address is required",m("#emailError").text(l),setTimeout(function(){m("#emailError").text(""),m(".donate__processing").text("")},5e3)),""!=n&&null!=n||(d=!0,l="Address is required",m("#addressError").text(l),setTimeout(function(){m("#addressError").text(""),m(".donate__processing").text("")},5e3)),""!=a&&null!=a||(d=!0,l="City is required",m("#cityError").text(l),setTimeout(function(){m("#cityError").text(""),m(".donate__processing").text("")},5e3)),""!=o&&null!=o||(d=!0,l="State is required",m("#stateError").text(l),setTimeout(function(){m("#stateError").text(""),m(".donate__processing").text("")},5e3)),""!=u&&null!=u||(d=!0,l="Zip Code is required",m("#zipcodeError").text(l),setTimeout(function(){m("#zipcodeError").text(""),m(".donate__processing").text("")},5e3)),!d){swal({title:"Processing Donation",html:spinner,showConfirmButton:!1}),m("#donation-processing").text("Processing donation");var c={name:e+" "+t,address_line1:n,address_line2:i,address_city:a,address_zip:u,address_state:o,address_country:s};p.createToken(x,c).then(function(e){if(e.error){document.getElementById("card-errors").textContent=e.error.message,m("#donation-processing").text(""),swal.close()}else{var t={payment_info:{stripe_key:v,amount:_,currency:"usd",source:e.token.id,description:"PublicNTP tax-deductible donation.",receipt_email:r}};e.token,n=t,m.ajax({url:"https://api.publicntp.org/v1/payment/request",method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(n),success:function(e){"succeeded"===e.status&&swal("Donation Sent","Thank you for your $"+(_/100).toFixed(2)+" donation!","success").then(function(){m("input[name=first_name]").val(""),m("input[name=last_name]").val(""),m("input[name=email]").val(""),m("input[name=address]").val(""),m("input[name=line_2]").val(""),m("input[name=city]").val(""),m("input[name=state]").val(""),m("input[name=zip]").val(""),m("input[name=card_number]").val(""),m("input[name=ccv]").val(""),m("input[name=expiration]").val(""),m("#firstNameError").text(""),m("#lastNameError").text(""),m("#emailError").text(""),m("#addressError").text(""),m("#cityError").text(""),m("#stateError").text(""),m("#zipcodeError").text(""),m("#cvvError").text(""),m("#donation-processing").text(""),m(".donate__input").val(""),x.clear()}),"succeeded"!==e.status&&(swal("Oops...",e.message,"error"),m("#donation-processing").text(""))},error:function(e){swal("Oops...","Something went wrong!","error"),m("#donation-processing").text("Error occured: "+d),setTimeout(function(){m("#donation-processing").text("")},3e3)}})}var n})}}),m.getJSON("https://raw.githubusercontent.com/umpirsky/country-list/master/data/en_US/country.json",function(e){m.each(e,function(e,t){m(".donate__country").append("<option value='"+e+"'>"+t+"</option>")})})}(jQuery);