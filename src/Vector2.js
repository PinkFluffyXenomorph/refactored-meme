export class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y + this.y);
  }
  add(that) {
    this.x += that.x;
    this.y += that.y;
    return this;
  }
  sub(that) {
    this.x -= that.x;
    this.y -= that.y;
    return this;
  }
  scale(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  norm() {
    const mag = this.mag();
    this.x *= mag;
    this.y *= mag;
  }
}
