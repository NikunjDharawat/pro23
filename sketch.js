var  wall;

var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  

thickness=random(22,83);

bullet=createSprite(50,200,50,5)
bullet.velocityX=speed;
bullet.shapeColor=green(255);

 wall=createSprite(1400,300,50,height/2)
 wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0);  

  if (hascollided(bullet,wall))

  { 
    bulletvelocityX=0;
    var damage =0.5* weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);

    }
  }
    

  drawSprites();
  function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
  return true
}

 return false }
}