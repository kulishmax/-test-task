jQuery( document ).ready(function($) {
	'use strict'

	$('.card-view-icon').click(function() {
		$('.card-view').show();
		$('.table-view__content').css('display','none');
	});

	$('.table-view-icon').click(function() {
		$('.table-view__content').show();
		$('.card-view').css('display','none');
	});

	var moveMenu = function() {
		if (window.innerWidth <= '1100') {
			$('.card-view').show();
			$('.table-view__content').css('display','none');
		}
	}
	moveMenu();
	$(window).resize(moveMenu);

});
