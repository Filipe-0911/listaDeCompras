const categorias = document.querySelectorAll('[data-id]');

const localLista = document.querySelectorAll('[data-lista]');

var lista = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
};

categorias.forEach((elemento) => {
    elemento.addEventListener(`dblclick`, (evento) => {
        selecionaLista(evento.target.innerHTML, evento.target.parentNode)
    })
    elemento.addEventListener('click', (evento) => {
        removeInput(evento.target.parentNode);
    })
})

function selecionaLista(itemClicado, divPrincipal) {
    switch (itemClicado) {
        case `Lista de Frutas`: adicionaInput(divPrincipal);
            break;
        case `Lista de Laticinios`: adicionaInput(divPrincipal);
            break;
        case `Lista de Congelados`: adicionaInput(divPrincipal);
            break;
        case `Lista de Guloseimas`: adicionaInput(divPrincipal);
            break;
        case `Lista de Outros itens`: adicionaInput(divPrincipal);
            break;
    }

}

function adicionaInput(item) {
    const listaInput = item.querySelector(`[data-input]`);

    const novoInput = document.createElement(`input`);
    novoInput.classList.add(`input-text`);
    novoInput.type = `text`;

    const novoBotao = document.createElement(`input`);
    novoBotao.classList.add(`botao`);
    novoBotao.dataset.botao = `botao`;
    novoBotao.type = `submit`;

    const botaoGeraLista = document.createElement(`button`);
    botaoGeraLista.classList.add(`botao-gera-lista`);
    botaoGeraLista.dataset.gerar = `botao-gerar`;
    botaoGeraLista.innerText = `Gerar Lista`;


    listaInput.appendChild(novoInput);
    listaInput.appendChild(novoBotao);
    listaInput.appendChild(botaoGeraLista);

    const selecionaBotaoEnviar = document.querySelectorAll(`[data-botao]`);
    const selecionaBotaoGerar = document.querySelectorAll(`[data-gerar]`);

    adicionaItemLista(selecionaBotaoEnviar, item.parentNode.className, item.parentNode, selecionaBotaoGerar);

}

function adicionaItemLista(botao, atributoDoObjeto, div, botaoGerar) {

    botao.forEach((elemento) => {
        elemento.addEventListener('click', () => {
            var itemInserido = div.querySelector(`.input-text`).value;

            if (itemInserido) {

                const li = document.createElement(`li`);
                li.classList.add(`riscar-item`);

                const img = document.createElement(`img`)
                img.dataset.img = `remover`;
                img.src = `img/remover.png`

                li.innerHTML = itemInserido;
                li.dataset.item = itemInserido;
                li.appendChild(img);

                //console.log(li);

                lista[atributoDoObjeto].push(li);
                div.querySelector(`.input-text`).value = "";


                insereNoHtml(lista[atributoDoObjeto], div, botaoGerar);

            } else {
                alert('Para enviar um item para a lista, insira-o no espaço em branco e clique em enviar.')
            }
        })
    })
}

function insereNoHtml(listaDeProdutos, div, botaoGerar) {

    botaoGerar.forEach((elemento) => {
        elemento.addEventListener(`click`, () => {

            removeItem(div);

            var inserirNoHtml = div.querySelector(`[data-lista]`);

            for (i = 0; i < listaDeProdutos.length; i++) {
                inserirNoHtml.appendChild(listaDeProdutos[i]);

            }
        })
    })
}

function removeInput(div) {
    var teste = div.querySelector('[data-input]');
    teste.innerHTML = "";
}

function removeItem(div) {

    var imagem = div.querySelectorAll(`[data-img]`);

    imagem.forEach((elemento) => {
        elemento.addEventListener(`click`, () => {                
            var imgClicada = elemento.parentNode;
            imgClicada.remove();     

            //var valorDeletaLista = imgClicada.innerText;

            //console.log(valorDeletaLista);

            // var buscaValorDataItem = imgClicada.parentNode;
            // var teste = buscaValorDataItem.querySelector(`[data-item=${valorDeletaLista}]`);

            
            // const index = lista.frutas.find(frutas => frutas === teste);
            // console.log(index)
            
            //for(i = 0; i < lista.length; i++) {     }
            //console.log(buscaValorDataItem)
            

        })
    });
}