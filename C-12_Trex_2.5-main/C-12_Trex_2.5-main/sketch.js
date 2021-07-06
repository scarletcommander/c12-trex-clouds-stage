var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudImg,cloud


var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)
  // including the depth of trex
  console.log(trex.depth)

}

function draw() {
  //set background color
  background(600);
  
  //console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount%34 == 0) {

 // making the clouds and spawning it randomly on the canvas
 var clouds = createSprite(20,10,12,100)
 clouds.velocityX = 4
 clouds.addImage(cloudImg);
 clouds.y = Math.round(random(30,60))
 console.log(clouds.depth)
  // making the trex appearing over the clouds
 clouds.depth = trex.depth
 trex.depth = trex.depth + 1
}
}



