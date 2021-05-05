var box1, box2;

function setup() {
  createCanvas(1200,800);
  box1=createSprite(200, 200, 50, 80);
  box1.shapeColor="green";
  box2=createSprite(400, 200, 20, 30);
  box2.shapeColor="green";
}

function draw() {
  background("white");  
box2.x=mouseX;
box2.y=mouseY;
if (isTouching()){

  box1.shapeColor = "blue";
  box2.shapeColor = "blue";
}
else{
  box1.shapeColor = "green";
  box2.shapeColor = "green";

}


  drawSprites();
}

function isTouching(){
  if ((box2.x - box1.x < box1.width/2 + box2.width/2) && (box1.x - box2.x < box1.height/2 + box2.height/2)
  &&(box2.y - box1.y < box1.height/2 + box2.height/2) && (box1.y - box2.y < box1.height/2 + box2.height/2)){
    
   return true; 
  
  }
  else{
    
    
  return false;
  }

}