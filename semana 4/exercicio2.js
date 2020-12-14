let exercicio2 = document.getElementById('exercicio2');

function executar(){    
    document.getElementById('resultado').value = quadradosArray(100,50,200,120);
}

const quadradosArray = (...numeros) => numeros.map(numero => numero**2);




exercicio2.addEventListener('click', executar);