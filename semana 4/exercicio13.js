let exercicio13 = document.getElementById('exercicio13');

let cids = JSON.parse('[{"cidade":"Cidade1", "uf":"SC"},{"cidade":"Cidade2", "uf":"PR"},{"cidade":"Cidade3", "uf":"SC"},{"cidade":"Cidade4", "uf":"RS"}]');

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(buscaPorUF(cids,'SC'));
    console.log(buscaPorUF(cids,'SC'));
}

const buscaPorUF = (cidades,uf) => cidades.filter(cidade => cidade.uf === uf);

exercicio13.addEventListener('click', executar);