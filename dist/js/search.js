!function(e){e(function(){var a=e("#deserializedPosts").text();e("#deserializedPosts").remove(),a=JSON.parse(a);var r=function(e,a){return e+'<a href="/blog/posts/'+a.permalink+'.html" class="blog__search-item">'+a.title+"</a>"};e("#search-input").on("input",function(t){var i=e("#search-input").val().toLowerCase();if(e(".blog__search-item-wrap").empty(),""!=i){var s="";for(var o in a){if(-1!=a[o].title.toLowerCase().indexOf(i))s=r(s,a[o]);else for(var n in a[o].tags){var l=a[o].tags[n].name.toLowerCase();if(-1!=l.indexOf(i)){s=r(s,a[o]);break}}}e(".blog__search-item-wrap").append(s)}})})}(jQuery);