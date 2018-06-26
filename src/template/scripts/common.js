$(document).ready(function($) {

	$('.input_phone').mask('+7 (000) 000-00-00');

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('policy');
	valueElementForm('radio-tab');
	
	$('.reviews__item').each(function(index, el) {
		$(this).attr('data-count', index + 1);
	});

	$('.reviews__count-sum').html($('.reviews__item').length)

	$('.reviews__list').slick()

	$('.reviews__list').on('afterChange', function(event, slick, direction){
	  $('.reviews__count-num').html(direction + 1)
	});


	$('.next-step').click(function(event) {
		var currentItem = $(this).parents('.ask-form__item'),
				nextItem = currentItem.next('.ask-form__item');
		currentItem.removeClass('ask-form__item_show');
		nextItem.addClass('ask-form__item_show');
		if ($(this).hasClass('reset-value')) {
			var dataNameElement = $(this).attr('data-form-element');
			$('input[name = '+dataNameElement+']').val(null);
		}
	});


	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
  });

	var formatNav = $('.format__nav'),
			formatList = $('.format__list');

	formatNav.slick({
		arrows: false,
		slidesToShow: 4,
		focusOnSelect: true,
		asNavFor: formatList
	})

	formatList.slick({
		arrows: false,
		fade: true,
		asNavFor: formatNav
	})

	$( '.parallax-layer' ).parallax({
		xparallax: '0px',
		yparallax: '1000px'
	});
});
