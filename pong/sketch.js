//variaveis do placar
let pontosMeu = 0; //variaveis dos meus pontos
let pontosOponente = 0 ; //variaveis dos pontos do oponente


//variaveis da bolinha
let xBolinha = 300;  //variaveis do X da bola
let yBolinha = 200;//variaveis do Y da bola
let diametro = 22;  //tamanho da bola
let raio = diametro/2; // o raio é igual o diametro dividido por 2
let corBolinha = [255,0,210]; // cor da bola
let velocidadeX = 7;  //variavel da velicidade
let velocidadeY= 7;    //variavel da velicidade

//variaveis raquete  //tamanho das raquetes
let alturaRaquete= 100;  
let larguraRaquete = 20;

//variaveis minha raquete
let xMinhaRaquete = 580;  // onde a raquete vai ficar
let yMinhaRaquete = 150;
let corMinhaRaquete = [0,0,0]; //cor da raquete


//variaveis outra raquete
let xOponenteRaquete = 0;  // onde a raquete vai ficar
let yOponenteRaquete = 150;
let corOponenteRaquete = [255,255,255];//cor da raquete


let ponto; // algum jogador faça um ponto
let raquetada; // algum jogador rabata a bolinha

function preload(){
  raquetada = loadSound('raquetada.mp3'); // se a bolinha chegar en tal cordenada vai tocar uma musica
  ponto = loadSound("ponto.mp3");// quando a bolinha chegar em tal cordenada vai tocar uma musica
  }

//config inicial
function setup() {
  createCanvas(600, 400);
  largura = width; // a largura é igual a width, para facilitar o entendimento)
  altura = height;// a altura é igual a height, para facilitar o entendimento)
  print("largura: "+largura + " altura: "+ altura);
}

//desenha - looping infinito while(1)
function draw() { // é usado para abrigar as animaçoes do jogo, chamando-as
  background(255, 179, 217);//cor de fundo
  //se os pontosMeu nao foreem maiores ou iguais a 10 ou os pontos do o ponente nao forem maiores ou iguais a 10 entao JOGA
  if(!(pontosMeu >= 10 || pontosOponente >=10)){
    jogo();
  }else{
    mostraVencedor();
  }
}

function mostraVencedor(){
  if(pontosMeu >= 10){
    fill(255,130,0);//Laranja
    rect(300,0,300,400);//Metade direita da tela
    textAlign(CENTER); // alinhamento do texto
    fill(0);//Texto preto
    noStroke(); // sem bordas
    textSize(30); // tamanho do texto
    text("Preto é campeão",300,200); // vai mostrar a frase 
    }else{//copia e cola tudo ali de cima!
    fill(255,130,0);//Laranja
    rect(0,0,300,400);//Metade esquerda da tela
    textAlign(CENTER);
    noStroke();
    fill(0);//Texto preto
    textSize(30);
    text("Branco é campeão",300,200);
    } //NAO APAGA O BIGODIN NAO 
  }
  


function jogo(){ //  a funçao jogo ta chamando todas essas Function
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  verificaColisao1();
  mostraRaquete();
  mostraOponenteRaquete();
  movimentaMinhaRaquete();
  movimentaOponenteRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaquete1();
  pontosPartida();
  marcarPonto();
 }

function pontosPartida (){
    
  textSize(32); // tamanho do texto
  strokeWeight(4);
  stroke(200,100,173) //borda
  
  
  fill(050,0,0) // cor
  rect(540,20,50,36,10) // regangulo
  rect(40,20,50,36,10)   // regangulo
  
  fill(255) // cor
  text( pontosMeu, 550, 50);// texto 
  text( pontosOponente, 50, 50);// texto 
    }
  

//meu
function marcarPonto(){
  if (xBolinha < 15) { // se a cordenada da bolinha for menor que 15 entao eu ganho um ponto e toca musica
  pontosMeu += +1;
   ponto.play();
      }
  
  
  //oponente
  if (xBolinha > 585) {  // se a cordenada da bolinha for maior que 585 entao o oponente ganha um ponto e toca musica
  pontosOponente += +1;
  ponto.play();
  }
}

