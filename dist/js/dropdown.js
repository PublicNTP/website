!function(o){o(function(){var r="0007d",d=".pdx01";o(".dropdown__input").blur(function(){var r=this;window.setTimeout(function(){o(o(r).siblings(".dropdown")[0]).removeClass("dropdown__show");var d=o(o(r).siblings(".dropdown__close")[0]);o(d.children()[0]).addClass("dropdown__arrow"),o(d.children()[1]).addClass("dropdown__arrow")},100)}),o(".report__image").load(function(){o(".report__curtain").removeClass("active")}),o(".dropdown__item").click(function(){var s=o(this).text(),n=o(this).attr("value");o(".report__curtain").addClass("active"),o(this).hasClass("dropdown__time")?r=n:d=n,o(o(o(this).parent()).siblings(".dropdown__input")[0]).val(s),window.setTimeout(function(){o(".report__image").attr("src","https://s3.amazonaws.com/stats.publicntp.org/png/stratum2"+d+"-"+r+"-packets.png")},300)}),o(".dropdown__input").click(function(){var r=o(o(this).siblings(".dropdown__close")[0]);o(r.children()[0]).hasClass("dropdown__arrow")?(o(r.children()[0]).removeClass("dropdown__arrow"),o(r.children()[1]).removeClass("dropdown__arrow"),o(o(this).siblings(".dropdown")[0]).addClass("dropdown__show")):(o(r.children()[0]).addClass("dropdown__arrow"),o(r.children()[1]).addClass("dropdown__arrow"),o(o(this).siblings(".dropdown")[0]).removeClass("dropdown__show"))})})}(jQuery);