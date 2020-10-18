var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);

  //createSprite(400, 200, 50, 50);
  speed=random(20, 50);
  weight=random(30, 52);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  thickness = random(22, 83);
  
}

function draw() {
  background(0,0,0); 
  bullet.velocityX = speed; 
  if(isTouching(bullet, wall)){
    bullet.velocityX = 0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
      bullet.velocityX = 0
      if(damage>10){
        wall.shapeColor = "red";
    }
  
      if(damage<10){
        wall.shapeColor = "green";
    }

  }
  }
  
  
  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
        return true;
    }
else {
      return false;
  }
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}