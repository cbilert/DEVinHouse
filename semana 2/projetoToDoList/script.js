var btnAdd      = document.getElementById('btnAdd');
var txtActivity = document.getElementById('txtActivity');
var ulLista     = document.getElementById('ulLista');

var chkItem1     = document.getElementById('chkItem_1');//teste
var txtItem1     = document.getElementById('txtItem_1');//teste

var chkItem = [];
var txtItem = [];
var itens   = [];

function adicionar() {
    var item = txtActivity.value;
    if (item) {
        criarElementoLI(item);
    } else {
        alert('Por gentileza digite algo no campo de texto.');
    }
}

function criarElementoLI(itemValue) {
    var idItem = itens == null ? 0 : itens.length;
    console.log(`ID ITEM: ${idItem}`);
    var elementoLI = document.createElement('li');
    elementoLI.classList.add('list-group-item');
    elementoLI.appendChild(criarContainer(itemValue, idItem))
    ulLista.appendChild(elementoLI);
}

function criarContainer(value, idItem) {
    var divContainer1 = criarDIV('input-group mb-3');
    var divContainer2 = criarDIV('input-group-prepend');
    var span1 = criaSpan('input-group-text');
    var checkBox = criarInput('checkbox','',`chkItem_${idItem}`);
    var text = criarInput('text', 'form-control form-control-lg', `txtItem_${idItem}`, value);
    var divContainer3 = criarDIV('input-group-append');
    var span2 = criaSpan('input-group-text');
    var btnRemove = criarButton('button','btn btn-warning btn-sm', `btnRemove_${idItem}`,'x');

    checkBox.addEventListener('click', function(){
        checkItem(checkBox,text);
    },false);

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
        input.value = value;
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

function checkItem(chkItem, txtItem){
    console.log('chkItem: ',chkItem);
    console.log('txtItem: ',txtItem);

    if (chkItem.checked) {
        txtItem.classList.add('tachado');
    } else {
        txtItem.classList.remove('tachado');
    }
}

function checkItem1(teste){//teste
    console.log(teste);
    if (chkItem1.checked) {
        txtItem1.classList.add('tachado');
    } else {
        txtItem1.classList.remove('tachado');
    }
}

btnAdd.addEventListener('click', adicionar);

chkItem1.addEventListener('click', function(){
    checkItem1('asdf');
} ,false);//teste
