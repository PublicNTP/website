;(function ($){
    $(function() {
	
	$('#search-input').on('input', function(e) {
		var search = $('#search-input').val();
		$('.blog__search-item-wrap').empty()
		if (search != '') {
			var data = {
				search: search
			}
			console.log('submitted')
			$.ajax({
				url: '/blog/search/',
				data: data,
				method: 'POST',
				success: function(res) {
					console.log('res', res)
					$('.blog__search-item-wrap').append(res)
				},
				error: function(err) {
					console.log('err', err)
				}
			})
		}
	})	

    });
})(jQuery);
