let horiz = 20, vert = 20, diam = 15;

function setup() {
  createCanvas(1300, 1300);
  noStroke();
}

function draw() {
  background(0, 0, 0);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  //horizontal 
  for (let x = 10; x < width; x += horiz){
    //vertical 
    for (let y = 10; y < height; y += vert){
      //distance from mouse
      let d = dist(mouseX, mouseY, x, y);
      if( d <= 100){
        fill(r, g, b, 100);
        //adjust diam 
        diam = map(d, 0, 100, 50, 1);
      } else {
        fill(0, 0, 0);
        diam = 15;
        
      }
      ellipse(x, y, diam);
     
    }
  }  
}