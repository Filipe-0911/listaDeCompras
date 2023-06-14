const categorias = document.querySelectorAll('[data-id]');

var lista = {
    frutas: [],
    laticinios: [],
    congelados: [],
    guloseimas: [],
    outros: []
};

categorias.forEach((elemento)=>{
    elemento.addEventListener(`click`, (evento)=>{
        selecionaLista(evento.target.innerHTML, evento.target.parentNode)
        
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
    novoBotao.type = `submit`;
    

    listaInput.appendChild(novoInput);
    listaInput.appendChild(novoBotao);


    const selecionaBotao = document.querySelector(`.botao`);    
    var itemInserido = document.querySelector(`.input-text`).value;

    adicionaItemLista(itemInserido, selecionaBotao, item);

}

function adicionaItemLista(itemDaLista, botao, e){
    botao.addEventListener(`submit`, () => {
        console.log(itemDaLista);
        //console.log(e);
        
    })
}

// falta adicionar item no objeto, puxar do objeto para o html, inserir no localStorage e adicionar possibilidade de remoção e marcar em vermelho