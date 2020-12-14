let btn = document.getElementById('exercicio1');

function executar(){    
    document.getElementById('resultado').value = mediaArray(100,50,200,120);
}

const mediaArray = (...numeros) => numeros.reduce((acumulador,corrente) => acumulador+corrente,0)/numeros.length;




btn.addEventListener('click', executar);