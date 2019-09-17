//let carroX = 0;
let carrosX = [600,600,600,600,600,600, 680,660];
let carrosY = [40,98,150,210,260,320,150, 260];
let velocidadesCarros = [5,2,6,2,4,1,6,4]
let comprimentoCarros = [70, 50, 70,50,50,70,70,50]
let altura = 40

function mostraCarro(){
 // print("Quantidade de carros: +imagensCarros.length");
  for(let i=0; i< imagensCarros.length; i++){
image(imagensCarros[i],carrosX[i],carrosY[i],comprimentoCarros[i],altura);
  }
}

function movimentaCarro(){
   for(let i=0; i< imagensCarros.length; i++){
  carrosX[i] -= velocidadesCarros[i];
     
    if(carrosX[i]<-50){
    carrosX[i] = 600
      }
   }
}







