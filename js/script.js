alert(`Seja bem vindo ao sistema Lista de Compras! 
Para utilizar, dê dois cliques nos titulos de cada seção, adicione os elementos no campo de texto e clique em enviar.`)
alert(`Para remover o campo de inserção de itens, clique uma vez nos títulos.`);
const categorias = document.querySelectorAll('[data-id]');

const localLista = document.querySelectorAll('[data-lista]');

var lista = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
};

categorias.forEach((elemento)=>{
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

function adicionaInput (item) {
    const listaInput = item.querySelector(`[data-input]`);

    const novoInput = document.createElement(`input`);
    novoInput.classList.add(`input-text`);
    novoInput.type = `text`;

    const novoBotao = document.createElement(`input`);
    novoBotao.classList.add(`botao`);
    novoBotao.dataset.botao = `botao`;
    novoBotao.type = `submit`;
    
    listaInput.appendChild(novoInput);
    listaInput.appendChild(novoBotao);

    const selecionaBotao = document.querySelectorAll(`[data-botao]`);    

    adicionaItemLista(selecionaBotao, item.parentNode.className, item.parentNode);

}

function adicionaItemLista(botao, atributoDoObjeto, div) {
    
    botao.forEach((elemento) => {
        elemento.addEventListener('click', () => {
            var itemInserido = div.querySelector(`.input-text`).value;
            if(itemInserido) {
                lista[atributoDoObjeto].push(itemInserido);
                console.table(lista);
                div.querySelector(`.input-text`).value = "";
                insereNoHtml(lista[atributoDoObjeto], div);
            }
            
        })
    })
}

function insereNoHtml (preenchido, div) {
    if(preenchido) {
        const li = document.createElement('li');
        li.classList.add('riscar-item');
        li.innerHTML = preenchido;

        var ul = div.querySelector('[data-lista]');

        ul.appendChild(li);
    }
}

function removeInput (div) {
    var teste = div.querySelector('[data-input]');
    teste.innerHTML = "";
}