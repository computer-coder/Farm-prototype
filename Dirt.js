class Dirt extends BaseClass {
  constructor(x, y, width, height, angle) {
    super(x, y, width, height, angle);
    this.image = loadImage("Plants/land.png");
    Matter.Body.setAngle(this.body, angle);
  }
}
