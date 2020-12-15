let exercicio17 = document.getElementById('exercicio17');

function executar(){    
    imprimirRanking('Teste01','Teste02','Teste03','Teste04','Teste05','Teste06','Teste07','Teste08','Teste09','Teste10');
}

function imprimirRanking(primeiro,segundo, terceiro,...outros) {
    console.log('Primeiro: ', primeiro);
    console.log('Segundo: ', segundo);
    console.log('Terceiro: ', terceiro);
    console.log('Outros: ', outros);
}

exercicio17.addEventListener('click', executar);