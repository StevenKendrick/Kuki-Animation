$(document).ready(function(){

	$('body').addClass('load');

	$(window).scroll(function(){
		isScrolledIntoView('.scrollTo, .scrollToParent');
	});
});

function isScrolledIntoView(elem)
{
	
	var animations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'];

	$(elem).each(function(){
	    var $window = $(window);

	    var docViewTop = $window.scrollTop() - 1200;
	    var docViewBottom = docViewTop + $window.height();

	    var elemTop = $(this).offset().top;
	    var elemBottom = elemTop + $(this).height();

	    if ((docViewBottom > elemBottom)) {
	    	
	    	$(this).addClass('in-view');
	    	
	    	for ( var i = 0; i < animations.length; i++ ) {
	    		if ( $(this).hasClass( 'on-visible-' + animations[i] ) )
	    		{
	    			$(this).addClass(animations[i]);
	    		}
	    	};
	    }
	});
}