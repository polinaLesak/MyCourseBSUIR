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

let newLoginInput = document.querySelector('.input-change');
document.querySelector('.log').innerText = sessionStorage.getItem('login');
document.querySelector('.change-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (validationLogin()) {
        const XHR2 = new XMLHttpRequest();
        let data = JSON.stringify({
            "oldLogin": sessionStorage.getItem('login'),
            "newLogin": newLoginInput.value,
        })
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
                document.location.href = 'http://localhost:8080/adminPanel/changeLogin'
            } else {
                alert('Такой логин уже существует')
            }
        }
    } else {
        alert('Введите новый логин')
        newLoginInput.value = '';
    }
})

document.querySelector('.go-to-btn').addEventListener('click', () => {
    document.location.href = "http://localhost:8080/changePassword"
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