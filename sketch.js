var thickness, wall;
var speed, weight,bullet;
var bulletRightEdge,wallLeftEdge;
var damage;

function setup() {

  createCanvas(1600,400);
  bullet=createSprite(1120, 200, 30, 10);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  
  
}

function draw() {

  background(0,0,0); 

  console.log(speed);

  bullet.shapeColor=("White");

if (hasCollided(bullet,wall)) {

  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10) {

  bullet.shapeColor=("Red");

}

if(damage<10) {

  bullet.shapeColor=("Green");

}
  
}

drawSprites();

}

function hasCollided(bullet,wall) {

bulletRightEdge=bullet.x+bullet.width/2;
wallLeftEdge=wall.x-wall.width/2;

if (bulletRightEdge>=wallLeftEdge) {
  return true
}
return false;

}