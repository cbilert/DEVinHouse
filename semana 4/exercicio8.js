let exercicio8 = document.getElementById('exercicio8');

function executar(){    
    document.getElementById('resultado').value = multiplicaArray(100,50,200,120);
}

const multiplicaArray = (...numeros) => numeros.reduce((acumulador,corrente) => acumulador*corrente,1);




exercicio8.addEventListener('click', executar);