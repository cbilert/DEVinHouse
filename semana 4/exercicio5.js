let exercicio5 = document.getElementById('exercicio5');

function executar(){    
    document.getElementById('resultado').value = listaNomePessoas(pessoas);//constante pessoas esta no exercicio3.js
    //console.log(listaNomePessoas(pessoas));
}

const listaNomePessoas = pessoas => pessoas.map(pessoa => {return pessoa.nome});

exercicio5.addEventListener('click', executar);