let exercicio3 = document.getElementById('exercicio3');
const pessoas = [
    {
      nome: 'Vampiro',
      idade: 900,
      telefone: 48987465432,
      profissao: 'Governante'
    },
    {
      tipo: 'Lobisomem',
      idade: 80,
      telefone: 48987465432,
      profissao: 'Governante'
    },
    {
      tipo: 'Ogro',
      idade: 4,
      telefone: 48987465432,
      profissao: 'Governante'
    }
  ]

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(buscaMaiorDeIdade(pessoas));
    console.log(buscaMaiorDeIdade(pessoas));
}

const buscaMaiorDeIdade = pess => pessoas.filter(pessoa => pessoa.idade >= 18);




exercicio3.addEventListener('click', executar);