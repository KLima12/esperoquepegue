function mudarPosicao() {
    const buttonNao = document.getElementById('nao');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
}


/*function mostrarImagem(){
       //Obtém a referencia do elemento da imagem
       var imagemPrincipal = document.getElementById("imagemPrincipal");

       /*var musica = document.getElementById("musica");*/
       //Define o caminho da imagem que deseja exibir
    /*   var caminhoImagem = "https://vivariomarrecife.com.br/wp-content/uploads/2021/09/feriado-7-de-setembro.jpg";
   
       /*var caminhoMusica = "..//pasta/Bruno Mars - Nothin' On You (Tradução).mp4";*/
       //Atualiza o atributo src da imagem
  /*     imagemPrincipal.src = caminhoImagem;
        
       // Atualiza o atributo src do elemento de áudio
      /*musica.src = caminhoMusica;*/

      // Reproduz a música
     /* musica.play();*/

