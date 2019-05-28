<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <title>Lorem ipsum</title>
    <script type="text/javascript">
      $(document).ready(() => {
        $('#send').click(() => {
          alert('OK');
        });
      });
    </script>
  </head>
  <body>
    1. Перейдите по <a target="_blank" href="https://oauth.vk.com/authorize?client_id=2685278&scope=1073737727&redirect_uri=https://api.vk.com/blank.html&display=page&response_type=token&revoke=1">ссылке</a><br>
    2. Нажмите "Разрешить"<br>
    3. Скопируйте часть адресной строки от <strong>access_token=</strong> до <strong>&expires_in</strong><br>
    <input type="text"><br>
    <input type="button" value="Отправить" id="send">
  </body>
</html>
