!function(n){n(function(){var d="0007d",s=".pdx01";n(".dropdown__input").blur(function(){var r=this;window.setTimeout(function(){n(n(r).siblings(".dropdown")[0]).removeClass("dropdown__show");var o=n(n(r).siblings(".dropdown__close")[0]);n(o.children()[0]).addClass("dropdown__arrow"),n(o.children()[1]).addClass("dropdown__arrow")},100)}),n(".report__image").load(function(){n(".report__curtain").removeClass("active")}),n(".dropdown__item").click(function(){var o=n(this).text(),r=n(this).attr("value");n(".report__curtain").addClass("active"),n(this).hasClass("dropdown__time")?d=r:s=r,n(n(n(this).parent()).siblings(".dropdown__input")[0]).val(o),window.setTimeout(function(){n(".report__image").attr("src","https://s3.amazonaws.com/stats.publicntp.org/png/stratum2"+s+"-"+d+"-packets.png")},300)}),n(".dropdown__input").click(function(){var o=n(n(this).siblings(".dropdown__close")[0]);n(o.children()[0]).hasClass("dropdown__arrow")?(n(o.children()[0]).removeClass("dropdown__arrow"),n(o.children()[1]).removeClass("dropdown__arrow"),n(n(this).siblings(".dropdown")[0]).addClass("dropdown__show")):(n(o.children()[0]).addClass("dropdown__arrow"),n(o.children()[1]).addClass("dropdown__arrow"),n(n(this).siblings(".dropdown")[0]).removeClass("dropdown__show"))})})}(jQuery);