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

const XHR = new XMLHttpRequest();
XHR.open('GET', `http://localhost:8081/api/result/${sessionStorage.getItem('loginchel')}`);
XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'))
XHR.send();
XHR.onreadystatechange = function () {
    if (XHR.readyState !== 4) {
        return
    }
    if (XHR.status === 200) {
        let topics = JSON.parse(XHR.responseText);
        console.log(topics)
        let count = 1;
        for (let i = 0; i < topics.length; i++) {
            let container = document.createElement('tr');
            container.classList.add('h')
            container.innerHTML = `
            <th>${count}</th>
            <th class="topic">${topics[i].topic}</th>
            <th class="test">${topics[i].test}</th>
            <th class="res">${topics[i].result}</th>
            <th><button class="active">Дать отзыв</button></th>
            `
            document.querySelector('table').append(container);
            ++count;
        }
        document.querySelector('.red').innerText = topics[0].login;
    }
}
let elem;
document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className == 'active') {
        document.querySelector('.give-review').style.display = 'block';
        elem = e.target;
    }
})


document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className == 'send') {

        const XHR2 = new XMLHttpRequest();
        let data = JSON.stringify({
            "login": sessionStorage.getItem('loginchel'),
            "test": elem.closest('tr').querySelector('.test').innerText,
            "rating": elem.closest('tr').querySelector('.res').innerText,
            "review": document.querySelector('textarea').value,
        })
        XHR2.open('POST', 'http://localhost:8081/api/admin/review');
        XHR2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
        XHR2.send(data);
        XHR2.onreadystatechange = function () {
            if (XHR2.readyState !== 4) {
                return
            }
            if (XHR2.status === 200) {
                alert('Вы успешно отправили отзыв!')
                document.querySelector('.give-review').style.display = 'none';
            }
        }
    }
})