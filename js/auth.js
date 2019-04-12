$(document).ready(function(){
	$('.btn').on('click', function(){
		
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
			$('#status').html('Логин не должен быть больше 12 симолов');
			return 0;
		}

		$('#status').html('Успешная регистрация');
	});
});