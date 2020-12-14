let exercicio4 = document.getElementById('exercicio4');

function executar(){    
    document.getElementById('resultado').value = buscaProgramador(pessoas);//constante pessoas esta no exercicio3.js
    console.log(buscaProgramador(pessoas))
}

const buscaProgramador = pessoas => pessoas.filter(pessoa => pessoa.profissao === 'Programador');




exercicio4.addEventListener('click', executar);