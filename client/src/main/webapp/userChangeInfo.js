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
let exit = document.querySelector('.exit-box');
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

document.querySelector('.go-to-log').addEventListener('click', () => {
    if (sessionStorage.getItem('login') == null) {
        location.href = 'http://localhost:8080/authorization';
    } else {
        location.href = 'http://localhost:8080/user/changeLogin';
    }
})

let inputs = document.querySelectorAll('input');
const XHR2 = new XMLHttpRequest();
XHR2.open('GET', `http://localhost:8081/api/user/update/${sessionStorage.getItem('login')}`);
XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
XHR2.send();
XHR2.onreadystatechange = function () {
    if (XHR2.readyState !== 4) {
        return
    }
    if (XHR2.status === 200) {
        let text = JSON.parse(XHR2.responseText)
        console.log(text.name)
        inputs[0].value = text.name;
        inputs[1].value = text.surname;
        inputs[2].value = text.patronymic;
        document.querySelector('.year').value = text.experience;
        document.querySelector('select').value = text.position;
        console.log(XHR2.responseText)

    }
}

document.querySelector('.send').addEventListener('click', (e) => {

    e.preventDefault();
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "login": sessionStorage.getItem('login'),
        "name": inputs[0].value,
        "surname": inputs[1].value,
        "patronymic": inputs[2].value,
        "experience": inputs[3].value,
        "position": document.querySelector('select').value,
    })
    XHR.open('POST', 'http://localhost:8081/api/user/update', true);
    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'))
    XHR.send(data);
    console.log(data)
    XHR.addEventListener('error', function (event) {
        alert("OOPS! SOMETHING WENT WRONG!");
    });
    //ответ
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) {
            return
        }
        if (XHR.status === 200) {
            document.querySelector('form').reset();
            alert('Вы успешно обновили данные!')
            location.href = 'http://localhost:8080/user/changeInfo';
        } else {
            alert('Ошибка!')
        }
    }
})



