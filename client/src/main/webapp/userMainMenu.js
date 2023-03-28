let mainPage = document.querySelector('.mainPage');
let aboutPage = document.querySelector('.aboutPage');
let profilePage = document.querySelector('.profilePage');
let testPage = document.querySelector('.testPage');
let newsPage = document.querySelector('.newsPage');

let exit = document.querySelector('.exit-box');
let textExit = document.querySelector('.exit-text');
//sessionStorage.setItem('login', 'login1');

mainPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/';
});
aboutPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/user/aboutUs';
});
profilePage.addEventListener('click', () => {
    if (sessionStorage.getItem("login") == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/profile';
    }
});
testPage.addEventListener('click', () => {
    if (sessionStorage.getItem("login") == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/chooseTest';
    }
});
newsPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/user/news';
});
exit.addEventListener('click', () => {
    if (sessionStorage.getItem('login') == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        sessionStorage.clear();
        location.href = 'http://localhost:8080/';
    }
});

//заполнение
if (sessionStorage.getItem("login") == null) {
    textExit.innerText = 'Войти';
} else {
    textExit.innerText = 'Выйти';
}
