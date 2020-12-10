let txtInicial = document.getElementById('txtInicial');
let txtRaiz = document.getElementById('txtRaiz');
const btnCalcularPA = document.getElementById('btnCalcularPA');
const btnCalcularPG = document.getElementById('btnCalcularPG');
const calculoPA = document.getElementById('calculoPA');
const calculoPG = document.getElementById('calculoPG');

function calcularPA() {
    let inicial = parseInt(txtInicial.value);
    let raiz = parseInt(txtRaiz.value);
    let pa = inicial;
    let paList = [];
    paList.push(inicial);
    for(let i = 0; i < 10; i++ ) {
        pa = (pa+raiz);
        paList.push(pa);
    }
    calculoPA.innerText = paList;
}

function calcularPG() {
    let inicial = parseInt(txtInicial.value);
    let raiz = parseInt(txtRaiz.value);
    let pg = inicial;
    let pgList = [];
    pgList.push(inicial);
    for(let i = 0; i < 10; i++ ) {
        pg = (pg*raiz);
        pgList.push(pg);
    }
    calculoPG.innerText = pgList;
}

btnCalcularPA.addEventListener('click', calcularPA);
btnCalcularPG.addEventListener('click', calcularPG);
