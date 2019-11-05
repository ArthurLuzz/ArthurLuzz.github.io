class Brick {
  constructor(location, width, height, color) {
    this.location = location //localizacao do tijolo
    this.width = width //largura
    this.height = height //altura
    this.color = color //cor
    this.points = 1 //pontos
  }

  display() {
    fill(this.color)//preencher com cor
    rect(this.location.x, this.location.y, this.width, this.height)
  }//retangulo

  isColliding(ball) {
    // colidir com tijolo

    // Caixa delimitadora alinhada ao eixo AABB
    if(ball.location.y - ball.radius <= this.location.y + this.height &&
        ball.location.y + ball.radius >= this.location.y &&
        ball.location.x + ball.radius >= this.location.x &&
        ball.location.x - ball.radius <= this.location.x + this.width) {
          return true
        }
  }
}