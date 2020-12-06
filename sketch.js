
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, boy, boyImg, tree, ground, launcher
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10

function preload()
{
	boyImg=loadImage("sprites/boy.png")

}

function setup() {
	createCanvas(1100, 700);


	boy=createSprite(200, 535, 20,20);
	boy.addImage(boyImg)
	boy.scale=.125

	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(550, 625, 1100, 80)

	mango1= new Mango(820, 200, 30, 80)
	mango2= new Mango(790, 150, 40, 40)
	mango3= new Mango(980, 225, 30, 30)
	mango4= new Mango(900, 270, 30, 30)
	mango5= new Mango(700, 240, 30, 30)
	mango6= new Mango(745, 300, 40, 40)
	mango7= new Mango(920, 150, 30, 30)
	mango8= new Mango(1050,280, 40, 40)
	mango9= new Mango(600, 250,35, 35)
	mango10= new Mango(650, 300, 40, 40)

	
	stone = new Stone(145,575,40);


	
	launcher = new Launcher(stone.body, {x:135,  y: 470});


	tree = new Tree(900,300, 40, 40)


	Engine.run(engine);



}


function draw() {
  rectMode(CENTER);
  background("lightblue");

	

  
	ground.display()

	
	tree.display()


	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()
	mango10.display()

	

	stone.display()

	launcher.display()

	
	detectcollision(stone, mango1);
	detectcollision(stone, mango2);
	detectcollision(stone, mango3);
	detectcollision(stone, mango4);
	detectcollision(stone, mango5);
	detectcollision(stone, mango6);
	detectcollision(stone, mango7)
	detectcollision(stone, mango8)
	detectcollision(stone, mango9)
	detectcollision(stone, mango10)



	
  drawSprites();
 
}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	launcher.attach(stone.body);
	}
  }

function detectcollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }
