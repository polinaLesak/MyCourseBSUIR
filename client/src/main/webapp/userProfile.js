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
    console.log('l')
    location.href = 'http://localhost:8080/user/aboutUs';
});
profilePage.addEventListener('click', () => {
    if (sessionStorage.getItem('login') !== null) {
        location.href = 'http://localhost:8080/user/profile';
    } else {
        location.href = 'http://localhost:8080/authorization';
    }
});
testPage.addEventListener('click', () => {
    if (sessionStorage.getItem('login') !== null) {
        location.href = 'http://localhost:8080/user/chooseTest';
    } else {
        location.href = 'http://localhost:8080/authorization';
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
if (sessionStorage.getItem('login') == null) {
    textExit.innerText = 'Войти';
} else {
    textExit.innerText = 'Выйти';
}

document.querySelector('.tests').addEventListener('click', () => {
    if (sessionStorage.getItem('login') == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/results';
    }
})

document.querySelector('.personal').addEventListener('click', () => {
    if (sessionStorage.getItem('login') == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/changeInfo';
    }
})