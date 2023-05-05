$(function() {
	 $(window).scroll(function() {
		  if($(this).scrollTop()>100) {
			   $('.totop').fadeIn('fast'); } else { $('.totop').fadeOut('fast'); } });
$('.totop').click(function() { $('body,html').animate({scrollTop:0},400);return false }); });