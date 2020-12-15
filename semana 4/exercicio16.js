let exercicio16 = document.getElementById('exercicio16');

function executar(){    
    document.getElementById('resultado').value = JSON.stringify(desmontar(cids));
    console.log(desmontar(cids));
}

const desmontar = (cidades) => cidades.map(cidade => {
    let cid = cidade.cidade;
    let uf = cidade.uf;
    console.log(`${cid} - ${uf}`);
    });

exercicio16.addEventListener('click', executar);