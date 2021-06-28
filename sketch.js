var background, backgroundImg
var girl, girlImg
var snow, snowImg, snowGroup

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  girlImg = loadImage("girl.jpg");
  snowImg = loadImage("snow4.webp");

  snowGroup = new Group();
}

function setup() {
  createCanvas(1000,1000);
  
  background = createSprite(400, 200, 50, 50);
  background.addImage(backgroundImg);

  girl = createSprite(400, 400, 50, 50);
  girl.addImage(girlImg);
  girl.scale = 0.4;

}

function draw() {
  drawSprites();
  spawnSnow();
}

function keyPressed(){
  if(keyCode === 39){
    girl.x = girl.x+3
  }
  if(keyCode === 37){
    girl.x = girl.x-3
  }
}

function spawnSnow(){
 if(frameCount%50 === 0){
    var snow = createSprite(200, 0, 30, 30);
    snow.addImage(snowImg);
    snow.x = Math.round(random(30,770));
    snow.velocityY = 6;
    snow.lifetime = 400;
    snowGroup.add(snow);
    snow.scale = 0.2;
 }
}