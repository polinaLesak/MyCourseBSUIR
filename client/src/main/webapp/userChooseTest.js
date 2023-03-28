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
document.addEventListener('click', (e) => {

    if (e.target.classList == 'go-to-test-btn') {
        let topic = e.target.closest('.box').querySelector('.box-text').innerText;
        sessionStorage.setItem('mytopic', topic)
        const XHR = new XMLHttpRequest();
        let data = JSON.stringify({
            "topic": topic,
        })
        XHR.open('POST', 'http://localhost:8081/api/user/test', true);
        XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'))
        XHR.send(data);
        XHR.addEventListener('error', function (event) {
            alert("OOPS! SOMETHING WENT WRONG!");
        });
        //ответ
        XHR.onreadystatechange = function () {
            if (XHR.readyState !== 4) {
                return
            }
            if (XHR.status === 200) {
                document.querySelector('.wind').style.display = 'block'
                let responseText = JSON.parse(XHR.responseText)
                for (let i = 0; i < responseText.length; i++) {
                    let container = document.createElement('div');
                    container.classList.add('but');
                    container.innerText = responseText[i].test
                    document.querySelector('.wind').append(container)
                }
            }
        }
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList == 'but') {
        sessionStorage.setItem('mytest', e.target.innerText);
        location.href = 'http://localhost:8080/user/passTest';
    }
})
