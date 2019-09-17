function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

//bote tudo de funcao ai dentro
function draw() {
  background(imagemDaEstrada);
  
 if(!(pontosMeu >= 10 || pontosOponente >=10)){
    jogo();
 
 }else{
    mostraVencedor();
    }
}

function jogo(){

  mostraVaca();  
  mostraCarro();
  movimentaCarro();
  movimentaVaca();
  varificaColisao();
  mostraPlacar();
 // mostraVencedor();
 
  mostraPlacarOponente();
  varificaColisaoOponente();
  mostraVacaOponente();
  movimentaVacaOponente();
}

// fim do Draw






