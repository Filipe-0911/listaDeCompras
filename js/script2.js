const categorias = [[], [], [], [], []];

const riscaItem = [[], [], [], [], []];

const idsModificacao = [`frutas`, `laticinios`, `congelados`, `doces`, `outros`];

let qualAlimento;

marcarProdutos();



document.querySelector(`.titulo-texto`).addEventListener(`click`, () => {
    alert(`Para adicionar produtos em sua lista, clique no titulo de cada seção.`);
});


function marcarProdutos() {

    document.querySelector(`.titulo-frutas`).addEventListener(`click`, () => {
        let qualAlimento = prompt('Qual produto você deseja adicionar?');

        categorias[0].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
        riscaItem[0].push(qualAlimento);
        console.table(categorias);

        var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

        if (pergunta == '1' || pergunta == 'sim') {
            marcarProdutos();
        } else {
            alert('Sua lista está pronta.');

            for (var i = 0; i < categorias.length; i++) {
                var conteudo = "";
                for (var j = 0; j < categorias[i].length; j++) {
                    conteudo += categorias[i][j] + " ";
                }
                document.getElementById(idsModificacao[i]).innerHTML = conteudo;
            }

        }
    }
    );
}







for (var i = 0; i < riscaItem.length; i++) {
    for (var j = 0; j < riscaItem[i].length; j++) {
        var item = riscaItem[i][j];
        document.getElementById(item).addEventListener('click', adicionaRiscoVermelho(item));
        document.getElementById(item).addEventListener('dblclick', adicionaRiscoVermelho2(item));
    }
}

function adicionaRiscoVermelho(item) {
    return function () {
        document.getElementById(item).className = 'riscar-item2';
    };
}

function adicionaRiscoVermelho2(item) {
    return function () {
        document.getElementById(item).className = 'riscar-item';
    };
}