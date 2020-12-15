let exercicio14 = document.getElementById('exercicio14');

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(listaContatenado(cids));
    console.log(listaContatenado(cids));
}

const listaContatenado = (cidades) => cidades.map(cidade => `${cidade.cidade} - ${cidade.uf}`);

exercicio14.addEventListener('click', executar);