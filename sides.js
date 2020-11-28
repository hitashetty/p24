class sides{
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
         
        World.add(world, this.body);
}
display(){
    var rectpos = this.body.position;
    push();
    translate(rectpos.x,rectpos.y);
    strokeWeight(4);
    rect(0,0,this.width,this.height);
    pop();
    fill("purple");

    }
    
}