var canv;
var particles;


function setup(){
    // createcanvas returns a reference to the canvas
   canv = createCanvas(400,400);
   canv.mouseClicked(makeParticle);

   particles = [];
}

function draw(){
    // draw all of our particles
    for ( var i = 0; i < particles.length; i++){
        ellipse(particles[i].x, particles[i].y, particles[i].size);

        particles[i].x += particles[i].speed;
        particles[i].y += particles[i].speed;
    }
}

function makeParticle(){
    var particle = {
        x: mouseX,
        y: mouseY,
        size: random(20,40),
        speed: random(-2, 2)
    };
    particles.push( particle );
}