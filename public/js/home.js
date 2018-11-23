(function($) {
  $(function() {
    // console.log('v1');

    var getIndexFromId = function(tag) {
      return parseInt(
        $(tag)
          .attr('id')
          .split('-')[1]
      );
    };

    $('#side-location-0').addClass('show');
    $('#location-0').addClass('active');
    $($('.home__location-ball')[0]).addClass('active');

    var active = 0;

    $('.home__location').on('mouseenter',
      function() {
        var outer = $(this).find('.home__location--outer');
        var ball = $(this).find('.home__location-ball');
        if (outer.length !== 0) {
          $(this).addClass('slow-active');
          $(outer[0]).addClass('active');
          $(outer[0])
            .children('.home__location--multiple')
            .addClass('active');
        } else {
          $(this).addClass('active');
        }
        $(ball[0]).addClass('active');
      });

    $('.home__location').on('mouseleave',
      function() {
        var outer = $(this).find('.home__location--outer');
        var ball = $(this).find('.home__location-ball');
        var isActive = getIndexFromId(this) === active;
        if (!isActive && outer.length == 0) {
          $(this).removeClass('active');
          $(ball[0]).removeClass('active');
        } else if (!isActive) {
          $(this).removeClass('slow-active');
          $(outer[0]).removeClass('active');
          $(outer[0])
            .children('.home__location--multiple')
            .removeClass('active');
          $(ball[0]).removeClass('active');
        }
      }
    );

    $('.home__location').on('mouseup touchend',function() {
      active = getIndexFromId(this);
      var thisLocation = this;
      $('.home__sidebar-wrap').removeClass('show');
      $('.home__location').removeClass('active');
      $('.home__location-ball').removeClass('active');
      $('.home__location--outer').removeClass('active');
      $('.home__location--multiple').removeClass('active');
      $('.home__location').removeClass('slow-active');

      $('#side-' + $(thisLocation).attr('id')).addClass('show');
      var outer = $(thisLocation).find('.home__location--outer');
      var ball = $(thisLocation).find('.home__location-ball');
      if (outer.length !== 0) {
        $('#' + $(thisLocation).attr('id')).addClass('slow-active');
        $(outer[0]).addClass('active');
        $(outer[0])
          .children('.home__location--multiple')
          .addClass('active');
      } else {
        $('#' + $(thisLocation).attr('id')).addClass('active');
      }
      $(ball[0]).addClass('active');
    });

    var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cube: false,
      autoplay: 5000,
      loop: true
    });
  });
})(jQuery);
