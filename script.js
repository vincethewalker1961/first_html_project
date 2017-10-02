
/* This section is for the Index Page event */

$(document).ready(function(){
	$('#mainContentDave').mouseenter(function(){
		$('#helloTextD').show();
	});$(document).ready(function(){
	$('#mainContentDave').mouseenter(function(){
		$('#helloTextD').show();
	});
	$('#mainContentDave').mouseleave(function(){
		$('#helloTextD').hide();
	});
});


$(document).ready(function(){
	$('#mainContentEric').mouseenter(function(){
		$('#helloTextE').show();
	});
	$('#mainContentEric').mouseleave(function(){
		$('#helloTextE').hide();
	});
});	

$(document).ready(function(){
	$('#mainContentStephen').mouseenter(function(){
		$('#helloTextS').show();
	});
	$('#mainContentStephen').mouseleave(function(){
		$('#helloTextS').hide();
	});
});	
	
$(document).ready(function(){
	$('#mainContentVince').mouseenter(function(){
		$('#helloTextV').show();
	});
	$('#mainContentVince').mouseleave(function(){
		$('#helloTextV').hide();
	});
	
	
});
	$('#mainContentDave').mouseleave(function(){
		$('#helloTextD').hide();
	});
});


$(document).ready(function(){
	$('#mainContentEric').mouseenter(function(){
		$('#helloTextE').show();
	});
	$('#mainContentEric').mouseleave(function(){
		$('#helloTextE').hide();
	});
});	

$(document).ready(function(){
	$('#mainContentStephen').mouseenter(function(){
		$('#helloTextS').show();
	});
	$('#mainContentStephen').mouseleave(function(){
		$('#helloTextS').hide();
	});
});	
	
$(document).ready(function(){
	$('#mainContentVince').mouseenter(function(){
		$('#helloTextV').show();
	});
	$('#mainContentVince').mouseleave(function(){
		$('#helloTextV').hide();
	});
	
	
});

/* This section is for the Image resizing in the South Australia, Western Australia and Going Home Pages */

$(document).ready(function(){
			var $this = $(this);
			$('.picture img').click(function(){
				$(this).css("cursor", "pointer");
				$(this).animate({width: "500px"}, '3s');
			});
			$('.picture img').mouseleave(function(){
				$(this).animate({width: "100px"}, 'slow');
			});
		});
