var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver, restart;
var shark, sharkImg, fish, fishImg;
var ocean, oceanImg;
var score=0;
fishGroup;

function preload() {
  sharkImg=loadImage("images/shark.png")
  fish=loadImage("images/fish.png")
  ocean=loadImage("images/ocean.png")
}


function setup(){
  createCanvas(500,700)
  ocean = createSprite(250,350,30,20);
  ocean.addImage(ocean);
  ocean.velocityY = (5 + score/10);

  shark= createSprite(250,600);
  shark.addImage(sharkImg);
  shark.scale = 0.5;
  
 fishGroup=new Group()
 score=0;
}


function draw(){
  background("ocean");

    if(fishGroup.isTouching(shark)){
      fishGroup.destroyEach();
    score = score + 4;
    }
    switch(score){
        case 10: shark.scale=0.9;
                break;
        case 20: shark.scale=0.12;
                break;
        case 30:  shark.scale=0.14;
                break;
        case 40: shark.scale=0.16;
                break;
        default: break;
    }
  
    if(keyDown("right")) {
      shark.x = spaceShip.x + 10;
    }

    if(keyDown("left")) {
      shark.x = shark.x - 10;
    }
  
   shark.collide9(ocean);
    spawnFish();
  
  drawSprites();
  
  stroke("white");
  fill("white");
  textSize(30);
  text("score : " + score,210,60)
}

function fish() {
  if(frameCount % 110 === 0) {
  
    var fish = createSprite(Math.round(random(35,375)),-20);
   fish.velocityY = (6 + score/10);
 fish.lifetime = 200;
  fish.scale = random(0.4,0.5);

    var rand = Math.round(random(1,3));
    fishGroup.add(fish);
  }
}
  
