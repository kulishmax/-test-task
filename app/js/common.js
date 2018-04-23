jQuery( document ).ready(function($) {
	'use strict'

	$('.card-view-icon').click(function() {
		$('.card-view').show();
		$('.table-view__content').css('display','none');
		$('.table-view-active').css('display','none');
		$('.table-view-disabled').show();
		$('.card-view-active').show();
		$('.card-view-disabled').css('display','none');
	});

	$('.table-view-icon').click(function() {
		$('.table-view__content').show();
		$('.card-view').css('display','none');
		$('.table-view-active').show();
		$('.table-view-disabled').css('display','none');
		$('.card-view-active').css('display','none');
		$('.card-view-disabled').show();
	});

	var moveMenu = function() {
		if (window.innerWidth <= '1100') {
			$('.card-view').show();
			$('.table-view__content').css('display','none');
			$('.menu__list').hide();
		}
		else {
			$('.menu__list').css('display','flex');
		}
	}
	moveMenu();
	$(window).resize(moveMenu);

	$('.menu__butget-icon').click(function() {
		console.log(this);
		$('.menu__list').toggle();
	});

});
