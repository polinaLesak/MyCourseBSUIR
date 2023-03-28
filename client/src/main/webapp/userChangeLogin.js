let oldLogin = document.querySelector('.oldLogin');
let btnGoToPass = document.querySelector('.go-to-btn');
let btnChangeLogin = document.querySelector('.change-btn');
let newLoginInput = document.querySelector('.input-change');

oldLogin.innerText = sessionStorage.getItem('login');

let exit = document.querySelector('.exit-box');
exit.addEventListener('click', () => {
    if (sessionStorage.getItem('login') == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/changeInfo';
    }
});

let mainPage = document.querySelector('.mainPage');
let aboutPage = document.querySelector('.aboutPage');
let profilePage = document.querySelector('.profilePage');
let testPage = document.querySelector('.testPage');
let newsPage = document.querySelector('.newsPage');


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

if (sessionStorage.getItem('login') == null) {
    textExit.innerText = 'Войти';
} else {
    textExit.innerText = 'Выйти';
}

btnChangeLogin.addEventListener('click', (e) => {
    e.preventDefault()
    if (validationLogin()) {
        const XHR2 = new XMLHttpRequest();
        let data = JSON.stringify({
            "oldLogin": sessionStorage.getItem('login'),
            "newLogin": newLoginInput.value,
        })
        console.log(data)
        XHR2.open('POST', 'http://localhost:8081/api/updateLogin');
        XHR2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
        XHR2.send(data);
        XHR2.onreadystatechange = function () {
            console.log(XHR2.status)
            if (XHR2.readyState !== 4) {
                return
            }
            if (XHR2.status === 200) {
                alert('Вы успешно изменили данные!')
                sessionStorage.removeItem('login')
                sessionStorage.removeItem('token')
                sessionStorage.setItem('login', newLoginInput.value)
                sessionStorage.setItem('token', XHR2.responseText)
                document.location.href = 'http://localhost:8080/user/changeLogin'
            } else {
                alert('Такой логин уже существует')
            }
        }
    } else {
        alert('Введите новый логин')
        newLoginInput.value = '';
    }
})

btnGoToPass.addEventListener('click', () => {
    document.location.href = "http://localhost:8080/user/changePassword"
})

function validationLogin() {
    let logUpVal = newLoginInput.value;
    if (/^[a-zA-Z1-9]+$/.test(logUpVal) === false) {
        alert('Логин не должен содержать спец символы и кириллицу!');
        return false;
    } else if (logUpVal.length < 4 || logUpVal.length > 20) {
        alert('Логин должен содержать более 4 и менее 20 символов!');
        return false;
    } else if (parseInt(logUpVal.substr(0, 1))) {
        alert('Логин должен начинаться с буквы!');
        return false;
    } else {
        return true;
    }
}