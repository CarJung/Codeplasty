function preload() {
  partyConnect(
    "wss://deepstream-server-1.herokuapp.com",
    //"wss://p5-party.vercel.app",
    "hello_party",
    "main"
  );
  shared = partyLoadShared("shared", { c: 100, x:100, y:100, w:20, h:20});
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}



function draw() {
  background(220);
  fill(shared.c);
  rect(shared.x,shared.y,shared.w,shared.h)


  
}
