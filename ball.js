class Ball{
    constructor(x,y,r) {
        var options = {
                     
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
        this.img = loadImage("polygon.png");
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img,0,0,this.r*2,this.r*2);
        pop();
      }
}
