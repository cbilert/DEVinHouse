let btnAdd = document.getElementById('btnAdd');
let txtItem = document.getElementById('txtItem');
let selLista = document.getElementById('selLista');
txtItem.focus();
let listaMercado = [ ];
loadLista();

function loadLista() {
    let lista = JSON.parse(localStorage.getItem('listaMercado'));
    lista.forEach(itemText => {
        criarElementoLista(itemText);
    });
}


function adicionar() {
    let itemMercado = txtItem.value;
    if (itemMercado) {
        criarElementoLista(itemMercado);
        salvarNoLocalStorage(itemMercado);        
    } else {
        alert('Por gentileza digite algo no campo de texto.');
    }
    txtItem.value = '';
    txtItem.focus();
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