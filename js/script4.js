const titulo = document.querySelector('.titulo-texto');
titulo.addEventListener('click', () => {
    alert(`Para adicionar itens à sua Lista, clique nos títulos.`)
})

var listas = [[], [], [], [], []];

var titulos = [`.titulo-frutas`, `.titulo-laticinios`, `.titulo-congelados`, `.titulo-guloseimas`, `.titulo-outros`]


for (i = 0; i < titulos.length; i++) {
    var clicouTitulo = document.querySelector(titulos[i]);
    function teste(i){
        
    }
    clicouTitulo.addEventListener('click', () => {
        var produto = prompt(`Qual produto você deseja adicionar?`);
        listas[0].push(produto)

    })


}