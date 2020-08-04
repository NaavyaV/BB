
var rd, mwu;

function preload(){
    rd = loadImage('Br.png');
    mwu = loadImage('MWU.png')
}

function setup(){
   createCanvas(400, 800);
}

function draw(){
    background(rgb(4, 8, 107))
    var drop = createSprite(200,0,20,20); 
    var MWU = createSprite(200, 600, 10, 10);
    drop.lifetime = 800/12;
    drop.depth = random(-1, 1);
    MWU.addImage(mwu)
    MWU.depth = 0;
    drop.scale = 0.05;
    drop.x = random(0,400); 
    drop.width = random(2,6); 
    drop.height = random(20,100);
    drop.velocityY = 12;
    drop.shapeColor = color('blue');  
    drop.addImage(rd);

    drawSprites();
}   


