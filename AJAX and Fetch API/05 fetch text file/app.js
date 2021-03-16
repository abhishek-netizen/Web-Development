document.getElementById('button1').addEventListener('click', getText)

function getText() {

    fetch('test.txt').then(function (res) {
        return (res.text())
    }).then(function (data) {
        document.getElementById('output').innerText = data
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}