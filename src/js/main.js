//=../bower_components/jquery/dist/jquery.js
//=../bower_components/slick-carousel/slick/slick.js
//=../bower_components/selectize/dist/js/standalone/selectize.js

$(document).ready(function(){
  $('.main-slider__js').slick({
		arrows: false,
		dots: true,
		customPaging : function(slider, i) {
			return '<a class="main-slider__dot"></a>';
		},
		appendDots: '.main-slider__dots'
	});
	
	$('.price-tabs li').click(function() {
    var tabName = $(this).attr('show-tab');
    $(this).addClass('active').siblings().removeClass('active');
    $('.price-content .' + tabName).addClass('active').siblings().removeClass('active');
	});

	$('.price-slider').slick({
		slidesToShow: 3,
		infinite: false,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('select').selectize();
	$('.nav-toggle').click(function(){
			$('.header').toggleClass('active')
	});
});