let prevMin;

// setup() is called once at page-load
function setup() {
    createCanvas(1000,800); // make an HTML canvas element width x height pixels
    prevMin = minute();
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    clear(); //transparent background so cool space bg can show!

    drawHour(hr);
    drawMin(min);
    drawSec(sec);

    //print minute to console when it changes
    if(min != prevMin){
        console.log(min);
        prevMin = min;
    }
}

function drawHour(hr){
    //draw 12 boxes used: https://p5js.org/reference/#/p5/rect
    for(let i = 0; i<12; i++){
        stroke(255);
        fill(0);
        rect(i*(width)/12, 100, width/12, 100);
    }
    
    let newHr = hr%12;
    if(newHr === 0){
        newHr = 12;
    }

    for(let i = 0; i < newHr; i++){

        //if AM, yellow moons. If PM, blue moons.
        if (hr < 12) {
            stroke(0);
            fill('yellow');
        } else {
            stroke(255); 
            fill('blue');
        }

        let x = (0.5 + i) * width / 12;
        circle(x, 150, 75);
        fill(0);
        ellipse(x - 15, 150, 50)
    }
}

function drawMin(min){
    //draw 6 boxes: 0-9, 10-19, 20-29, 30-39, 40-49, 50-59)
    for(let i = 0; i<6; i++){
        stroke(255);
        fill(0);
        rect(i*(width)/6, 300, width/6, 100);
    }

    let minGroup = Math.floor(min / 10);

    //sparkle stars (rotated rectangles) increase
    for(let i = 0; i <= minGroup; i++){

        fill(255);
        let x = (0.5 + i) * width / 6;
        
        rect(x-25, 325, 50, 50);

        push();
        translate(x, 350);
        rotate(PI / 4);
        fill(255);
        rect(-25, -25, 50, 50);
        pop();
    }
}

function drawSec(sec){
    //draw one large box
        stroke(255);
        fill(0);
        rect(0, 500, width, 200);

    //divide space
    let rows = 6;
    let cols = 10;
    let xSpacing = (width - 20) / cols;
    let ySpacing = 200 / rows;

    //tiny circles as stars, each second passes add another dot. Random dots within the box
    for(let i = 0; i < sec; i++){
        let row = Math.floor(i / cols);
        let col = i % cols;

        fill('lightblue');
        let x = col * xSpacing + 55;
        let y = row * ySpacing + 518;
        circle(x, y, 10);
    }
}