const categorias = [[], [], [], [], []];
const riscaItem = [[], [], [], [], []];
const idsModificacao = [`frutas`, `laticinios`, `congelados`, `doces`, `outros`];

const imagemRemover = `<img id="imagemRemover" src="img/remover.png" alt="remove">`;

let qualAlimento;

document.querySelector(`.titulo-texto`).addEventListener(`click`, () => {
  alert(`Para adicionar produtos em sua lista, clique no título de cada seção.`);
});

const marcarProdutos = (index) => {
  let qualAlimento = prompt('Qual produto você deseja adicionar?');

  if (qualAlimento) {
    categorias[index].push(`<li class="riscar-item"><p id="${qualAlimento}">${qualAlimento}</p>${imagemRemover}</li>`);
    riscaItem[index].push(qualAlimento);
    console.table(categorias);
    document.getElementById(idsModificacao[index]).innerHTML = categorias[index].join(' ');
  }

  var pergunta = prompt(`Deseja adicionar mais algum produto?
            Responda 
            1) Sim;
            2) Não.`);

  if (pergunta == '1' || pergunta == 'sim') {
    marcarProdutos(index);
  } else {
    alert('Sua lista está pronta.');

    for (var i = 0; i < categorias.length; i++) {
      var conteudo = categorias[i].join(' ');
      document.getElementById(idsModificacao[i]).innerHTML = conteudo;
    }

    riscarItem();
  }
};

document.querySelector(`.titulo-frutas`).addEventListener(`click`, () => {
  marcarProdutos(0);
});

document.querySelector(`.titulo-laticinios`).addEventListener(`click`, () => {
  marcarProdutos(1);
});

document.querySelector(`.titulo-congelados`).addEventListener(`click`, () => {
  marcarProdutos(2);
});

document.querySelector(`.titulo-guloseimas`).addEventListener(`click`, () => {
  marcarProdutos(3);
});

document.querySelector(`.titulo-outros`).addEventListener(`click`, () => {
  marcarProdutos(4);
});

const riscarItem = () => {
  for (var i = 0; i < riscaItem.length; i++) {
    for (var j = 0; j < riscaItem[i].length; j++) {
      var item = riscaItem[i][j];
      document.getElementById(item).addEventListener('click', adicionaRiscoVermelho(item));
      document.getElementById(item).addEventListener('dblclick', removeRiscoVermelho(item));
    }
  }
};

function adicionaRiscoVermelho(item) {
  return function () {
    document.getElementById(item).className = 'riscar-item2';
  };
}

function removeRiscoVermelho(item) {
  return function () {
    document.getElementById(item).className = 'riscar-item';
  };
}

const botaoRemove = document.getElementById('imagemRemover');

const remover = () => {
  botaoRemove.addEventListener(`click`, () => {
    alert(`clicou`);
  });
};
