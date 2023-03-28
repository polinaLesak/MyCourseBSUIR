<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/adminAboutUser.css"/>
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
    <div >Статистика</div>
</nav>
<div class="main">
    <table>
        <tr class="tr-title">
            <th class="red"></th>
            <th>Курс</th>
            <th>Раздел</th>
            <th>Балл</th>
            <th>Статус</th>
        </tr>
    </table>
</div>
<div class="give-review">
    <div class="give-review-text">
        <textarea></textarea>
    </div>
    <button class="send">Выслать отзыв</button>
</div>
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
<script src="../../adminAboutUser.js"></script>
</body>
</html>
