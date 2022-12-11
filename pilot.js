let shared;
let button;
let slider1
let slider2;
let slider3;
let slider4;


function preload() {
  partyConnect(
    "wss://deepstream-server-1.herokuapp.com", // to jest teoretycznie server testowy na którym testowaliśmy nasze projekty
    //"wss://p5-party.vercel.app", // a to jest nasz serwer który obsugiwał połączenie ale poza django nie działa z nieznanego powodu
    "hello_party",
    "main"
  );
  shared = partyLoadShared("shared", { c: 100, x:100, y:100, w:20, h:20});

}

function setup() {
  createCanvas(200, 400);
  noStroke();
  rectMode(CENTER)
  

  button = createButton("colorchange")
  button.position(100,150)
  button.mousePressed(changeBG)
  

  slider1 = createSlider(0, 400, 100);
  slider1.position(100, 200);
  slider1.style('width', '80px');

  slider2 = createSlider(0, 400, 100);
  slider2.position(100, 250);
  slider2.style('width', '80px');

  slider3 = createSlider(10, 150, 100);
  slider3.position(100, 300);
  slider3.style('width', '80px');

  slider4 = createSlider(10, 150, 100);
  slider4.position(100, 350);
  slider4.style('width', '80px');




  
}



function draw() {
  background("#ffcccc");
  fill("#000066");
  shared.x = slider1.value()
  shared.y = slider2.value()
  shared.w = slider3.value()
  shared.h = slider4.value()
}

function changeBG() {
  shared.c = random(255);
  
 

}