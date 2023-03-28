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
//инфа о юзере
document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.className == 'log') {
        location.href = "http://localhost:8080/adminPanel/aboutUser"
        sessionStorage.setItem('loginchel', e.target.innerText);
    }
})

//заполнение страницы
const XHR = new XMLHttpRequest();
XHR.open('GET', 'http://localhost:8081/api/admin/users');
XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'));
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
            if (topics[i].login != sessionStorage.getItem('login')) {
                if (topics[i].status == 'BLOCKED') {
                    let tr = document.createElement('tr')
                    tr.innerHTML = `
                <th scope="row">${count}</th>
                <th class="log">${topics[i].login}</th>
                <th>${topics[i].name}</th>
                     <th>${topics[i].surname}</th>
                          <th>${topics[i].patronymic}</th>
                               <th>${topics[i].experience}</th>
                                    <th>${topics[i].position}</th>
                                         <th>${topics[i].rating}</th>
                <td><button class="blocked block-btn">Разблокировать</button></td>
                `
                    document.querySelector('tbody').append(tr)
                } else if (topics[i].status == 'ACTIVE') {
                    let tr = document.createElement('tr')
                    tr.innerHTML = `
                  <th scope="row">${count}</th>
                <th class="log">${topics[i].login}</th>
                <th>${topics[i].name}</th>
                     <th>${topics[i].surname}</th>
                          <th>${topics[i].patronymic}</th>
                               <th>${topics[i].experience}</th>
                                    <th>${topics[i].position}</th>
                                         <th>${topics[i].rating}</th>
                <td><button class="active block-btn">Заблокировать</button></td>
                `
                    document.querySelector('table').append(tr)
                }
                ++count;
            }
        }
    }
}

// //БЛОКИРОВКА
document.querySelector('table').addEventListener('click', (e) => {
    if (e.target.classList.contains('block-btn')) {
        const XHR2 = new XMLHttpRequest();
        if (e.target.innerText == 'Заблокировать') {
            let data = JSON.stringify({
                "login": e.target.closest('tr').querySelector('.log').innerText,
                "status": 'BLOCKED',
            })
            XHR2.open('POST', 'http://localhost:8081/api/admin/users');
            XHR2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
            XHR2.send(data);
            XHR2.onreadystatechange = function () {
                if (XHR2.readyState !== 4) {
                    return
                }
                if (XHR2.status === 200) {
                    e.target.classList.add('blocked');
                    e.target.classList.remove('active')
                    e.target.innerHTML = 'Разблокировать'
                }
            }
        } else {
            let data = JSON.stringify({
                "login": e.target.closest('tr').querySelector('.log').innerText,
                "status": 'ACTIVE',
            })
            XHR2.open('POST', 'http://localhost:8081/api/admin/users');
            XHR2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
            XHR2.send(data);
            XHR2.onreadystatechange = function () {
                if (XHR2.readyState !== 4) {
                    return
                }
                if (XHR2.status === 200) {
                    e.target.classList.add('active');
                    e.target.classList.remove('blocked')
                    e.target.innerHTML = 'Заблокировать'

                }
            }
        }
    }
})
