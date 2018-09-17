var canv;

function setup(){
    //createcanvas returns a reference to the canvas
    can = createCanvas(400,400);
    canv.mouseClicked(doSomethingIntresting);
    particles = [],
}
function draw(){
    //draw all our particels
    for ( var i =0; i <particles.length; i++){
       _ellipse (particles[i].x = particles[i].x + particles[i]speed;) 
        //particles[i].x = particles[i].x + particles[i]speed;
        //particles[i].y = particles[i].y + particles[i]speed;
        //OR
        particles[i].x =+ particles[i]speed;
        particles[i].y =+ particles[i]speed;
        //add the right part to the left part 
        //works for addition
        
    }
    //ellipse(300,300,40);
    //Color(255);
    //_doStroke();
    
}
function doSomethingIntresting(){
    
}
function makeParticles(){
    var particle = {
        x:mouseX,
        y:mouseY,
        size: 30,
        speed: 1,
    }
particles.push(particles);
}