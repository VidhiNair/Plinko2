class Block{
    constructor(x,y,width,height,bool){
        var options = {
            'restitution':1.1,
            'friction':0.5,
            'density':1.0,
            'isStatic':bool
            }
            this.body = Bodies.rectangle(x,y,width,height,options)
            this.width = width;
            this.height = height;
            World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
    }
}