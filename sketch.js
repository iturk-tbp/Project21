var bullet, wall, speed, weight, damage, thickness

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  speed = random(223,321);
  weight = random(30,52);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  thickness = random(22,83);
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   bullet.x = 1150;
   damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage > 10){
    wall.shapeColor = "red";
  }
  else{
    wall.shapeColor = "green";
  }
  }
  drawSprites();
  }
  function hasCollided(object1,object2){
   if((object1.x + object1.width)>= object2.x){
     return true;
   }
   else{
     return false;
   }

  }
  

