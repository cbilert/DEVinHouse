// Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo.
let exercicio11 = document.getElementById('exercicio11');

function executar(){    
    document.getElementById('resultado').value = calculaArea(10, 30);
}

const calculaArea = (base, altura) => base*altura ;

exercicio11.addEventListener('click', executar);