class Circle{
    constructor(x,y,radius,bool){
        var options = {
            'restitution':0.7,
            'friction':0.5,
            'density':1.0,
            'isStatic':bool
            }
            this.body = Bodies.circle(x,y,radius,options)           
            this.radius = radius
            World.add(world,this.body)
            this.body.position.x = x
            this.body.position.y = y
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.radius*2);
    }
}