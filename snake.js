
function snake(){
    this.x= 0;
    this.y= 0;
    this.xspeed= 1;
    this.yspeed=0;
    this.total=0;
    this.tail= [];

    this.placeFood = function(food) {
        for(var i=0;i<this.tail.length;i++){
            if(food.x === this.tail[i].x && food.y === this.tail[i].y){
                return false;
            }
        }
        return true;
    }

    this.death = function() {
        for(var i=0; i< this.tail.length;i++) {
            var d= dist( this.x, this.y, this.tail[i].x, this.tail[i].y);
            if(d < 1) {
                this.total = 0;
                this.tail = [];
                return true;
            }
        }
        return false;
    }

    this.update = function() {
        if(this.tail.length === this.total){
            for(let i=0;i<this.tail.length-1;i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x , this.y);
        this.x= this.x + this.xspeed*scl;
        this.y= this.y+ this.yspeed*scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    this.show = function() {
        fill(255);
        for( let i=0;i<this.total; i++){
            rect( this.tail[i].x, this.tail[i].y, scl, scl);
        } 
        rect( this.x, this.y, scl, scl);
    }
    this.dir= function(x,y) {
        this.xspeed= x;
        this.yspeed= y;
    }
    this.eat = function(food) {
        var d= dist(this.x, this.y, food.x, food.y);
        if(d < 1){
            this.total++;
            return true;
        }
        return false;
    }
}