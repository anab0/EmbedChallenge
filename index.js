let data = require('./data.json');
const myData = JSON.parse(data);

function myFunction() {
    document.getElementById("app").innerHTML = myData;
}