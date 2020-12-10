calculaEstacao();

function calculaEstacao() {
    let dataAtual = new Date();
        dataAtual = dataAtual.toLocaleString().split(',')[0];
    let dia = dataAtual.split('/')[0];
    let mes = dataAtual.split('/')[1];
    var estacao = "";
    var caminhoImagem = "";
    console.log(mes);
    switch(mes) {
        case '1': 
                estacao = "verão";
            break;
        case '2': 
                estacao = "verão";
            break;
        case '3': 
                if (dia > 20) {
                    estacao = "outono";
                } else {
                    estacao = "verão";
                }
            break;
        case '4': 
                estacao = "outono";
            break;
        case '5':
                estacao = "outono";
            break;
        case '6':
                if (dia > 21) {
                    estacao = "inverno";
                } else {
                    estacao = "outono";
                }
            break;
        case '7':
                estacao = "inverno";
            break;
        case '8':
                estacao = "inverno";
            break;
        case '9':
                if (dia > 22) {
                    estacao = "primavera";
                } else {
                    estacao = "inverno";
                }
            break;
        case '10':
                estacao = "verão";
            break;
        case '11':
                estacao = "verão";
            break;
        case '12':
                if (dia > 20) {
                    estacao = "verão";
                } else {
                    estacao = "primavera";
                }
        break;
    }

    switch(estacao) {
        case 'primavera': caminhoImagem = 'img/primavera.png';
            break;
        case 'verão': caminhoImagem = 'img/verao.png';
            break;
        case 'outono': caminhoImagem = 'img/outono.png';
            break;
        case 'inverno': caminhoImagem = 'img/inverno.png';
            break;
    }

    console.log(estacao);
    console.log(caminhoImagem);

    document.getElementById('estacaoImg').setAttribute("src", caminhoImagem);
    document.getElementById('estacao').innerText = estacao;
}