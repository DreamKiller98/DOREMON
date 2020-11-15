var doremon,nobita
//var plant,lion

function setup() {
  createCanvas(800,400);
  doremon = createSprite(400,0,50,50)
  nobita = createSprite(400,400,50,50)
doremon.velocityY = 4
nobita.velocityY = -4

 // plant = createSprite(400, 200, 50, 50);

  //lion = createSprite(150,380,50,50)
}

function draw() {
  background("lightblue");  
if(doremon.x - nobita.x < doremon.width/2  + nobita.width/2 && nobita.x - doremon.x < doremon.width/2  + nobita.width/2 ){
doremon.velocityX = -doremon.velocityX
nobita.velocityX = -nobita.velocityX
}
if(doremon.y - nobita.y < doremon.height/2 + nobita.height/2 && nobita.y - doremon.y < nobita.height/2 + doremon.height/2){
  doremon.velocityY = -doremon.velocityY
  nobita.velocityY = -nobita.velocityY
}

//
/*console.log(lion.x)
lion.x = mouseX;
lion.y = mouseY


//if(lion.x - plant.x < lion.width/2  + plant.width/2 && plant.x - lion.x < lion.width/2 + plant.width/2  &&
 lion.y - plant.y < lion.height/2 + plant.height/2 && plant.y - lion.y < plant.height/2 + lion.height/2){

//lion.shapeColor = "brown"
//plant.shapeColor = "green"
}

else{
  lion.shapeColor = "grey"
  plant.shapeColor = "black"

}*/
  drawSprites();
}