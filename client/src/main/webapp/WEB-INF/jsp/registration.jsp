<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/registration.css"/>
    <title>MyCourse</title>
</head>
<body>
<header>
    <div class="logo">
        <img src="../../img/logo.png" />
        <div class="logo-text">MyStatistic</div>
    </div>
    <div class="exit">Вернуться к авторизации →</div>
</header>
<main>
    <form>
        <div class="form-title">
            Чтобы зарегистрироваться в системе необходимо ввести личные данные
        </div>
        <input required type="text" id="logUp" placeholder="Введите логин" />
        <input required  type="password" id="pasUp" placeholder="Введите пароль" />
        <input required  type="text" placeholder="Введите имя" />
        <input required  type="text" placeholder="Введите фамилию" />
        <input required  type="text" placeholder="Введите отчество" />
        <select>
            <option>Программист-разработчик(python)</option>
            <option>Программист-разработчик(java)</option>
            <option>Программист-разработчик(C++)</option>
            <option>Тестировщик</option>
            <option>Аналитик</option>
        </select>
        <input required  type="number" placeholder="Введите стаж" />
        <button class="send">Зарегистрироваться</button>
    </form>
</main>
<footer>
    <div class="contacts">
        <div class="connections">Сотрудничество:</div>
        <div class="description">
            <div>+375 29 286 35 77</div>
            <div>ул. Пушкинская  115, этаж 3, каб 20</div>
            <div>lesakpolina@gmail.com</div>
        </div>
    </div>
    <div class="links">
        <img src="../../img/fb.png" />
        <img src="../../img/ig.png" />
        <img src="../../img/tg.png" />
        <img src="../../img/vk.png" />
    </div>
</footer>
<script src="../../registration.js"></script>
</body>
</html>
