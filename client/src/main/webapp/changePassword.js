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


let newPasInput = document.querySelector('.input-change');
document.querySelector('.change-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (validationLogin()) {
        const XHR2 = new XMLHttpRequest();
        let data = JSON.stringify({
            "oldLogin": sessionStorage.getItem('login'),
            "oldPassword": document.querySelector('.old').value,
            "newPassword": document.querySelector('.new').value,
        })
        XHR2.open('POST', 'http://localhost:8081/api/admin/updatePassword');
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
                document.location.href = 'http://localhost:8080/changePassword'
            } else {
                alert('Ошибка')
            }
        }
    } else {
        alert('Ошибка')
        newPasInput.value = '';
    }
})

document.querySelector('.go-to-btn').addEventListener('click', () => {
    document.location.href = "http://localhost:8080/adminPanel/changeLogin"
})

function validationLogin() {
    let pasUpVal = newPasInput.value;
    let isPasswordCorrect;
    if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pasUpVal) === false) {
        alert('Password must contains more than 6 symbols: lowercase and uppercase latin letters, numbers')
        isPasswordCorrect = false;
    } else {
        isPasswordCorrect = true;
    }

    if (isPasswordCorrect === true) {
        return true;
    } else {
        return false;
    }
}