let exercicio3 = document.getElementById('exercicio3');
const pessoas = [
    {
      nome: 'Vampiro',
      idade: 900,
      telefone: 48987465432,
      profissao: 'Governante'
    },
    {
      nome: 'Lobisomem',
      idade: 80,
      telefone: 48987465432,
      profissao: 'Governante'
    },
    {
      nome: 'Ogro',
      idade: 4,
      telefone: 48987465432,
      profissao: 'Programador'
    }
  ]

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(buscaMaiorDeIdade(pessoas));
    console.log(buscaMaiorDeIdade(pessoas));
}

const buscaMaiorDeIdade = pess => pess.filter(pessoa => pessoa.idade >= 18);




exercicio3.addEventListener('click', executar);