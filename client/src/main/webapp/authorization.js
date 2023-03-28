let exit = document.querySelector('.exit');
exit.addEventListener('click', () => {
    location.href = 'http://localhost:8080/';
})

document.querySelector('.reg').addEventListener('click', () => {
    location.href = 'http://localhost:8080/registration';
})

let loginInput = document.querySelector('.input-login');
let passwordInput = document.querySelector('.input-password');
document.querySelector('.send').addEventListener('click', (e) => {
    e.preventDefault();
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "login": loginInput.value,
        "password": passwordInput.value,
    })
    XHR.open('POST', 'http://localhost:8081/api/auth/login', true);
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
            sessionStorage.setItem("login", responseText.login)
            sessionStorage.setItem("token", responseText.token)
            if (responseText.status == "ACTIVE") {
                switch (responseText.role) {
                    case "ADMIN":
                        location.href = "http://localhost:8080/adminPanel/users";
                        break;
                    case "USER":
                        location.href = "http://localhost:8080/";
                        break;
                }
            } else {
                alert('Ваш аккаунт заблокирован');
            }
        } else {
            alert('Логин или пароль введены неверно!');
        }
    }
})