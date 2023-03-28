let exit = document.querySelector('.exit');
let log = document.querySelector('#logUp')
let pas = document.querySelector('#pasUp')
let select = document.querySelector('select');

exit.addEventListener('click', () => {
    location.href = 'http://localhost:8080/authorization';
})

let inputs = document.querySelectorAll('input');


document.querySelector('.send').addEventListener('click', (e) => {

    e.preventDefault();
    if (validationSignUp()) {

        const XHR = new XMLHttpRequest();
        let data = JSON.stringify({
            "login": log.value,
            "password": pas.value,
            "name": inputs[2].value,
            "surname": inputs[3].value,
            "patronymic": inputs[4].value,
            "experience": inputs[5].value,
            "position": select.value,
        })
        XHR.open('POST', 'http://localhost:8081/api/registration', true);
        XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
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
                alert('Вы успешно зарегистрировались!')
            } else {
                alert('Такой логин уже существует!')
            }
        }
    }

})

//validation
function validationSignUp() {
    //login
    let isLoginCorrect;
    let logUpVal = log.value;
    if (/^[a-zA-Z1-9]+$/.test(logUpVal) === false) {
        log.classList.toggle('redInp')
        alert('Login must not contains special symbols, cirrilic letters');
        isLoginCorrect = false;
    } else if (logUpVal.length < 4 || logUpVal.length > 20) {
        log.classList.toggle('redInp')
        alert('Login must contains between 4 and 20 symbols');
        isLoginCorrect = false;
    } else if (parseInt(logUpVal.substr(0, 1))) {
        log.classList.toggle('redInp')
        alert('Login must start with a letter');
        isLoginCorrect = false;
    } else {
        isLoginCorrect = true;
    }
    //password
    let pasUpVal = pas.value;
    let isPasswordCorrect;
    if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pasUpVal) === false) {
        alert('Password must contains more than 6 symbols: lowercase and uppercase latin letters, numbers')
        isPasswordCorrect = false;
    } else {
        isPasswordCorrect = true;
    }

    if (isLoginCorrect === true && isPasswordCorrect === true) {
        return true;
    } else {
        return false;
    }
}
