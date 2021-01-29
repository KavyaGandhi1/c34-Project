//Create variables here
var dogImg,HappyDogImg;
var dog,HappyDog
var databases;
var FoodS,FoodStock;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg1.png");

    HappyDogImg = loadImage("dogImg.png");
   
  
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,20,20);
dog.addImage(dogImg);

  database = firebase.database();
  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock,writeStock);
}


function draw() {  
background(rgb(46, 139, 87));
 
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(FoodS);
  dog.addImage(HappyDogImg);
}

drawSprites();
}


function writeStock(x){
  if(x<=0){
    x=0;
    
  }
  else{
    x = x-1;
  }
database.ref('/').update({
Food:x
})
}


function readStock(data) {
  FoodS = data.val();
  
  }







