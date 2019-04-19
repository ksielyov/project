$(document).ready(() => {
	
	// для первого вопроса
	$('#q1').on('click', () => {
		$('#a1').css('display', 'block');
	});
	$('.close1').on('click', () => {
		$('#a1').css('display', 'none');
	});

	// для второго вопроса
	$('#q2').on('click', () => {
		$('#a2').css('display', 'block');
	});
	$('.close2').on('click', () => {
		$('#a2').css('display', 'none');
	});

	// для третьего вопроса
	$('#q3').on('click', () => {
		$('#a3').css('display', 'block');
	});
	$('.close3').on('click', () => {
		$('#a3').css('display', 'none');
	});

});