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

	$('.reviews__list').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve"><path style="fill:#1E201D;" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554 c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587 c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/></g></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve"><path style="fill:#1E201D;" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/></g></svg></button>'
	})

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


	$('form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "order.php",
		    data: $(this).serialize()
		}).done(function() {
			$.fancybox.close();
		  $.fancybox.open({src  : '#popup-thanks',type : 'inline'});
		  
		});
		return false;
	});

	$('.parallax-layer').paroller();
});
