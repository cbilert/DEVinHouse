window.onload = function getTime() {
    var date = new Date();
    console.log(date.toLocaleTimeString());
    document.getElementById('hora').innerHTML = date.toLocaleTimeString();
}