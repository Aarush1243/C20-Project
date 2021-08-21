var bg, astronaut, wall1, wall2, wall3, wall4;
var bgImg, sleepImg, eatImg, brushImg, bathImg, gymImg, drinkImg, moveImg;


function preload() {
  bgImg = loadImage("iss.png");
  sleepImg = loadAnimation("sleep.png");
  eatImg = loadAnimation("eat1.png", "eat2.png");
  brushImg = loadAnimation("brush.png");
  bathImg = loadAnimation("bath1.png", "bath2.png");
  gymImg = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  drinkImg = loadAnimation("drink1.png", "drink2.png");
  moveImg = loadImage("move.png");
}

function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(400, 200, 20, 20);
  bg.addImage(bgImg)
  bg.scale = 0.2;

  astronaut = createSprite(400, 280, 20, 20);
  astronaut.addAnimation("sleeping", sleepImg);
  astronaut.scale = 0.1;


}

function draw() {
  background(255, 255, 255);

  wall1 = createSprite(0,200,5,400);
  wall1.visible = false;
  astronaut.collide(wall1);
  wall2 = createSprite(800,200,5,400);
  wall2.visible = false;
  astronaut.collide(wall2);
  wall3 = createSprite(400,0,800,5);
  wall3.visible = false;
  astronaut.collide(wall3);
  wall4 = createSprite(400,400,800,5);
  wall4.visible = false;
  astronaut.collide(wall4);

  if (keyDown("r")) {
    astronaut.addAnimation("brushing", brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  background(255, 255, 255);

  if (keyDown("g")) {
    astronaut.addAnimation("gymming", gymImg);
    astronaut.changeAnimation("gymming");
    astronaut.y =200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("e")) {
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y =200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("b")) {
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y =200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("left_arrow")) {
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = -3;
  }
  if (keyDown("right_arrow")) {
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 3;
  }
  if (keyDown("up_arrow")) {
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityY = -3;
  }
  if (keyDown("down_arrow")) {
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityY = 3;
  }
  //astronaut.;
  createEdgeSprites();
  drawSprites();
  fill("white");
  text("INSTRUCTIONS:", 50, 50);
  text("R Key = Brushing", 50, 60);
  text("G Key = Gymming", 50, 70);
  text("E Key = Eating", 50, 80);
  text("B Key = Bathing", 50, 90);
  text("Arrow Keys = Moving", 50, 100);


}