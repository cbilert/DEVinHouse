var btnAdd      = document.getElementById('btnAdd');
var txtActivity = document.getElementById('txtActivity');
var ulLista     = document.getElementById('ulLista');
var itens   = [];
loadLista();

function adicionar() {
    var idItem = itens == null ? 0 : itens.length;
    var item = {};
    item.id = idItem;
    item.value = txtActivity.value;
    item.checked = false;
    addItem(item);
    if (item.value) {
        criarElementoLI(item);
    } else {
        alert('Por gentileza digite algo no campo de texto.');
        txtActivity.focus();
    }
}

function criarElementoLI(item) {
    var elementoLI = document.createElement('li');
    elementoLI.classList.add('list-group-item');
    elementoLI.appendChild(criarContainer(item))
    ulLista.appendChild(elementoLI);
}

function criarContainer(item) {
    var divContainer1 = criarDIV('input-group mb-3');
    var divContainer2 = criarDIV('input-group-prepend');
    var span1 = criaSpan('input-group-text');
    var checkBox = criarInput('checkbox','',`chkItem_${item.id}`,item.checked);
    var text = criarInput('text', 'form-control form-control-lg', `txtItem_${item.id}`, item.value);
    var divContainer3 = criarDIV('input-group-append');
    var span2 = criaSpan('input-group-text');
    var btnRemove = criarButton('button','btn btn-secondary btn-sm', `btnRemove_${item.id}`,'x');

    checkBox.addEventListener('click', function(){
        onCheckItem(checkBox,text);
    }, false);

    btnRemove.addEventListener('click', function() {
        onRemoveItem(text);
    }, false);

    checkItem(checkBox,text);

    text.setAttribute('disabled',true);

    span2.appendChild(btnRemove);
    divContainer3.appendChild(span2);
    span1.appendChild(checkBox);
    divContainer2.appendChild(span1);

    divContainer1.appendChild(divContainer2);
    divContainer1.appendChild(text);
    divContainer1.appendChild(divContainer3)

    return divContainer1;
}

function criaSpan(classe) {
    var span = document.createElement('span');
    if(classe) {
        span.className = classe;
    }
    return span;
}

function criarInput(type, classe, id, value) {
    var input = document.createElement('input');
    input.type = type;
    input.id = id;
    if(classe) {
        input.className = classe;
    }
    if (value) {
        switch (type) {
            case 'checkbox':
                input.setAttribute('checked',value);
                break;
            default:
                input.value = value;
                break;
        }
    }
    return input;
}

function criarButton(type, classe, id, txt) {
    var button = document.createElement('button');
    button.type = type;
    if(classe) {
        button.className = classe;
    }
    button.id = id;
    button.textContent = txt;
    return button;
}

function criarDIV(classe) {
    var div = document.createElement('div');
    div.className = classe ;
    return div;
}

function checkItem(chkItem, txtItem) {
    if (chkItem.checked) {
        txtItem.classList.add('tachado');
    } else {
        txtItem.classList.remove('tachado');
    }
}


function onCheckItem(chkItem, txtItem) {
    var item = buscaItem(txtItem);
    item.checked = chkItem.checked;

    if (chkItem.checked) {
        txtItem.classList.add('tachado');
    } else {
        txtItem.classList.remove('tachado');
    }

    itens.splice(item.id, 1, item);
    salvarLS(itens);
}

function addItem(item) {
    itens.push(item);
    salvarLS(itens);
    txtActivity.value = '';
}

function buscaItem(txtItem) {
    return itens.find(element => element.id == txtItem.id.split('txtItem_')[1]);
}

function onRemoveItem(txtItem){
    let item  = buscaItem(txtItem);
    itens.splice(itens.indexOf(item), 1);
    salvarLS(itens);
    ulLista.innerHTML ='';
    loadLista();
}

function salvarLS(itens) {
    localStorage.setItem('listaTarefas', JSON.stringify(itens));
}

function loadLista() {
    var lista = JSON.parse(localStorage.getItem('listaTarefas'));
    if (lista){
        itens = lista;
        for(var i = 0; i < lista.length; i++) {
            criarElementoLI(lista[i]);
        }
    }
}

function seeKey(event) {
    if (event.key == 'Enter') {
        adicionar();
    }
}

btnAdd.addEventListener('click', adicionar);
txtActivity.addEventListener('keyup', seeKey);