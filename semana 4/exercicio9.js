let exercicio9 = document.getElementById('exercicio9');

function executar(){    
    document.getElementById('resultado').value = apresentacao('Cristian', 32);
}

const apresentacao = (nome, idade) => console.log(`Olá, eu sou ${nome}, e tenho ${idade}, anos.`);




exercicio9.addEventListener('click', executar);