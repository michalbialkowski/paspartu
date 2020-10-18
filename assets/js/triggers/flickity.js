$(window).on('load', function() {
	$('.logo--slider').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true
	});
	
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true
	});
	
	$('.banner--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true
	});
	
	$('.banner--nav').flickity({
		asNavFor: '.banner--slider',
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true
	});
});