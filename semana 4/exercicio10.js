// Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro
// , a função deve somar os dois valores e somente resolver a promise caso o resultado seja par 
// retornando o valor da soma e rejeitando a promise caso ímpar, retornando uma mensagem explicativa

let exercicio10 = document.getElementById('exercicio10');

function executar(){    
    somarValores(100,11)
    .then(resultado => {console.log("Resultado: ", resultado); document.getElementById('resultado').value = resultado;})
    .catch(mensagem => console.log('Catch: ', mensagem));
}
function somarValores(a,b) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let result = a+b;
            if(result % 2 == 0){
                resolve(result);
            } else {
                reject(result);
            }
        }, 5000);
    })
}


exercicio10.addEventListener('click', executar);