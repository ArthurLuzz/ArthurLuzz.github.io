//ator
let vacaY = 366 ;
let vacaX = 100;
let vacaYo = 366 ;
let vacaXo = 380;
let colidiu = false;
let pontosMeu = 0;
let pontosOponente = 0;

function mostraVencedor(){
   if(pontosMeu >= 10){
    fill(255,130,0);//Laranja
    textAlign(CENTER); // alinhamento do texto
    fill(200,30,160);//Texto preto
    noStroke(); // sem bordas
    textSize(30); // tamanho do texto
    text("<-- O esquerdo venceu",300,200); // vai mostrar a frase 
    }else{//copia e cola tudo ali de cima!
    fill(255,130,0);//Laranja
    textAlign(CENTER);
    noStroke();
    fill(200,30,160);//Texto preto
    textSize(30);
    text("O direito venceu -->",300,200);
    } //NAO APAGA O BIGODIN NAO 
}


  function mostraPlacar(){
    if(vacaY < 15){ //marca ponto
       pontosMeu += 1;
      voltaVacaProComeco();
      somPontos.play();
       }
    textSize(25);
    fill(color(200,30,160))
    text(pontosMeu,15,30)         
  }

    function mostraPlacarOponente(){
    if(vacaYo < 15){ //marca ponto
       pontosOponente += 1;
      voltaVacaProComeco();
      somPontos.play();
       }
    textSize(25);
    fill(color(200,30,160))
    text(pontosOponente,470,30)         
  }


function varificaColisao(){
  for(let i=0; i<imagensCarros.length; i++){
    // perguta se colidiu, recebe resposta
 colidiu = collideRectCircle(carrosX[i],carrosY[i], comprimentoCarros[i],altura, vacaX, vacaY, 10 );
    if(colidiu){
    console.log("colidiu");
      voltaVacaProComeco();
      somColidiu.play();
      if(pontosMeu > 0)
      pontosMeu =0; 
      }
    }
  }

function varificaColisaoOponente(){
  for(let i=0; i<imagensCarros.length; i++){
    // perguta se colidiu, recebe resposta
 colidiu = collideRectCircle(carrosX[i],carrosY[i], comprimentoCarros[i],altura, vacaXo, vacaYo, 10 );
    
    if(colidiu){
    console.log("colidiu");
      voltaVacaProComeco();
      somColidiu.play();
      if(pontosOponente > 0)
      pontosOponente =0; 
      }
    }
  }

 function voltaVacaProComeco(){
   vacaY = 366
   vacaYo = 366
  }

function mostraVaca(){
   image(imagemDoAtor,vacaX, vacaY, 30,30);
}

function mostraVacaOponente(){
   image(imagemDoAtorOponente,vacaXo, vacaYo, 30,30);
}

//movimenta o Ator
function movimentaVaca(){
  //pra cima
  if(keyIsDown(87)) {
    //se a seta pra cima for pressionada e o vacay for maior q 5 SOBE
    if(vacaY > 5){
   vacaY -=5
      }
   }
  //pra baixo
    if(keyIsDown(83)) {
       //se a seta pra cima for pressionada e o vacay for menor q 366SOBE
       if(vacaY < 366){ 
    vacaY +=5
    }
  }
}  


  function movimentaVacaOponente(){
  //pra cima
  if(keyIsDown(UP_ARROW)) {
    //se a seta pra cima for pressionada e o vacay for maior q 5 SOBE
    if(vacaYo > 5){
   vacaYo -=5
      }
   }
  //pra baixo
    if(keyIsDown(DOWN_ARROW)) {
       //se a seta pra cima for pressionada e o vacay for menor q 366SOBE
       if(vacaYo < 366){ 
    vacaYo +=5
    }
  }
}
