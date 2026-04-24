const { createElement } = require("react");

function salvarCarro(event){ 
    //impedir de recarga da pagina
    event.preventDefalt();
    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked ');

    let cambio = cambioSelecionado ? cambioSelecionado.id: "Não selecionado";

     lista.appenchild(card);

     let carro ={ 
        titulo,
        preco,
        marca,
        modelo,       
        cambio  
  };
   let carros = JSON.parse(localStorage.getItem("carros")) || [];
   [];
   carros.push(carro);
   localStorage.setItem("carros", JSON.stringfy(carros));
   
   adicionarNaTela(carro);

   document.querySelector("form").reset();


}
