; (function ($) {
  $(function () {
    var options = { valueNames: ['date'] }; var userList = new List('documents', options); var message1 = 'Order by ▲'; var message2
      = 'Order by ▼'; var state = false; $('.sort__btn').on('click', function (e) {
        console.log('firing', e.target); if (state
          === false) { $('.sort__btn').text(message1); state = true; return; } if (state === true) {
            $('.sort__btn').text(message2);
            state = false; return;
          }
      })
  });
})(jQuery);
