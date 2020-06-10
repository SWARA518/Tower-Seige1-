const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot,ground,poly;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var stand1,stand2;

function preload(){
  polygon_img = loadImage("sprites/polygon.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
   world = engine.world;

  
  //level one [four blocks]
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  //level two [three blocks]
  block5 = new Block(360,195,30,40);
  block6 = new Block(390,195,30,40);
  block7 = new Block(420,195,30,40);
  //level three [two blocks]
  block8 = new Block(390,155,30,40);
  block9 = new Block(420,155,30,40);
  //level four(top) [one block]
  block10 = new Block(420,115,30,40);

  //poly = new Polygon(200,175,30,40);
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

  ground = new Ground(400,230,30,50);

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  slingshot = new SlingShot(this.polygon,{x:200,y:100});
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display(); 
  block8.display();
  block9.display();
  block10.display();
  stand1.display();
  stand2.display();
  ground.display();
  slingshot.display();
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}