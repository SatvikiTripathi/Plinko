var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=320;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //creating divisions using - for loop
   for (var k = 0; k <=width; k = k + 75) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    
   //creating the first row of plinkos
    for (var j = 75; j <=width; j=j+70) 
    {
    plinkos.push(new Plinko(j,75));
    }

    //creating the second row of plinkos
    for (var j = 50; j <=width-10; j=j+50) 
    {
    plinkos.push(new Plinko(j,175));
    }

     //creating the third row of plinkos
    for (var j = 75; j <=width; j=j+50) 
    {
    plinkos.push(new Plinko(j,275));
    }
    
    //creating the fourth row of plinkos
     for (var j = 50; j <=width-10; j=j+50) 
    {
    plinkos.push(new Plinko(j,375));
    } 
}
 

function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

  //creating new paryicles after every 60 frame Count
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
   //displaying particles
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   //displaying divisions
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}