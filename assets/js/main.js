$(document).ready(function(){

	//portfolio-filter
	$('.portfolio-items').isotope({
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows'
	});
	//portfolio-items
	$('.portfolio-filter li').click(function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");
		
		var selector = $(this).attr('data-filter');
		$(".portfolio-items").isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue:false,
			}
		});
		return false;
	}); 
	
	$('.portfolio-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	$('.port-overly > a').magnificPopup({type:'image'});
});