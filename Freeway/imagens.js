//definicao das variaveis do game
let imagemDaEstrada;
let imagemDoAtor;
let imagensCarros = [0,1,2,3,4,5,6,7]; //Array de img
let imagemDoAtorOponente;
//sons
let somTrilha;
let somPontos;
let somColidiu;

//pré-recarregar as imagens
function preload(){
  //pré-recarregar dos sons

  somTrilha = loadSound("sons/trilha.mp3");
   somPontos = loadSound("sons/pontos.wav");
   somColidiu = loadSound("sons/colidiu.mp3");
  
  //pre-carregamento das imagens nas variaveis
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoAtorOponente = loadImage("imagens/ator-1.png");
  imagensCarros[0] = loadImage("imagens/carro-1.png");
  imagensCarros[1] = loadImage("imagens/carro-2.png"); 
  imagensCarros[2] = loadImage("imagens/carro-3.png");
  imagensCarros[3] = loadImage("imagens/carro-1.png");
  imagensCarros[4] = loadImage("imagens/carro-2.png"); 
  imagensCarros[5] = loadImage("imagens/carro-3.png");
  imagensCarros[6] = loadImage("imagens/carro-3.png");
  imagensCarros[7] = loadImage("imagens/carro-2.png"); 
}
