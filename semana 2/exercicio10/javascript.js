function verificar() {
    
    var v = Number.parseFloat(document.getElementById('valor').value);
    var parImpar = v % 2 == 0;
    
    document.getElementById('resultado').value = parImpar == true ? 'É Par!' : 'É Impar!';
}