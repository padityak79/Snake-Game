var s;
var scl= 25;
var food;
var directionX = 1;
var directionY = 0;

function setup() {
    createCanvas(600, 600);
    frameRate(10);
    s= new snake();
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food= createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    while(!s.placeFood(food) ){
        pickLocation();
    };
}

function draw(){
    background(51);

    s.update();
    if(s.death() === true) {
        directionX = 0;
        directionY = 0;
    }
    s.show();
    if(s.eat(food)) pickLocation();
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {

    if(keyCode === UP_ARROW) {  
        if(directionY !== 1) {
            s.dir(0, -1);
            directionY = -1;
            directionX = 0;
        }
    }
    
    else if(keyCode === DOWN_ARROW) {
        if(directionY !== -1)  {
            s.dir(0, 1);
            directionY = 1;
            directionX = 0;
        }
    }
    
    else if(keyCode === LEFT_ARROW) {
        if(directionX !== 1) {
            s.dir(-1, 0);
            directionY = 0;
            directionX = -1;
        }
    }
    
    else if(keyCode === RIGHT_ARROW) {
        if(directionX !== -1) {
            s.dir(1, 0);
            directionY = 0;
            directionX = 1;
        }
    }
}