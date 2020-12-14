let exercicio7 = document.getElementById('exercicio7');

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(buscaPrimeiroMaiorDeIdade(pessoas));
    console.log(buscaPrimeiroMaiorDeIdade(pessoas));
}

const buscaPrimeiroMaiorDeIdade = pess => pess.find(pessoa => pessoa.idade >= 18);

exercicio7.addEventListener('click', executar);