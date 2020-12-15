// Crie uma função que receba 3 parâmetros (bairro, cidade, estado) e 
// imprima os dados em um formato de endereço, utilizando Template String.

let exercicio12 = document.getElementById('exercicio12');

function executar(){    
    document.getElementById('resultado').value = imprimeEndereco('Real Parque', 'São José', 'SC');
    console.log(imprimeEndereco('Real Parque', 'São José', 'SC'));
}

const imprimeEndereco = (bairro, cidade, estado) => `Endereco: ${bairro}, ${cidade} - ${estado}` ;

exercicio12.addEventListener('click', executar);