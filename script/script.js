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

    card.InnerHTML = '
     <h3>${titulo}<h3>
     <p> <strong>Preço:</strong> R$ {preco}</p>;
     <p> <strong>Marca:</strong> R$ {marca}</p>;
     <p> <strong>Modelo:</strong> R$ {modelo}</p>;
     <p> <strong>Câmbio:</strong> R$ {cambio}</p>;
    ';
     lista.appenchild(card);

     let carros ={ 
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
