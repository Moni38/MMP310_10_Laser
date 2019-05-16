function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(51);
    if (random(100) > 99) {
        asteroids.push(new Asteroid());

    }

    spaceship.display();
    spaceship.update();

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();
        asteroids[i].collide();
    }

    if (keyIsDown(CONTROL)) {
        lasers.push(new Laser());

        for (let a = 0; a < lasers.length; a++) {
            lasers[a].display();
            lasers[a].update();
        }
    }

}
