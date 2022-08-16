var swiper = new Swiper(".questions__swiper", {

	navigation: {
		nextEl: ".questions__btn-slide-next, .back-slide__btn",
		prevEl: ".questions__btn-slide-prev",
	},
	autoHeight: true,
});


$('.btn1').click(function(event) {
	$(this).addClass('active');
	$('.slide-container1').addClass('active');
	swiper.updateAutoHeight(100);
});
$('.btn2').click(function(event) {
	$(this).addClass('active');
	$('.slide-container2').addClass('active');
	swiper.updateAutoHeight(100);
});
$('.btn3').click(function(event) {
	$(this).addClass('active');
	$('.slide-container3').addClass('active');
	swiper.updateAutoHeight(100);
});
$('.btn4').click(function(event) {
	$(this).addClass('active');
	$('.slide-container4').addClass('active');
	swiper.updateAutoHeight(100);
});
$('.btn5').click(function(event) {
	$(this).addClass('active');
	$('.slide-container5').addClass('active');
	swiper.updateAutoHeight(100);
});
$('.btn6').click(function(event) {
	$(this).addClass('active');
	$('.slide-container6').addClass('active');
	swiper.updateAutoHeight(100);
});


