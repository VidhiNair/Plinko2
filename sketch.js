const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, num, arr, score;
var spoke1, spoke2, spoke3, spoke4, spoke5, spoke6, spoke7, spoke8, spoke9, spoke10, 
spoke11, spoke12, spoke13, spoke14, spoke15, spoke16, spoke17, spoke18, spoke19, spoke20, 
spoke21, spoke22, spoke23, spoke24, spoke25;
var bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8;
var slot1,slot2,slot3,slot4;

function setup(){
  createCanvas(450,800);
    engine = Engine.create();
    world = engine.world;
    spoke1 = new Circle(25,100,25,true);
    spoke2 = new Circle(158,100,25,true);
    spoke3 = new Circle(292,100,25,true);
    spoke4 = new Circle(425,100,25,true);

    spoke5 = new Circle(92,166,25,true);
    spoke6 = new Circle(225,166,25,true);
    spoke7 = new Circle(358,166,25,true);

    spoke8 = new Circle(25,233,25,true);
    spoke9 = new Circle(158,233,25,true);
    spoke10 = new Circle(292,233,25,true);
    spoke11 = new Circle(425,233,25,true);

    spoke12 = new Circle(92,299,25,true);
    spoke13 = new Circle(225,299,25,true);
    spoke14 = new Circle(358,299,25,true);

    spoke15 = new Circle(25,365,25,true);
    spoke16 = new Circle(158,365,25,true);
    spoke17 = new Circle(292,365,25,true);
    spoke18 = new Circle(425,365,25,true);

    spoke19 = new Circle(92,431,25,true);
    spoke20 = new Circle(225,431,25,true);
    spoke21 = new Circle(358,431,25,true);

    spoke22 = new Circle(25,497,25,true);
    spoke23 = new Circle(158,497,25,true);
    spoke24 = new Circle(292,497,25,true);
    spoke25 = new Circle(425,497,25,true);

    bar1 = new Block(225,790,800,20,true);
    bar2 = new Block(10,775,20,50,true);
    bar3 = new Block(153,775,20,50,true);
    bar4 = new Block(297,775,20,50,true);
    bar5 = new Block(440,775,20,50,true);
    bar6 = new Block(440,400,20,800,true);
    bar7 = new Block(10,400,20,800,true);
    bar8 = new Block(225,10,800,20,true);

    slot1 = new Block(81.5,779,123,2,true);
    slot2 = new Block(224.5,779,123,2,true);
    slot3 = new Block(81.5+287,779,123,2,true);
    
    num = 0;   
    ball1 = new Circle(0,0,10,true);
    ball2 = new Circle(0,0,10,true);
    ball3 = new Circle(0,0,10,true);
    ball4 = new Circle(0,0,10,true);
    ball5 = new Circle(0,0,10,true);
    ball6 = new Circle(0,0,10,true);
    ball7 = new Circle(0,0,10,true);
    ball8 = new Circle(0,0,10,true);
    ball9 = new Circle(0,0,10,true);
    ball10 = new Circle(0,0,10,true);
    arr = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10];
    score = 0;
    randomize();
}

function draw(){
  background(0); 
  Engine.update(engine); 
  spoke1.display();
  spoke2.display();
  spoke3.display();
  spoke4.display();

  spoke5.display();
  spoke6.display();
  spoke7.display();

  spoke8.display();
  spoke9.display();
  spoke10.display();
  spoke11.display();

  spoke12.display();
  spoke13.display();
  spoke14.display();

  spoke15.display();
  spoke16.display();
  spoke17.display();
  spoke18.display();

  spoke19.display();
  spoke20.display();
  spoke21.display();

  spoke22.display();
  spoke23.display();
  spoke24.display();
  spoke25.display();

  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();
  bar7.display();
  bar8.display();

  slot1.display();
  slot2.display();
  slot3.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  text(score,225,30);
  if(ball1.body.position.y > 760)
  {
    if((ball1.body.position.x - slot1.body.position.x) < 62)
    {
      score = Math.round(slot1.body.mass) + score
      Matter.Body.setPosition(ball1.body,0,460);
      randomize();
    }
    else if((ball1.body.position.x - slot2.body.position.x) < 62)
    {
      score = Math.round(score + slot2.body.mass)
      Matter.Body.setPosition(ball1.body,0,460);
      randomize();
    }
    else if((ball1.body.position.x - slot3.body.position.x) < 62)
    {
      score = Math.round(score + slot3.body.mass)
      Matter.Body.setPosition(ball1.body,0,460);
      randomize();
    }
  }
if(ball2.body.position.y > 760)
{
  if((ball2.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball2.body,0,460);
    randomize();
  }
  else if((ball2.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball2.body,0,460);
    randomize();
  }
  else if((ball2.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball2.body,0,460);
    randomize();
  }
}
if(ball3.body.position.y > 760)
{
  if((ball3.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball3.body,0,460);
    randomize();
  }
  else if((ball3.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball3.body,0,460);
    randomize();
  }
  else if((ball3.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball3.body,0,460);
    randomize();
  }
}
if(ball4.body.position.y > 760)
{
  if((ball4.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball4.body,0,460);
    randomize();
  }
  else if((ball4.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball4.body,0,460);
    randomize();
  }
  else if((ball4.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball4.body,0,460);
    randomize();
  }
}
if(ball5.body.position.y > 760)
{
  if((ball5.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball5.body,0,460);
    randomize();
  }
  else if((ball5.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball5.body,0,460);
    randomize();
  }
  else if((ball5.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball5.body,0,460);
    randomize();
  }
}
if(ball6.body.position.y > 760)
{
  if((ball6.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball6.body,0,460);
    randomize();
  }
  else if((ball6.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball6.body,0,460);
    randomize();
  }
  else if((ball6.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball6.body,0,460);
    randomize();
  }
}
if(ball7.body.position.y > 760)
{
  if((ball7.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball7.body,0,460);
    randomize();
  }
  else if((ball7.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball7.body,0,460);
    randomize();
  }
  else if((ball7.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball7.body,0,460);
    randomize();
  }
}
if(ball8.body.position.y > 760)
{
  if((ball8.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball8.body,0,460);
    randomize();
  }
  else if((ball8.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball8.body,0,460);
    randomize();
  }
  else if((ball8.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball8.body,0,460);
    randomize();
  }
}
if(ball9.body.position.y > 760)
{
  if((ball9.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball9.body,0,460);
    randomize();
  }
  else if((ball9.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball9.body,0,460);
    randomize();
  }
  else if((ball9.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball9.body,0,460);
    randomize();
  }
}
if(ball10.body.position.y > 760)
{
  if((ball10.body.position.x - slot1.body.position.x) < 62)
  {
    score = Math.round(slot1.body.mass) + score
    Matter.Body.setPosition(ball10.body,0,460);
    randomize();
  }
  else if((ball10.body.position.x - slot2.body.position.x) < 62)
  {
    score = Math.round(score + slot2.body.mass)
    Matter.Body.setPosition(ball10.body,0,460);
    randomize();
  }
  else if((ball10.body.position.x - slot3.body.position.x) < 62)
  {
    score = Math.round(score + slot3.body.mass)
    Matter.Body.setPosition(ball10.body,0,460);
    randomize();
  }
}
}

function randomize(){
  slot1.body.mass = random(100,1000)
  slot2.body.mass = random(100,1000)
  slot3.body.mass = random(100,1000)
}

function mouseReleased(){ 
num++
Matter.Body.setStatic(arr[num-1].body,false)
Matter.Body.setPosition(arr[num-1].body,{x:mouseX,y:30})
}