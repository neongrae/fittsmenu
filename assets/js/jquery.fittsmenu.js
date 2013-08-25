$(document).ready(function(){


	var width = $(window).width(),
		height = $(window).height();

	$(document).bind('touchstart click', function(e){

		if(!$('.fittsmenu').hasClass('active')){
		
		var Xpos = e.pageX,
			 Ypos = e.pageY;

		// var Xrel = (Xpos/width)*100,
			 // Yrel	= (Ypos/width)*100;

		console.log('x: '+Xpos);
		console.log('Y: '+Ypos);

		// console.log('xRel: '+Xrel);
		// console.log('YRel: '+Yrel);

		var fittHeight = $('.fittsmenu').height(),
			fittWidth	= $('.fittsmenu').width();

		$('.fittsmenu').css({ "position":"absolute", "top":Ypos-(fittHeight), "left":Xpos-( (fittWidth-80)/2) });
		$('.fittsmenu').addClass('active');

		}else{
			$('.fittsmenu').removeClass('active');
			$('.fittsmenu').css({"top":"", "left":""});
		}//end 

	})//doc.click


})