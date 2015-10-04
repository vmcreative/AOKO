$(window).one( "scroll",function(){
  setTimeout(function(){ 
  	$('#modalWindow').fadeIn('slow', function(){
  		$(document).click(function(event) {
		    if(!$(event.target).closest('#modalBox').length) {
		        if($('#modalBox').is(":visible")) {
		            $('#modalWindow').fadeOut();
		        }
		    }
		});
  	}) }, 2000
  );
});
function modalClose(event) {
			if($('#modalBox').is(":visible")) {
		            $('#modalWindow').fadeOut();
		        }
		};