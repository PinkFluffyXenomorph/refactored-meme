// class Drawable {
//   constructor(layer, color, pos, vel, speed) {
//     this.layer = layer;
//     this.color = color;
//     this.pos = pos;
//     this.vel = vel;
//     this.speed = speed;
//     this.expired = false;
//   }
// }

// export class Circle extends Drawable {
//   constructor(layer, color, pos, vel, speed, radius) {
//     super(layer, color, pos, vel, speed);

//     this.radius = radius;
//   }

//   draw(context) {
//     context.fillStyle(this.color);
//     context.beginPath();
//     context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
//     context.closePath();
//     context.fill();
//   }
// }

// export class Rectangle extends Drawable {
//   constructor(layer, color, pos, vel, speed, width, height) {
//     super(layer, color, pos, vel, speed);
//     this.width = width;
//     this.height = height;
//   }

//   getBounds() {
//     // console.log(this.width, this.height);
//     const halfWidth = this.width / 2;
//     const halfHeight = this.height / 2;
//     // console.log(halfHeight)
//     return {
//       left: this.pos.x - halfWidth,
//       right: this.pos.x + halfWidth,
//       up: this.pos.y - halfHeight,
//       down: this.pos.y + halfHeight,
//     };
//   }
//   draw(context) {
//     // context.fillStyle = "#888888";
//     // context.fillRect(0, 0, 50, 50);
//     // context.fillRect()
//     const bounds = this.getBounds();
//     // console.log(bounds)
//     context.fillStyle = this.color;
//     context.fillRect(bounds.left, bounds.up, this.width, this.width, this.height);
//   }
// }
