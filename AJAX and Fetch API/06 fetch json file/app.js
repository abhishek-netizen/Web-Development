document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
function getText() {

    fetch('test.txt').then(function (res) {
        return (res.text())
    }).then(function (data) {
        document.getElementById('output').innerText = data
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

function getJSON() {

    fetch('todos.json').then(function (res) {
        return (res.json())
    }).then(function (todos) {
        let output = '';
        todos.forEach(todo => {
            output += `<li>${todo.title}</li>`
        });
        document.getElementById('output').innerHTML = output
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}