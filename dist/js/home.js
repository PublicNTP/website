!function(a){a(function(){var e=function(e){return parseInt(a(e).attr("id").split("-")[1])};a("#side-location-0").addClass("show"),a("#location-0").addClass("active"),a(a(".home__location-ball")[0]).addClass("active");var o=0;a(".home__location").hover(function(){var e=a(this).find(".home__location--outer"),o=a(this).find(".home__location-ball");0!==e.length?(a(this).addClass("slow-active"),a(e[0]).addClass("active"),a(e[0]).children(".home__location--multiple").addClass("active")):a(this).addClass("active"),a(o[0]).addClass("active")},function(){var i=a(this).find(".home__location--outer"),t=a(this).find(".home__location-ball"),l=e(this)===o;l||0!=i.length?l||(a(this).removeClass("slow-active"),a(i[0]).removeClass("active"),a(i[0]).children(".home__location--multiple").removeClass("active"),a(t[0]).removeClass("active")):(a(this).removeClass("active"),a(t[0]).removeClass("active"))}),a(".home__location").click(function(){o=e(this);var i=this;a(".home__sidebar-wrap").removeClass("show"),a(".home__location").removeClass("active"),a(".home__location-ball").removeClass("active"),a(".home__location--outer").removeClass("active"),a(".home__location--multiple").removeClass("active"),a(".home__location").removeClass("slow-active"),a("#side-"+a(i).attr("id")).addClass("show");var t=a(i).find(".home__location--outer"),l=a(i).find(".home__location-ball");0!==t.length?(a("#"+a(i).attr("id")).addClass("slow-active"),a(t[0]).addClass("active"),a(t[0]).children(".home__location--multiple").addClass("active")):a("#"+a(i).attr("id")).addClass("active"),a(l[0]).addClass("active")});new Swiper(".swiper-container",{effect:"cube",grabCursor:!0,cube:!1,autoplay:5e3,loop:!0})})}(jQuery);