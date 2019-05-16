/*
 entity class
*/
class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 100; // same in both
        this.speed = {
            x: 0,
            y: 0
        }
    }
}
