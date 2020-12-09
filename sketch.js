var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
function setup() {
  createCanvas(1375, 650);
  angleMode(DEGREES);

}

function draw() {
  background("black");
  hr = hour();
  mn = minute();
  sc = second();
  //console.log(hr+": "+mn+": "+sc)
  
  scAngle= map(sc,0,60,0,360)
  hrAngle= map(hr % 12,0,12,0,180)
  mnAngle= map(mn,0,60,0,360)
  push();
  translate(400,200);
  rotate(scAngle);
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  push();
  translate(400,200);
  rotate(mnAngle-90);
  stroke("blue");
  arc(0,0,280,280,0,mnAngle);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  translate(400,200);
  rotate(hrAngle);
  stroke("lime");
  arc(0,0,260,260,0,hrAngle);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  
  drawSprites();
}