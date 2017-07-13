// Write your Pizza Builder JavaScript in this file.
$(document). on ('ready', function(){


    var total = 21;
    var li = $('.panel.price li');


	$('.btn-pepperonni').on('click',function(){
		
		$('.pep').fadeToggle(); 
		
		if ($(this).hasClass('active')==false){
			total= total+1;
		}
		else if ($(this).hasClass('active')==true){
			total= total-1;
		}

		$('strong').text('$'+total);

		$(li[0]).fadeToggle(1000);
		$('button.btn-pepperonni').toggleClass('active');
	});

	$('.btn-mushrooms').on('click',function(){
		
		$('.mushroom').fadeToggle();
		if ($(this).hasClass('active')==false){
			total= total+1;
		}
		else if ($(this).hasClass('active')==true){
			total= total-1;
		}

		$('strong').text('$'+total);
		$(li[1]).fadeToggle(1000);
		$('button.btn-mushrooms').toggleClass('active');
	});

	$('.btn-green-peppers').on('click',function(){
		
		$('.green-pepper').fadeToggle();
		if ($(this).hasClass('active')==false){
			total= total+1;
		}
		else if ($(this).hasClass('active')==true){
			total= total-1;
		}

		$('strong').text('$'+total);
		$(li[2]).fadeToggle(1000);
		$('button.btn-green-peppers').toggleClass('active');
	});

	$('.btn-sauce').on('click',function(){
		
		$('section.sauce').toggleClass('sauce-white');
		if ($(this).hasClass('active')==false){
			total= total+3;
		}
		else if ($(this).hasClass('active')==true){
			total= total-3;
		}

		$('strong').text('$'+total);
		$(li[3]).fadeToggle(1000);
		$('button.btn-sauce').toggleClass('active');
	});

	
	$('.btn-crust').on('click',function(){
		
		$('section.crust').toggleClass('crust-gluten-free');
		if ($(this).hasClass('active')==false){
			total= total+5;
		}
		else if ($(this).hasClass('active')==true){
			total= total-5;
		}

		$('strong').text('$'+ total);
		$(li[4]).fadeToggle(1000);
		$('button.btn-crust').toggleClass('active');

	});

}); 