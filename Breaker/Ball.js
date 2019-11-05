class Ball {
  constructor(paddle) {
    this.radius = 15 //raio
    this.size = this.radius * 2 //tamanho
    this.location = createVector(paddle.location.x + (paddle.width / 2), (paddle.location.y - this.radius - 5)) // localizacao
    this.color = color(147, 112, 219) //cor
    this.velocity = createVector(5, -5)// velocidade
    this.paddle = paddle
  }

  bouncePaddle() {
    // dentro da largura da raquete
    if (this.location.x + this.radius >= this.paddle.location.x &&
        this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {          
          if (this.location.y + this.radius > this.paddle.location.y) {
            this.reverse('y');
            this.location.y = this.paddle.location.y - this.radius - 1;
          }
        }
  }

  bounceEdge() {
    if (this.location.x + this.radius >= width) { // Verifique a borda direita
      this.reverse('x')
    } else if(this.location.x - this.radius <= 0) { // Verifique a borda esquerda
      this.reverse('x')
    } else if(this.location.y - this.radius <= 0) { // Verifique o topo

      this.reverse('y')
    }
  }

  display() {
    fill(this.color)
    ellipse(this.location.x, this.location.y, this.size, this.size)
  }

  update() {
    this.location.add(this.velocity)
  }

  reverse(coord) { // VAI VOLTAR
    this.velocity[coord] *= -1
  }

  belowBottom() {
    return this.location.y - this.radius > height //retorna a localizacao Y - o raio maior que a altura
  }
}