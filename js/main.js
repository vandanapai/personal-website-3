$(document).ready(function() {
	// $('#project-tile-boost').click(function(e){
	// 	$('#project-grid-container').fadeOut();
	//     e.preventDefault();
	//     $.ajax({
	//         type: "GET",
	//         url: "work/boost.html",
	//         data: { },
	//         success: function(data){
	//             $('#main-content-container').html(data);
	//         }
	//     });
	// });


	// $("a[rel='tab']").click(function(e){
	// //code for the link action
	// return false;
	// });

	$(function(){
		$("a[rel='get']").click(function(e){
		e.preventDefault();
		$('#project-grid-container').fadeOut();

		//get the link location that was clicked
		pageurl = $(this).attr('href');

		//to get the ajax content and display in div with id 'content'
		$.ajax({url:pageurl+'?rel=get',success: function(data){
			$('#main-content-container').html(data);
			$("html, body").animate({ scrollTop: 0 }, 200);
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


