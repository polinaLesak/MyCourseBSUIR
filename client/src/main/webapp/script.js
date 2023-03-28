let mainPage = document.querySelector('.mainPage');
let aboutPage = document.querySelector('.aboutPage');
let profilePage = document.querySelector('.profilePage');
let testPage = document.querySelector('.testPage');
let newsPage = document.querySelector('.newsPage');

let exit = document.querySelector('.exit-box');
let textExit = document.querySelector('.exit-text');

mainPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/';
});
aboutPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/user/aboutPage';
});
profilePage.addEventListener('click', () => {
    if (sessionStorage.getItem('login') !== null) {
        location.href = 'http://localhost:8080/user/profilePage';
    } else {
        location.href = 'http://localhost:8080/user/authorization';
    }
});
testPage.addEventListener('click', () => {
    if (sessionStorage.getItem('login') !== null) {
        location.href = 'http://localhost:8080/user/testPage';
    } else {
        location.href = 'http://localhost:8080/user/authorization';
    }
});
newsPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/user/newsPage';
});
exit.addEventListener('click', () => {
    if ((textExit.innerText = 'Войти')) {
        location.href = 'http://localhost:8080/user/authorization';
    } else {
        sessionStorage.clear();
        location.href = 'http://localhost:8080/';
    }
});

//заполнение
if (sessionStorage.getItem('login') !== null) {
    textExit.innerText = 'Войти';
} else {
    textExit.innerText = 'Выйти';
}
