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

    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    
     lista.appenchild(card);

     let carro ={ 
        titulo,
        preco,
        marca,
        modelo,       
        cambio  
  };
   let carros = JSON.parse(localStorage.getItem("carros")) ||
   [];
   carros.push(carro);
   localStorage.setItem("carros", JSON.stringfy(carros));
   

}
