;(function ($){
    $(function() {
	
	var deserializedPosts = $('#deserializedPosts').text();
	$('#deserializedPosts').remove();
	deserializedPosts = JSON.parse(deserializedPosts);
	
	var buildSearchItem = function(results, post) {
		return results +
			'<a href="/blog/posts/' + post.permalink + '.html" ' + 'class="blog__search-item">' +
				post.title +
			'</a>';
	}
	
	$('#search-input').on('input', function(e) {
		var search = $('#search-input').val().toLowerCase();
		$('.blog__search-item-wrap').empty()
		if (search != '') {
			var search_results = '';
			for (var d in deserializedPosts) {
				var title = deserializedPosts[d].title.toLowerCase();
				if (title.indexOf(search) != -1) {
					search_results = buildSearchItem(search_results, deserializedPosts[d])
				} else {
					for (var t in deserializedPosts[d].tags) {
						var tag = deserializedPosts[d].tags[t].name.toLowerCase();
						if (tag.indexOf(search) != -1) {
							search_results = buildSearchItem(search_results, deserializedPosts[d])
							break;
						}	
					}
				}
			}	
			$('.blog__search-item-wrap').append(search_results);
		}
	})	

    });
})(jQuery);
