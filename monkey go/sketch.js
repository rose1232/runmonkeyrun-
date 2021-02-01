var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//creating monkey:
 monkey=createSprite(80,315,20,20);
  monkey.addImage("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,90,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  score=0;
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
  function food(){
   if(Wrold.frameCount%80===0){
     banana=createSprite(150,200,20,20);
     banana.scale=0.3;
     r=Math.round(random(1,4));
     if(r==1) {
       banana.addImage(bananaImage);
       }
     banana.y=Math.round(random(120,200));
        
        banana.velocityX=-7;
        banana.setLifetime=100;
        
        foodGroup.addGroup(banana);
        }
  }}

function obstacls(){
  if(frameCount%300===0){
    var obstacle=createSprite(400,365,20,20);
    obstacls.addImage(obstacleImage );
    obstacls.velocityx=-(6+score/100);
    obbstacls.setLifeTime=100;
    obstacleGroup.addGroup(obstacls);
  }
}


function draw() {

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkay.velocityY+0.8;
   
  monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score : ",+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.celi(frameCount/frameRate())
  text("Survival Time"+ survivalTime,100,59);
  
  drawSprites();
}
