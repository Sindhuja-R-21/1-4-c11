//Variable Declaration
var trex,trex_running;
var edges;

//1.Load Image/animation/sound
//2.add Image/animation/sound
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

//create
function setup(){
  createCanvas(600,200)
 
  
  //create a trex sprite
  trex=createSprite(50,150,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  edges=createEdgeSprites();

 
}

function draw(){
  background("black");

  //Make trex go up
  if(keyDown("space")){
    trex.velocityY=-10
  }

  //add gravity
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(edges);


  
  drawSprites();
}
