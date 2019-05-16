/*
	laser class
*/
var lasers = [];

class Laser {
    constructor() {
        this.size = 30;
        this.x = spaceship.x;
        this.y = spaceship.y;
        this.speed = -15;
        this.color = ('red');
    }
    display() {
        // draws laser
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.size, this.size);
    }
    update() {
        this.y += this.speed;
    }
}
