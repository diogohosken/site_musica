$(function(){

	$(window).scroll(function(){

		if( $(this).scrollTop() > 70){
			$('#menuNav').fadeIn();
		}
		
		else{
			$('#menuNav').fadeOut();
			$('#menuNav').addClass('fixed-top');
		}

	});

});