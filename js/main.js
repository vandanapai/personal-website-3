$(document).ready(function() {

	$(function(){
		$("a[rel='get']").click(function(e){
		e.preventDefault();
		$('#project-grid-container').fadeOut();

		//get the link location that was clicked
		pageurl = $(this).attr('href');
		
			// change color of VP logo		
			pageColor = $(this).attr('data-color');
			$('#background-fill, #p-fill').attr('class', pageColor);


		//to get the ajax content and display in div with id 'content'
		$.ajax({url:pageurl+'?rel=get',success: function(data){
			var result = $(data).filter('#ajax-loaded-content').html(); //test
			console.log(result); 
			$('#main-content-container').html(data);
			$('html, body').animate({ scrollTop: 0 }, 200); // scroll to top 
		}});

		//to change the browser URL to the given link location
		if(pageurl!=window.location){
		window.history.pushState({path:pageurl},'',pageurl);
		}
		//stop refreshing to the page given in
		return false;
		});

		/* the below code is to override back button to get the ajax content without page reload*/
		$(window).bind('popstate', function() {
			$.ajax({url:location.pathname+'?rel=get',success: function(data){
				var result = $(data).filter('#ajax-loaded-content').html();
				$('#main-content-container').html(data);
			}});
		});
	});



	(function($) {

	  // Get the .gif images from the "data-alt".
		var getGif = function() {
			var gif = [];
			$('img').each(function() {
				var data = $(this).data('alt');
				gif.push(data);
			});
			return gif;
		}

		var gif = getGif();

		// Preload all the gif images.
		var image = [];

		$.each(gif, function(index) {
			image[index]     = new Image();
			image[index].src = gif[index];
		});

		// Change the image to .gif when clicked and vice versa.
		$(document).on('click', "figure[name='paused-gif']", function() {

			var $this   = $(this),
					$index  = $this.index(),
					
					$img    = $this.children('img'),
					$imgSrc = $img.attr('src'),
					$imgAlt = $img.attr('data-alt'),
					$imgExt = $imgAlt.split('.');
					
			if($imgExt[3] === 'gif') {
				$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
			} else {
				$img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
			}

			// Add play class to help with the styling.
			$this.toggleClass('play');

		});

	})(jQuery);


});




