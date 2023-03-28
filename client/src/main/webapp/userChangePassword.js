let btnGoToPass = document.querySelector('.go-to-btn');
let btnChangeLogin = document.querySelector('.change-btn');
let newPassword = document.querySelector('.new-password');
let mainPage = document.querySelector('.mainPage');
let aboutPage = document.querySelector('.aboutPage');
let profilePage = document.querySelector('.profilePage');
let testPage = document.querySelector('.testPage');
let newsPage = document.querySelector('.newsPage');

let exit = document.querySelector('.exit-box');
exit.addEventListener('click', () => {
    if (sessionStorage.getItem('login') == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/changeLogin';
    }
});
mainPage.addEventListener('click', () => {
    location.href = 'http://localhost:8080/';
});
aboutPage.addEventListener('click', () => {
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

let textExit = document.querySelector('.exit-text');
if (sessionStorage.getItem('login') == null) {
    textExit.innerText = 'Войти';
} else {
    textExit.innerText = 'Выйти';
}

let oldPassword = document.querySelector('.old-password')
btnChangeLogin.addEventListener('click', (e) => {
    e.preventDefault()
    if (validationLogin()) {
        const XHR2 = new XMLHttpRequest();
        let data = JSON.stringify({
            "oldLogin": sessionStorage.getItem('login'),
            "oldPassword": oldPassword.value,
            "newPassword": newPassword.value,
        })
        XHR2.open('POST', 'http://localhost:8081/api/user/updatePassword');
        XHR2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
        XHR2.send(data);
        XHR2.onreadystatechange = function () {
            if (XHR2.readyState !== 4) {
                return
            }
            if (XHR2.status === 200) {
                alert('Вы успешно изменили данные!')
            } else {
                alert('Ошибка!')
            }
        }
    } else {
        alert('Ошибка!')
        newPassword.value = '';
    }
})

btnGoToPass.addEventListener('click', () => {
    location.href = 'http://localhost:8080/user/changePassword';
})

function validationLogin() {
    let pasUpVal = newPassword.value;
    let isPasswordCorrect;
    if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pasUpVal) === false) {
        alert('Password must contains more than 6 symbols: lowercase and uppercase latin letters, numbers')
        isPasswordCorrect = false;
    } else {
        isPasswordCorrect = true;
    }

    if (isPasswordCorrect === true) {
        return true;
    } else {
        return false;
    }
}