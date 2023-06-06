var pergunta = prompt(`Você deseja fazer uma lista de compras?
                Responda: 
                1) Sim; ou
                2) Não.`);
const categorias = [[], [], [], [], []];

const riscaItem = [[], [], [], [], []];

const idsModificacao = [`frutas`, `laticinios`, `congelados`, `doces`, `outros`];

let qualAlimento;

if (pergunta == '1' || pergunta == 'sim') {
    perguntaAlimento();
} else {
    alert('Volte quando desejar fazer uma lista de compras.')
}

function perguntaAlimento() {
    let qualAlimento = prompt('Qual alimento você deseja adicionar?');
    let perguntaCategoria = prompt(`Em qual categoria este produto de enquadra? 
                        1) frutas
                        2) laticinios
                        3) congelados
                        4) doces
                        5) outros`);

    switch (perguntaCategoria) {
        case `1`: categorias[0].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
            riscaItem[0].push(qualAlimento);
            console.table(categorias);
            break;

        case `2`: categorias[1].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
            riscaItem[1].push(qualAlimento);
            console.table(categorias);
            break;

        case `3`: categorias[2].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
            riscaItem[2].push(qualAlimento);
            console.table(categorias);
            break;

        case `4`: categorias[3].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
            riscaItem[3].push(qualAlimento);
            console.table(categorias);
            break;

        case `5`: categorias[4].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
            riscaItem[4].push(qualAlimento);
            console.table(categorias)
            break;
    }

    var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

    if (pergunta == '1' || pergunta == 'sim') {
        perguntaAlimento();
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

for (var i = 0; i < riscaItem.length; i++) {
    for (var j = 0; j < riscaItem[i].length; j++) {
        var item = riscaItem[i][j];
        document.getElementById(item).addEventListener('click', adicionaRiscoVermelho(item));
        document.getElementById(item).addEventListener('dblclick', adicionaRiscoVermelho2(item));
    }     
}

function adicionaRiscoVermelho(item) {
    return function() {
        document.getElementById(item).className = 'riscar-item2';
    };
}

function adicionaRiscoVermelho2(item) {
    return function() {
        document.getElementById(item).className = 'riscar-item';
    };
}