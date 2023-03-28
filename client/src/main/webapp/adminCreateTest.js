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

document.querySelector('.add-btn').addEventListener('click', (e) => {
    e.preventDefault();
    let topic = document.querySelector('input[name="razdel"]:checked').value
    console.log(document.querySelector('input[name="razdel"]:checked').value)
    let test = document.querySelector('.test').value;
    sessionStorage.setItem('test', test);
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "topic": topic,
        "test": test,
    })
    console.log(data)
    XHR.open('POST', 'http://localhost:8081/api/admin/add/test', true);
    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'))
    XHR.send(data);
    XHR.addEventListener('error', function (event) {
        alert("OOPS! SOMETHING WENT WRONG!");
    });
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) {
            return
        }
        if (XHR.status === 200) {
            alert('Вопрос успешно добавлен!')
            location.href = "http://localhost:8080/adminPanel/createQuestions"
        }
    }
})

