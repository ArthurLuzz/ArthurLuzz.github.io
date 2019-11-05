let playerScore = 0 //placar
let paddle //raquete
let ball //bola
let bricks //tijolo
let gameState //comeco do jogo

function setup() {
  createCanvas(800, 600) //tamanho do jogo
  
  let colors = createColors() //variavel das cores
  gameState = 'playing' //comeco do jogo
  paddle = new Paddle() //nova raquete
  ball = new Ball(paddle) //nova bola

  bricks = createBricks(colors) //tijolos loridos
}

function createColors() { //criacao de cores
  const colors = []
  colors.push(color(265, 165, 0))
  colors.push(color(135, 206, 250))
  colors.push(color(147, 112, 219))
  for (let i = 0; i < 10; i++) {
    colors.push(color(random(0, 255), random(0, 255), random(0, 255)))
  }
  return colors
}

function createBricks(colors) { //const é uma variável cujo o valor é fixo, não pode ser alterada ou retribuída.
  const bricks = [] //constante do tijolo
  const rows = 10 //const da linha
  const bricksPerRow = 10 //tijolos por linha
  const brickWidth = width / bricksPerRow //largura do tijolo
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, colors[floor(random(0, colors.length))])
      bricks.push(brick) 
    }
  }
  return bricks 
}

function draw() {//desenho
  
  if(frameCount < 1000){
    telaInicial();
  }else{
    jogo();
  }
  
}

function jogo(){ //o jogo so vai comecar depois de 1000frame

    if(gameState === 'playing') {
    background(0)//cor de fundo preta

    ball.bounceEdge()
    ball.bouncePaddle()
    
    ball.update()

    if (keyIsDown(LEFT_ARROW)) {// se apertar a seta da esquerda se move pra esquerda
      paddle.move('left')
    } else if (keyIsDown(RIGHT_ARROW)) {// se apertar a seta da direita se move pra direita  
      paddle.move('right')
    }

    for (let i = bricks.length - 1; i >= 0; i--) {
      const brick = bricks[i]
      if (brick.isColliding(ball)) {
        ball.reverse('y')
        bricks.splice(i, 1)
        playerScore += brick.points
      } else {
        brick.display()
      }
    }

    paddle.display()
    ball.display()

    textSize(32)//tamanho do texto
    fill(255)// preencher
    text(`Score:${playerScore}`, width - 150, 50)//texto

    if (ball.belowBottom()) {
      gameState = 'Lose' //se a bola passar de tal cordenada perde
    }

    if (bricks.length === 0) {
      gameState = 'Win' //se nao tiver mais quadrados vence
    }
  } else {
    textSize(100)//tamanho do texto
    gameState === 'Lose' ? fill(255, 0, 255) : fill(255)
    text(`You ${gameState}!!!`, width / 2 - 220, height / 2)
  }
  
}