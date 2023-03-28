document.querySelector('.exit-box').addEventListener('click', () => {
    sessionStorage.clear();
    location.href = "http://localhost:8080/"
})

document.querySelector('.goUsers').addEventListener('click', () => {
    location.href = "http://localhost:8080/adminPanel/users"
})

document.querySelector('.goTests').addEventListener('click', () => {
    location.href = "http://localhost:8080/adminPanel/createTest"
})

document.querySelector('.goPersonal').addEventListener('click', () => {
    location.href = "http://localhost:8080/adminPanel/changeLogin"
})

document.querySelector('.add-answerr').addEventListener('click', (e) => {
    e.preventDefault();
    let test = sessionStorage.getItem('test');
    let question = document.querySelector('.quest').value;
    let answer1 = document.querySelector('.answer1').value;
    let answer2 = document.querySelector('.answer2').value;
    let answer3 = document.querySelector('.answer3').value;
    let answer4 = document.querySelector('.answer4').value;
    let inp = document.querySelectorAll('.rad');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].checked) {
            inp[i].value = 1
        } else {
            inp[i].value = 0
        }
    }
    console.log(answer1)
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "test": test,
        "question": question,
        "answer1": document.querySelector('.answer1').value,
        "correct1": inp[0].value,
        "answer2": answer2,
        "correct2": inp[1].value,
        "answer3": answer3,
        "correct3": inp[2].value,
        "answer4": answer4,
        "correct4": inp[3].value,
    })
    console.log(data)
    XHR.open('POST', 'http://localhost:8081/api/admin/add/question', true);
    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'));
    XHR.send(data);
    XHR.addEventListener('error', function (event) {
        alert("OOPS! SOMETHING WENT WRONG!");
    });
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) {
            return
        }
        if (XHR.status === 200) {
            alert('Тест успешно добавлен!')
            location.href = "http://localhost:8080/adminPanel/createQuestions"
        }
    }
})