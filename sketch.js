var path, boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
  pathImg = loadImage ("path.png");
  //loadAnimation of the boy
  boyimg = loadAnimation ("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //create sprite for the path 
 path = createSprite (200, 200, 10, 10);
//add image for the path
path.addImage ("running", pathImg);
//Make the track a moving background by giving velocity Y.
path.scale=0.9;

//create a boy sprite
boy = createSprite (200, 350, 20, 20);
//add animation for the boy
boy.addAnimation ("running", boyimg);
boy. scale=0.5
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary
leftBoundary.visible = false
//create right Boundary
rightBoundary=createSprite(400,0,100,800);
//set visibility as false for left boundary
rightBoundary.visible = false
}

function draw() {
  background("black");
  path.velocityY = 4;

  
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // collide the boy with the left and right invisible boundaries.
  
  //code to reset the background
  if(path.y > 420 ){
    path.y = height/2;
  }
  
  drawSprites();
}
