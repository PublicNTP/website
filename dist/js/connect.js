!function(c){c(function(){function n(c){return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(c)}c(".connect__input").focus(function(){c(c(this).siblings("label")[0]).addClass("connect__label--focused")}),c("#connect-submit").click(function(){var e=c("#connect-email").val();""!==e&&n(e)?(c("#connect-form").submit(),c(".connect__success").text("Thanks for subscribing!"),c(".connect__success").removeClass("hide"),c("#connect-name").val(""),c("#connect-email").val("")):(c(".connect__success").text("Please enter a valid email address!"),c(".connect__success").removeClass("hide"))})})}(jQuery);