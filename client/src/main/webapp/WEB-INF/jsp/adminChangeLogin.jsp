<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/adminChangeLogin.css"/>
    <title>MyCourse</title>
</head>
<body>
<header>
    <div class="logo">
        <img src="../../img/logo.png" />
        <div class="logo-text">MyStatistic</div>
    </div>
    <div class="exit-box">
        <div class="exit-text">Выйти</div>
        <img src="../../img/exit.png" class="exit" />
    </div>
</header>
<nav>
    <div class="nav-text goUsers">Пользователи</div>
    <div class="nav-text goTests">Курсы</div>
    <div class="nav-text goPersonal">Личные данные</div>
    <div > Статистика</div>
</nav>
<div class="main">
    <div class="window">
        <div class="window-title">
            Чтобы изменить личные данные аккаунта, введите новые и нажмите кнопку
            изменить
        </div>
        <div class="window-context">Старый логин: <span class="log"></span></div>
        <div class="change-login">
            <input
                    type="text"
                    class="input-change"
                    placeholder="Введите новый логин"
            />
            <button class="change-btn">Изменить</button>
        </div>
        <div class="go-to-pass">
            <button class="go-to-btn">Перейти к изменению пароля</button>
        </div>
    </div>
</div>
<footer>
    <div class="contacts">
        <div class="connections">Сотрудничество:</div>
        <div class="description">
            <div>+375 29 286 35 77</div>
            <div>ул. Пушкинская  115, этаж 15, отдел 2</div>
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
<script src="../../adminChangeLogin.js"></script>
</body>
</html>
