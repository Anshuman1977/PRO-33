const {Engine,World,Bodies}= Matter
var  particles = []
function preload() {
  bg = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
engine= Engine.create()
world = engine.world
}

function draw() {
  background(bg);  
  Engine.update(engine)
   //display the paricles 
if (frameCount%05 == 0){
  // particles.push(new Particle (random(width/2-30,width/2+30  ),10,10))
 particles.push(new Particle (random(0,width  ),10,100))
 }
 for(var j = 0; j < particles.length; j++){
   particles[j].display();
 }
}