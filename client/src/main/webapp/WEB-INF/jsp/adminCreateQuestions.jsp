<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/adminCreateTest.css"/>
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
<div class="main2">
    <div class="window">
        <div class="window-title">Добавить курс</div>
        <form>

            <div class="theme">
                <div>Вопрос:</div>
                <input class="quest" type="text" placeholder="Введите вопрос теста" />
            </div>
            <div class="question">
                <label class="flex "> <input class="answer1" type="text" placeholder="Ответ 1"> </label>
                <label class="flex "> <input class="answer2" type="text" placeholder="Ответ 2"> </label>
                <label class="flex "><input class="answer3" type="text" placeholder="Ответ 3"> </label>
                <label class="flex "> <input class="answer4" type="text" placeholder="Ответ 4"> </label>
                <div>Выберите, какой из ответов верный</div>
                <label>  <input class="rad cor1" checked name="razdel" type="radio" /> 1</label>
                <label>  <input class="rad cor2" name="razdel" type="radio" /> 2</label>
                <label>  <input class="rad cor3" name="razdel" type="radio" /> 3</label>
                <label>  <input class="rad cor4" name="razdel" type="radio" /> 4</label>
            </div>
            <div class="answer">
                <button class="add-btn add-answerr">Добавить</button>
            </div>
        </form>
    </div>
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
<script src="../../adminCreateQuestions.js"></script>
</body>
</html>
