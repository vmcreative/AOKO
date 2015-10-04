$.fn.moveIt = function(){
	var $els = $(this);
	var $window = $(window);
	var scrollPos = $window.scrollTop();
	$window.on('scroll', function(){
		scrollPos = $window.scrollTop();
		$els.each(moveEl);
	});
	function moveEl(){
		var $this = $(this);
		var scrollSpeed = parseInt($this.data('scroll-speed'));
		var elPos = scrollPos / scrollSpeed;
    $this.css('transform', 'translateY(' + elPos + 'px)');
	}
}
$(function(){
	$('[data-scroll-speed]').moveIt();
});