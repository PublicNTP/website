;(function ($){
    $(function() {


	$('#mobile-icon').click(function() {
		$(this).addClass('shrink')
		window.setTimeout(function() {
			$('.header__mobile-wrap').addClass('pull-out');
		}, 400)
	})
	
	$('#mobile-close').click(function() {
		$('.header__mobile-wrap').removeClass('pull-out');
		window.setTimeout(function() {
			$('#mobile-icon').removeClass('shrink')
		}, 400)
	})

	$($('.report__row')[$('.report__row').length - 1]).css({marginBottom: 0})
	if (document.getElementById('report-graph')) {
		var width = document.getElementById('report-graph').offsetWidth;
		var report_count = $('.report__bar-green').length;
		var report_width = width / report_count;
		$('.report__bar-green').each(function(index) {
			$(this).width(report_width);
			$(this).css({left: report_width * index});
		})
		window.setTimeout(function() {
			console.log('lkjdf')
			$('.report__bar-init').removeClass('report__bar-init');
		}, 2000);
	}

    });
})(jQuery);
