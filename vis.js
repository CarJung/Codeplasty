const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
const len = density.lenght
let backColor = "white";
let charColor = "black";
let myfont;


let vid;
let playing = true;
let foncik;


let cols = 90;
let rows = 90;

const numCells= cols*rows;
let values = [];

function preload() {
  myfont = loadFont("Audiowide-Regular.ttf")
}



function setup() {
  createCanvas(1080, 1920);
  pixelDensity(1)
  noStroke()
  frameRate(60)
  // noCanvas();
  textFont(myfont)
  textSize(11)
  fill(charColor)

  vid = createVideo("atom_test2.mp4");
  vid.size(cols, rows);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  vid.position(0,0);
  //textFont(foncik)

}

function draw() {
  screen1()
}

function screen1(){
  background(backColor);
  let img = vid.get();
  let j=0;

  img.loadPixels();
  for ( let i=0;i<img.width;i++){
    for(let j=0;j<img.height;j++){
      const pixelIndex = (i+(j*img.width))*4
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      values[i+img.width*j] = avg;
    }
  }


  const gridw = width*0.8;
  const gridh = width*0.8;
  const cellw = gridw/cols;
  const cellh = gridh/rows;
  const margx = (width - gridw)/2;
  const margy = (width - gridh)/2;
  //
  push()
  translate(0,350)
  //drawing grid
  let charNum=0;
  for(let i=0; i<numCells; i++){  
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cellIndex = col + (row*cols);
    
    const x = margx + (col*cellw);
    const y = margy + (row*cellh);
    
    
    //drawing shapes

    
    const w = (255-values[cellIndex])/255*9
    ellipse(x,y,w,w)

    
    // if (values[cellIndex] <5) {
    //   text("@",x,y)
      
    // }else if(values[cellIndex] <10){
    //   text("#",x,y)
    // }else if(values[cellIndex] <200){
    //   text("0",x,y)
    // }else if(values[cellIndex] <250){
    //   text("1",x,y)
    // }
    
    
  }//
  pop()


}

