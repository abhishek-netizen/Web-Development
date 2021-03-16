document.getElementById('button1').addEventListener('click', loadUser)

function loadUser() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'user.json', true)
    xhr.onload = function () {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText)
            const output = `
            <ul class="collection">
        <li class="collection-item avatar">
            <img src="${user.avatar}" alt="" class="circle">
            <span class="title">${user.first_name} ${user.last_name}</span>
            <p>email: ${user.email}
               
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <ul>
            `;
            document.getElementById('user').innerHTML = output
        }
    }
    xhr.send()
}