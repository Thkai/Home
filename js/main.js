$(document).ready(function(){
	$('.menu-open').click(function () {
		$('.header__nav').toggleClass('show-menu');
		$('.menu-open').toggleClass('btn-active');
	});
})