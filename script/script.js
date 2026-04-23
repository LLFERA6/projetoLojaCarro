const { createElement } = require("react");

function salvarCarro(event){
    //impedir de recarga da pagina
    event.preventDefalt();
    let titulo = document.getElementById('title');
    let preco = document.getElementById('preco');
    let marca = document.getElementById('marca');
    let modelo = document.getElementById('modelo');

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked ');

    let cambio = cambioSelecionado ? cambioSelecionado.id: "Não selecionado"

    let lista = document.getElementById('listaCarros');

    let card = createElement('div');
}
