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

const XHR = new XMLHttpRequest();
let data = JSON.stringify({
    "login": sessionStorage.getItem('login'),
})
XHR.open('POST', 'http://localhost:8081/api/user/rating', true);
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
        let responseText = JSON.parse(XHR.responseText)
        document.querySelector('.prime').innerText = responseText;
    }
}
document.querySelector('.red').innerText = sessionStorage.getItem('login')
const XHR2 = new XMLHttpRequest();
XHR2.open('GET', `http://localhost:8081/api/result/${sessionStorage.getItem('login')}`);
XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
XHR2.send();
XHR2.onreadystatechange = function () {
    if (XHR2.readyState !== 4) {
        return
    }
    if (XHR2.status === 200) {
        let count = 1;
        let text = JSON.parse(XHR2.responseText)
        for (let i = 0; i < text.length; i++) {
            let cont = document.createElement('tr');
            cont.innerHTML = `
            <th>${count}</th>
            <th class="topicname">${text[i].topic}</th>
            <th class="testname">${text[i].test}</th>
            <th class="res">${text[i].result}</th>
            <th><button class="active">Смотреть отзыв</button></th>
            `
            document.querySelector('table').append(cont)
            ++count;
        }
    }
}

document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList == 'active') {
        const XHR = new XMLHttpRequest();
        let topic = e.target.closest('tr').querySelector('.topicname').innerText
        let test = e.target.closest('tr').querySelector('.testname').innerText
        let result = e.target.closest('tr').querySelector('.res').innerText
        let data = JSON.stringify({
            "login": sessionStorage.getItem('login'),
            "topic": topic,
            "test": test,
            "result": result,
        })
        XHR.open('POST', 'http://localhost:8081/api/user/review', true);
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
                let responseText = JSON.parse(XHR.responseText)
                document.querySelector('.review').style.display = 'flex';
                document.querySelector('.review-text').innerText = responseText;
            } else if (XHR.status === 404) {
                document.querySelector('.review').style.display = 'flex';
                document.querySelector('.review-text').innerText = 'У вас пока нет отзыва на этот тест'
            }
        }
    }
})

document.querySelector('.ok-button').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.review').style.display = 'none';
})