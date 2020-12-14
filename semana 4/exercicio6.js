let exercicio6 = document.getElementById('exercicio6');

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(buscaMenorDeIdade(pessoas));
    console.log(buscaMenorDeIdade(pessoas));
}

const buscaMenorDeIdade = pess => pess.filter(pessoa => pessoa.idade < 18);

exercicio6.addEventListener('click', executar);