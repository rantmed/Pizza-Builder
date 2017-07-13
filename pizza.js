// Write your Pizza Builder JavaScript in this file.
$(document). on ('ready', function(){

	$('.btn-pepperonni').on('click',function(){
		$('.pep').fadeToggle();
	});

	$('.btn-mushrooms').on('click',function(){
		$('.mushroom').fadeToggle();
	});

	$('.btn-green-peppers').on('click',function(){
		$('.green-pepper').fadeToggle();
	});

	$('.btn-sauce').on('click',function(){
		$('section.sauce').toggleClass('sauce-white');
	});

	
	$('.btn-crust').on('click',function(){
		$('section.crust').toggleClass('crust-gluten-free');

	});

	$('.btn-pepperonni').on('click',function(){
		$('button.btn-pepperonni').toggleClass('active');
	});

	$('.btn-mushrooms').on('click',function(){
		$('button.btn-mushrooms').toggleClass('active');
	});

	$('.btn-green-peppers').on('click',function(){
		$('button.btn-green-peppers').toggleClass('active');
	});

	$('.btn-sauce').on('click',function(){
		$('button.btn-sauce').toggleClass('active');
	});

	$('.btn-crust').on('click',function(){
		$('button.btn-crust').toggleClass('active');
	});




}); 