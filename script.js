function mostrarImagem(){
     //Obtém a referencia do elemento da imagem
     var imagemPrincipal = document.getElementById("imagemPrincipal");
     var caminhoImagem = "https://vivariomarrecife.com.br/wp-content/uploads/2021/09/feriado-7-de-setembro.jpg";
     imagemPrincipal.src = caminhoImagem;
     imagemPrincipal.style.display = "block";
     // Exibe uma mensagem no h1
    var mensagem = "Shopping Rio Mar, Sexta-Feira, ás 14 horas. \n\n\n(Quer uma surpresa ? Clique na imagem do Shopping)";
    document.querySelector("h1").innerText = mensagem;
    document.getElementById("btnSim").style.display = "block";
    
      // Cria um elemento h2 para exibir a segunda mensagem
      var novaMensagem = document.createElement("h2");
      novaMensagem.innerText = mensagem2;
      novaMensagem.id = "mensagemSecundaria";
      document.body.appendChild(novaMensagem);
  
      // Adiciona uma quebra de linha para separar as mensagens
      document.body.appendChild(document.createElement("br"));
       
      var caminhoMusica = "https://www.youtube.com/watch?v=Ja5aE7rl2p8";
      //musica.src = caminhoMusica;
      var musica = new Audio(caminhoMusica);
      

      // Reproduz a música
      musica.play();
}
function redirecionar(){
    window.location.href= "..//pasta/index.html";
}


function playMusica() {
  var musica = document.getElementById("musica");
  musica.play();
}