var fixedrect;
var movingrect;

var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(1200,800);
  
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

  movingrect = createSprite(800, 400, 80, 90);
  movingrect.shapeColor = "red";
  movingrect.debug = true;
 
  gameObject1 = createSprite(600, 200, 50, 50);
  gameObject1.shapeColor = "pink";
  gameObject1.debug = true;


  gameObject2 = createSprite(800, 400, 80, 90);
  gameObject2.shapeColor = "pink";
  gameObject2.debug = true;

  gameObject3 = createSprite(1200, 400, 80, 90);
  gameObject3.shapeColor = "pink";
  gameObject3.debug = true;

  
}

function draw() {
  background("black");  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;


//Calling the custom function

if (isTouching (movingrect,gameObject3))

{
movingrect.shapeColor = "brown";
gameObject3.shapeColor = "brown"

}

else{
  movingrect.shapeColor = "green";
  gameObject3.shapeColor = "green";
}





  
  drawSprites();
}