//minha
function verificaColisaoRaquete(){ //SE o a cordenada X da bolinha  mais o raio da bolinha for maior que a cordenada X da minha raquete; se a cordenada Y da bolinha menos o raio da bolinha for menor que a cordenada Y da minha raquete mais a altura da minha raquete ; se a cordenada Y da bolinha mais o raio da bolinha for maior que o Y da minha raquete a bolinha vai voltar..
  if(xBolinha + raio > xMinhaRaquete && yBolinha - raio <                   yMinhaRaquete + alturaRaquete && yBolinha + raio > yMinhaRaquete){
    if(!(xBolinha < 300&& velocidadeX > 0 ||
        xBolinha > 300 && velocidadeX < 0)){
        velocidadeX *= -1; 
      raquetada.play();
     }
  }  
}
//oponenteee
function verificaColisaoRaquete1(){ //é a mesma coisa que ocorre na outra raquete, porem a bolinha volta para o outro lado
  if(xBolinha - raio < xOponenteRaquete + larguraRaquete && yBolinha + raio < yOponenteRaquete + alturaRaquete && 
yBolinha - raio  >yOponenteRaquete){
    
     if(!(xBolinha < 300&& velocidadeX > 0 ||
        xBolinha > 300 && velocicadeX < 0)){
        velocidadeX *= -1; 
          raquetada.play();
     } 
  }
    
}

function movimentaMinhaRaquete(){ // se eu apertar a seta para cime a raquete vai subir, se ela chegar na cordenata 0 a raquete vai parar
  //teto
  if(keyIsDown(UP_ARROW)){ //seta pra cima
    if(yMinhaRaquete < 0  ){
        yMinhaRaquete = 0;  
    }
       else{  
     yMinhaRaquete -=7; //velocidade da raquete
    }}
      
  //chao
  if(keyIsDown(DOWN_ARROW)){//seta pra baixo   // se eu apertar a seta para baixo a raquete vai descer, se ela chegar na cordenata 300 a raquete vai parar
     if(yMinhaRaquete > 300){
        yMinhaRaquete = 300;
     }
       else{
     yMinhaRaquete += 7;    //velocidade da raquete
    }
        
  }
}

//Oponente
function movimentaOponenteRaquete() { // é a mesma coisa que na movimentaçao da minha raquete, porem quando apertar o W a raquete do oponente sobre e para na cordenada 0 e se aperta do S ela desce e para do 300..
  if(keyIsDown(87)){ 
  if(yOponenteRaquete < 0){
        yOponenteRaquete = 0; 
    } 
    else{
   yOponenteRaquete -=7;   //velocidade da raquete    
    }  
  }
  
  if(keyIsDown(83)){
     if(yOponenteRaquete > 300 ){
        yOponenteRaquete = 300;
     }
       else{
     yOponenteRaquete += 7;    //velocidade da raquete
    } 
  }
}

  
  //chao
function mostraRaquete(){
  fill(corMinhaRaquete); // cor da raquete
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete); // mostra a minha raquete,com o tamanho especificado na variavel e nas cordenadas especificadas 
}

  function mostraOponenteRaquete(){ // mesma coisa da raquete de cima 
  fill(corOponenteRaquete); //cor
  rect(xOponenteRaquete, yOponenteRaquete, larguraRaquete, alturaRaquete); //retangulo chamando a largura da raquete, altura e as cordenadas X e Y 
  }
    
function verificaColisao(){ // se a cordenada X da bolinha mais o raio da bolinha for maior que a largura da raquete OU o X da bolinha - o raio for menor qe 0 a bolinha volta
 //colisao horizontal com bordas laterais
      if(xBolinha + raio > largura || xBolinha - raio < 0){
            //velocidadeX = velocidadeX * -1
       velocidadeX *= -1; 
      }
  // se a cordenada Y da bolinha mais o raio da bolinha for maior que a largura da raquete OU o Y da bolinha - o raio for menor qe 0 a bolinha volta
 //colisao horizontal com bordas laterais
      if(yBolinha + raio > altura || yBolinha - raio < 0){
            //velocidadeX = velocidadeX * -1
       velocidadeY *= -1; 
      }
}

function verificaColisao1(){
 //colisao horizontal com bordas laterais]
  // Se a cordenada X da bolinha mais o raio for maior que a largura ou o X da bolinha menos o raio for menor que 0 a bolinha volta
      if(xBolinha + raio > largura || xBolinha - raio < 0){
            //velocidadeX = velocidadeX * -1
       velocidadeX *= 1; 
      }
  // Se a cordenada Y da bolinha mais o raio for maior que a largura ou o Y da bolinha menos o raio for menor que 0 a bolinha volta
      if(yBolinha + raio > altura || yBolinha - raio < 0){
            //velocidadeX = velocidadeX * -1
       velocidadeY *= 1; 
      }
}

function movimentaBolinha(){
  
  if(frameCount > 300){ //se o frame for maior que 300 o X e o Y da bolinha vao se mexer
  
         //velocidade horizontal
  xBolinha += velocidadeX;
        //velocidade vertical
  yBolinha = yBolinha + velocidadeY;
    }
}

function mostraBolinha(){ 
  noStroke(); //sem bordas
  fill(corBolinha); //cor
  circle(xBolinha,yBolinha,diametro); //tamanho
}


  