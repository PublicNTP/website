; (function ($) {
	$(function () {

		// Mobile Menu
		$('#mobile-icon').click(function () {
			$(this).addClass('shrink')
			window.setTimeout(function () {
				$('.header__mobile-wrap').addClass('pull-out');
			}, 400)
		})

		$('#mobile-close').click(function () {
			$('.header__mobile-wrap').removeClass('pull-out');
			window.setTimeout(function () {
				$('#mobile-icon').removeClass('shrink')
			}, 400)
		})

		// Logo animation
		window.onload = function () {
			$('.logo__minute').addClass('logo__minute-move');
			$('.logo__hour').addClass('logo__hour-move');
		}

		// Cookie | GDPR
		// Set initial cookie
		// localStorage.setItem('showCookie', false);
		var cookie = localStorage.getItem('showCookie');

		// Don't show if true
		if (cookie) {
			console.log('cookie has already been set');
		}

		// Show Cookie
		if (!cookie) {
			console.log('showing cookie for first time.');
			$('.privacy').addClass('privacy__show');
			localStorage.setItem('showCookie', true);

			$('.privacy__close').click(function () {
				$('.privacy').removeClass('privacy__show');
			});
		}


	});
})(jQuery);
