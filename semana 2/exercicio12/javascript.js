window.onload = clearInterval(timer);;

var timer = window.setInterval(function(){
        var date = new Date();
        document.getElementById('hora').innerHTML = date.toLocaleTimeString();
    },1000);