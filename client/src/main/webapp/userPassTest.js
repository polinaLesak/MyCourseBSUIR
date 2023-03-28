let mainPage = document.querySelector('.mainPage');
let aboutPage = document.querySelector('.aboutPage');
let profilePage = document.querySelector('.profilePage');
let testPage = document.querySelector('.testPage');
let newsPage = document.querySelector('.newsPage');
let answers;

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
    "topic": sessionStorage.getItem('mytopic'),
    "test": sessionStorage.getItem('mytest'),
})
console.log(data)

XHR.open('POST', 'http://localhost:8081/api/user/test/question', true);
XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'))
XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
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
        answers = responseText;
        let count = 1;
        for (let i = 0; i < responseText.length; i++) {
            let container = document.createElement('div');
            let name = `nam${i}e`
            let value1 = `${responseText[i].answerAndCorrectDtos[0].correctly}`
            let value2 = `${responseText[i].answerAndCorrectDtos[1].correctly}`
            let value3 = `${responseText[i].answerAndCorrectDtos[2].correctly}`
            let value4 = `${responseText[i].answerAndCorrectDtos[3].correctly}`
            container.classList.add('test-box');
            container.innerHTML = `
        <div class="question">
                <span>${count}</span>
                <div>${responseText[i].question}</div>
            </div>
            <div class="answer">
                <label> <input value="${value1}"  name=${name} class="ot" type="radio"  checked /> ${responseText[i].answerAndCorrectDtos[0].answer}     </label>
                <label> <input value="${value2}" name=${name} class="ot" type="radio"  /> ${responseText[i].answerAndCorrectDtos[1].answer} </label>
                <label> <input value="${value3}"  name=${name} class="ot" type="radio"/> ${responseText[i].answerAndCorrectDtos[2].answer}</label>
                 <label> <input value="${value4}"  name=${name}  class="ot" type="radio"name=${i} /> ${responseText[i].answerAndCorrectDtos[3].answer} </label>
            </div>
        `
            ++count;
            document.querySelector('form').append(container)
        }
    }
}
let sum = 0;
document.querySelector('.send').addEventListener('click', (e) => {
    e.preventDefault()
    let listAnswers = document.querySelectorAll('.ot');
    console.log(listAnswers)
    for (let i = 0; i < listAnswers.length; i++) {
        console.log(listAnswers[i].checked);
        console.log(listAnswers[i].value == 'true')
        if (listAnswers[i].checked && listAnswers[i].value == 'true') {
            ++sum
        }
    }
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "login": sessionStorage.getItem('login'),
        "test": sessionStorage.getItem('mytest'),
        "correctAnswer": sum,
        "generalAmountAnswer": listAnswers.length / 4,
    })
    console.log(data)
    XHR.open('POST', 'http://localhost:8081/api/user/test/result', true);
    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'));
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
            alert(`Ваш результат: ${responseText}%`)
            location.href = 'http://localhost:8080/user/results';
        }
    }
})
