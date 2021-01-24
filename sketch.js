const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10W;
var hero , fly;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,120,70,70);
    box3 = new Box(900,140,70,70);
    box4 = new Box(900,140,70,70);
    box5 = new Box(900,140,70,70);
    box6 = new Box(800,100,70,70);
    box6 = new Box(800,120,70,70);
    box7 =  new Box(800,160,70,70);
    box8 = new Box(800,160,70,70);
    box9 = new Box(800,180,70,70);
    box10 = new Box(800,200,70,70);

    hero = new Hero(200,200,100,100)
    fly = new Fly(hero.body,{x:400, y:150});

}

function draw() {
    background(180)

    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    hero.display();
    fly.display();

}

function mouseDragged() {
    Matter.Body.setPosition(hero.body,{x : mouseX , y:mouseY})
    
}