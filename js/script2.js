const categorias = [[], [], [], [], []];

const riscaItem = [[], [], [], [], []];

const idsModificacao = [`frutas`, `laticinios`, `congelados`, `doces`, `outros`];

let qualAlimento;

document.querySelector(`.titulo-texto`).addEventListener(`click`, () => {
    alert(`Para adicionar produtos em sua lista, clique no titulo de cada seção.`);
});

document.querySelector(`.titulo-frutas`).addEventListener(`click`, function marcarProdutos() {
    let qualAlimento = prompt('Qual produto você deseja adicionar?');

    if (qualAlimento) {
        categorias[0].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
        riscaItem[0].push(qualAlimento);
        console.table(categorias);
        document.getElementById(`frutas`).innerHTML = categorias[0];
    }

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
        riscarItem();
    }
});

document.querySelector(`.titulo-laticinios`).addEventListener(`click`, function marcarProdutos1() {
    let qualAlimento = prompt('Qual produto você deseja adicionar?');

    if (qualAlimento) {
        categorias[1].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
        riscaItem[1].push(qualAlimento);
        console.table(categorias);
        document.getElementById(`frutas`).innerHTML = categorias[1];
    }

    var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

    if (pergunta == '1' || pergunta == 'sim') {
        marcarProdutos1();
    } else {
        alert('Sua lista está pronta.');

        for (var i = 0; i < categorias.length; i++) {
            var conteudo = "";
            for (var j = 0; j < categorias[i].length; j++) {
                conteudo += categorias[i][j] + " ";
            }
            document.getElementById(idsModificacao[i]).innerHTML = conteudo;
        }
        riscarItem();
    }
});


document.querySelector(`.titulo-congelados`).addEventListener(`click`, function marcarProdutos2() {
    let qualAlimento = prompt('Qual produto você deseja adicionar?');

    if (qualAlimento) {
        categorias[2].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
        riscaItem[2].push(qualAlimento);
        console.table(categorias);
        document.getElementById(`frutas`).innerHTML = categorias[2];
    }

    var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

    if (pergunta == '1' || pergunta == 'sim') {
        marcarProdutos2();
    } else {
        alert('Sua lista está pronta.');

        for (var i = 0; i < categorias.length; i++) {
            var conteudo = "";
            for (var j = 0; j < categorias[i].length; j++) {
                conteudo += categorias[i][j] + " ";
            }
            document.getElementById(idsModificacao[i]).innerHTML = conteudo;
        }
        riscarItem();
    }
});
document.querySelector(`.titulo-guloseimas`).addEventListener(`click`, function marcarProdutos3() {
    let qualAlimento = prompt('Qual produto você deseja adicionar?');

    if (qualAlimento) {
        categorias[3].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
        riscaItem[3].push(qualAlimento);
        console.table(categorias);
        document.getElementById(`frutas`).innerHTML = categorias[3];
    }

    var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

    if (pergunta == '1' || pergunta == 'sim') {
        marcarProdutos3();
    } else {
        alert('Sua lista está pronta.');

        for (var i = 0; i < categorias.length; i++) {
            var conteudo = "";
            for (var j = 0; j < categorias[i].length; j++) {
                conteudo += categorias[i][j] + " ";
            }
            document.getElementById(idsModificacao[i]).innerHTML = conteudo;
        }
        riscarItem();
    }
});
document.querySelector(`.titulo-outros`).addEventListener(`click`, function marcarProdutos4() {
    let qualAlimento = prompt('Qual produto você deseja adicionar?');

    if (qualAlimento) {
        categorias[4].push(`<li id="${qualAlimento}" class="riscar-item">${qualAlimento}</li>`);
        riscaItem[4].push(qualAlimento);
        console.table(categorias);
        document.getElementById(`frutas`).innerHTML = categorias[4];
    }

    var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

    if (pergunta == '1' || pergunta == 'sim') {
        marcarProdutos4();
    } else {
        alert('Sua lista está pronta.');

        for (var i = 0; i < categorias.length; i++) {
            var conteudo = "";
            for (var j = 0; j < categorias[i].length; j++) {
                conteudo += categorias[i][j] + " ";
            }
            document.getElementById(idsModificacao[i]).innerHTML = conteudo;
            
        }
        riscarItem();
    }
});

 const riscarItem = () => {
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
}



