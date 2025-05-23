let x;// criando a variavel x
let y;// criando a variavel y

function setup() {
  createCanvas(400, 400);
  x = random(400);// sorteando numero até 400
  x = int(x);// transformando p/ numero inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("#19726A"); // fundo de tela roxo
 
  
  x = x + random(-2, 2);
  y = y + random(-2, 2);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distanciaX;
   let distanciaY;
   let distancia; 
   distanciaX = mouseX - x;
   distanciaY = mouseY - y;
   distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
   circle(mouseX, mouseY, distancia);// circulo com coordenada aleatória
  
  if(distancia > 150){
    fill("blue")
  circle(mouseX, mouseY, distancia);
  } else if (distancia > 100){
    fill("purple")
  circle(mouseX, mouseY, distancia); 
  } else if (distancia > 50){
    fill("orange")
    circle(mouseX, mouseY, distancia);
  } else if (distancia > 15){
    fill("red")
    circle(mouseX, mouseY, distancia);
  }
  
  if(distancia < 3) {  //se posicaoX do mouse for igual a x
    text("encontrei", 200, 200);
  //então mostrará o texto "econtrei"
  noLoop();
  }
}