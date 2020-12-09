let btnAdd = document.getElementById('btnAdd');
var txtItem = document.getElementById('txtItem');
let selLista = document.getElementById('selLista');
txtItem.focus();
let listaMercado = {}


function adicionar() {
    let itemMercado = txtItem.value;
    if (itemMercado) {
        criarElementoLista(itemMercado);
        salvarNoLocalStorage(itemMercado);
        txtItem.value = '';
        txtItem.focus();
    } else {
        alert('Por gentileza digite algo no campo de texto.');
    }
}

function criarElementoLista(itemText) {
    let optItem = document.createElement('option');
    optItem.textContent = itemText;
    selLista.appendChild(optItem);
}

function salvarNoLocalStorage(item) {
    listaMercado.push(item);
    localStorage.setItem('listaMercado', JSON.stringify(listaMercado));
}
function verificaTecla(event){
    if (event.key == 'Enter') {
        adicionar();
    }
}

btnAdd.addEventListener('click',adicionar);
txtItem.addEventListener('keyup', verificaTecla);