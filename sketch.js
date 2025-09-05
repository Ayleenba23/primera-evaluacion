// sketch.js
// Ejemplo basado en la refer de p5.js (https://p5js.org/es/reference/#/p5/sphere)
// Se modificó con colores llamativos, emojis y animación divertida, Ayleen Bahamondez 🦴🐶✨

let angle = 0;
let colors = [];

function setup() {
  createCanvas(600, 400, WEBGL);
  angleMode(DEGREES);

  // paleta de colores con alto contraste
  colors = [
    color(255, 100, 150), // rosado fuerte
    color(0, 200, 255),   // celeste
    color(255, 255, 0),   // amarillo
    color(0, 255, 100),   // verde fosforescente
    color(255, 140, 0)    // naranjo
  ];
}

function draw() {
  background(30);

  // Texto con emojis
  push();
  rotateY(angle);
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text("🐾 Hola, soy Ayleen Bahamondez 🎉🐶", 0, -150);
  pop();

  // Rotación
  rotateY(angle);

  // Esferas de colores
  for (let i = 0; i < 10; i++) {
    push();
    let c = colors[i % colors.length];
    fill(c);
    noStroke();

    let x = sin(angle + i * 36) * 150;
    let y = cos(angle + i * 36) * 150;
    translate(x, y, 0);

    sphere(30);
    pop();
  }

  // Aumenta el ángulo para animación
  angle += 1;
}
