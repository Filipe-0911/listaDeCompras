var pergunta = prompt(`Você deseja fazer uma lista de compras?
                Responda: 
                1) Sim; ou
                2) Não.`);
const categorias = [[], [], [], [], []];

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
        case `1`: categorias[0].push(`<li id="riscar-item" class="riscar-item">${qualAlimento}</li>`);
            console.table(categorias)
            break;

        case `2`: categorias[1].push(`<li id="riscar-item" class="riscar-item">${qualAlimento}</li>`);
            console.table(categorias)
            break;

        case `3`: categorias[2].push(`<li id="riscar-item" class="riscar-item">${qualAlimento}</li>`);
            console.table(categorias)
            break;

        case `4`: categorias[3].push(`<li id="riscar-item" class="riscar-item">${qualAlimento}</li>`);
            console.table(categorias)
            break;

        case `5`: categorias[4].push(`<li id="riscar-item" class="riscar-item">${qualAlimento}</li>`);
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

const tabela = document.getElementsByClassName('riscar-item');

for (i = 0; i < tabela.length; i++) {
    console.log(tabela[i]);
    tabela[i].addEventListener('click',() => {
        tabela[i].innerHTML = 'oi';
    })
}

//`<li id="${qualAlimento}" class="riscar-item2">${qualAlimento}</li>`


