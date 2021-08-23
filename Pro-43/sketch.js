var bg, issImage, space1, space2, space3, space4;
var iss, spacecraft;
var hasDocked = false
function preload() {
  bg = loadImage("images/spacebg.jpg")
  issImage = loadImage("images/iss.png")
  space1 = loadImage("images/spacecraft1.png");
  space2 = loadImage("images/spacecraft2.png");
  space3 = loadImage("images/spacecraft3.png");
  space4 = loadImage("images/spacecraft4.png");
  
}
  

function setup() {

  createCanvas(600,350);
  
  iss = createSprite(330, 130);
  iss.addImage(issImage);
  iss.scale = 0.70;
  spacecraft = createSprite(285, 240)
  spacecraft.scale = 0.15;
  spacecraft.addImage(space1)
  
  
}

function draw() {
  background(bg);  
  
  drawSprites();
  spacecraft.addImage(space1)
  if(!hasDocked){
    
    if(keyDown("w")){
      spacecraft.addImage(space2)
      spacecraft.y = spacecraft.y-2
    }
    if(keyDown("s")){
      spacecraft.addImage(space2)
      spacecraft.y = spacecraft.y+2
    }
    if(keyDown("a")){
      spacecraft.addImage(space4)
      spacecraft.x = spacecraft.x-2
    }
    if(keyDown("d")){
      spacecraft.addImage(space3)
      spacecraft.x = spacecraft.x+2
    }
    
  }
  if(spacecraft.y <= (iss.y+55)&&spacecraft.x<=(iss.x-10)){
    hasDocked = true
    textSize(25)
    fill("red")
    text("Docking Succesfull",250, 300)
  }
  console.log(spacecraft.x)
  console.log(spacecraft.y)
}