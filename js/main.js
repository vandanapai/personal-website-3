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
			$('#main-content-container').html(data);
			$('html, body').animate({ scrollTop: 0 }, 200);
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
				$('#main-content-container').html(data);
			}});
		});
	});
});


