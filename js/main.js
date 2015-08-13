$(document).ready(function() {
	$('#project-tile-boost').click(function(e){
		$('#project-grid-container').fadeOut();
	    e.preventDefault();
	    $.ajax({
	        type: "GET",
	        url: "work/boost.html",
	        data: { },
	        success: function(data){
	            $('#main-content-container').html(data);
	        }
	    });
	});

});

