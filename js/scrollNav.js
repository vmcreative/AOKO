$(document).scroll(function() {
	var y = $(this).scrollTop();
	var header = $('#header').height();
	var x = $(document).width();
	if (y > header && x > 560) {
	  	$('.scrollMenu').show();
	  	$('.menu ul').css('visibility','hidden');
	  	$('.menu').css('background-color','white')

	  	} else {
	   	$('.scrollMenu').hide();
	   	$('.menu ul').css('visibility','visible')
	   	$('.menu').css('background-color','black')
	 	}
});
$(function(){
  	var $menuList = $('#menuList').clone();
  	$('#scrollList').html($menuList);
});