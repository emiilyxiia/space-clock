// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    clear();
    
    textSize(32);
    fill(180);
    text(hr, 10, 30);
    fill(180);
    text(min, 10, 60);
    fill(180);
    text(sec, 10, 90);
}