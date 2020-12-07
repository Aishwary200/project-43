var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
function setup() {
  createCanvas(1375, 650);


}

function draw() {
  background("black");
  hr = hour();
  mn = minute();
  sc = second();
  //console.log(hr+": "+mn+": "+sc)
  angleMode(DEGREES);
  scAngle= map(sc,0,60,0,360)
  hrAngle= map(hr,0,24,0,180)
  mnAngle= map(mn,0,60,0,360)
  push();
  translate(400,200);
  rotate(scAngle);
  stroke(255,0,0);
  arc(50, 55, 60, 60, HALF_PI, PI);
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  push();
  translate(400,200);
  rotate(mnAngle);
  stroke("blue");
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  translate(400,200);
  rotate(hrAngle);
  stroke("lime");
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  
  drawSprites();
}