var cat,cat1,cat2,mouse,background,backi;
var tom,jerry,jerry1,jerry3,jerry2,jerry4;
function preload() {
    //load the images here

backi=loadImage("images/garden.png");
cat=loadAnimation("images/cat1.png");
cat1=loadAnimation("images/cat2.png","images/cat3.png");
cat2=loadAnimation("images/cat4.png");

jerry1=loadAnimation("images/mouse1.png")
jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
jerry3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
   tom=createSprite(700,600,10,10);
tom.addAnimation("tomstanding",cat);
tom.scale=0.2;

jerry=createSprite(100,600,10,10);
jerry.addAnimation("jerrysleeping",jerry1)
jerry.scale=0.2;

}

function draw() {

    background(backi);
    //Write condition here to evalute if tom and jerry collide

if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velcityX=0;
tom.addAnimation("tomsit",cat2);
tom.changeAnimation("tomsit");

jerry.addAnimation("jerry5",jerry3);
jerry.changeAnimation("jerry5");

}



    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here

if (keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",cat1);
    tom.changeAnimation("tomrunning");

    jerry.addAnimation("jerrytease",jerry2)
   jerry.changeAnimation("jerrytease")
}



}
