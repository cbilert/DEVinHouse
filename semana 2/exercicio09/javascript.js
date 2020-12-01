
function calcular(key) {
    var v1 = Number.parseFloat(document.getElementById('inputVal1').value);
    var v2 = Number.parseFloat(document.getElementById('inputVal2').value);
    var res = 0;
    switch (key) {
        case '+':   res = v1+v2;            
        break;
        case '-':   res = v1-v2;            
        break;
        case '*':   res = v1*v2;            
        break;
        case '/':   res = v1/v2;            
        break;    
        default:    res = 0;
        break;
    }

    document.getElementById('resultado').value = res;
}