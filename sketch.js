
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup = createGroup();
var obstacleGroup = createGroup();
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  
  drawSprites();  
}

function food(){
  if (frameCount%80 === 0){
  banana = createSprite(200,200,10,10);
  banana.velocityY = -3;
  banana.addImage(bananaImage);
  banana.lifeTime = 300;
  FoodGroup.add(banana);
  }
}

function obstacle() {
  if (frameCount%300 === 0){
  var  obstacle = createSprite(200,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifeTime = 300;
    obstacleGroup.add(obstacle);
  } 
    
    
}






