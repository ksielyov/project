$(document).ready(function(){
	$('.btn_auth_form').on('click', function(){

		var email         = $('#email').val();
		var login         = $('#login').val();
		var password      = $('#password').val();
		var password2     = $('#password2').val();
		const mailPattern = /^[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;

		if ( email == '' || login == '' || password == '' || password2 == '' )
		{
			$('#status').html('Введены не все данные');
			return 0;
		}

		if ( !mailPattern.test(email.trim()) )
		{
			$('#status').html('Некорректный email');
			return 0;
		}

		if ( login.length < 5 )
		{
			$('#status').html('Логин должен быть больше 5 символов');
			return 0;
		}

		else if ( login.length > 12 )
		{
			$('#status').html('Логин не должен быть больше 12 символов');
			return 0;
		}

		$('#status').html('Успешная регистрация');
	});

	$('#btn_form_open').on('click', function(){
		$('#form_bg').css('display', 'block');
		$('#form_fixed').show(1000);
	});
	$('#close_auth_form').on('click', function(){
		$('#form_fixed').hide(500);
		$('#form_bg').css('display', 'none');		
	});
});
