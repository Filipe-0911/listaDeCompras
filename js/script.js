var pergunta = prompt(`Você deseja fazer uma lista de compras?
                Responda: 
                1) Sim; ou
                2) Não.`);
const categorias = [`frutas`,
    `laticinios`,
    `congelados`,
    `doces`,
    `outros`];

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];


if (pergunta == '1' || pergunta == 'sim') {
    perguntaAlimento();
} else {
    alert('Volte quando desejar fazer uma lista de compras.')
}

function perguntaAlimento() {
    let qualAlimento = prompt('Qual alimento você deseja adicionar?');
    let perguntaCategoria = prompt(`Em qual categoria este produto de enquadra? ${categorias}`);

    switch (perguntaCategoria) {
        case categorias[0]: frutas.push(qualAlimento);
            console.log(frutas)
            break;
        case categorias[1]: laticinios.push(qualAlimento);
            console.log(laticinios);
            break;
        case categorias[2]: congelados.push(qualAlimento);
            console.log(congelados);
            break;
        case categorias[3]: doces.push(qualAlimento);
            console.log(doces);
            break;
        case categorias[4]: outros.push(qualAlimento);
            console.log(outros);
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

        // for(i = 0; i < categorias.length; i++) {
        //document.getElementById(categorias[i]).innerHTML = `<li>${categorias[i]}</li>`}

        document.getElementById('frutas').innerHTML = frutas;
        document.getElementById('laticinios').innerHTML = laticinios;
        document.getElementById('congelados').innerHTML = congelados;
        document.getElementById('doces').innerHTML = doces;
        document.getElementById('outros').innerHTML = outros;
    }
}