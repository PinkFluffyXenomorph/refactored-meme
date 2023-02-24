// import { Rectangle } from "./Shapes.js";
import { Vector2 } from "./Vector2.js";

export class Renderer {
  constructor(context, width, height) {
    this.context = context;
    this.prevTimestamp = 0;
    this.width = width;
    this.height = height;
    this.aspectRatio = this.width / this.height;
    this.entities = [];
    this.initEvents();

    this.context.fillStyle = "#555555";

    // this.player = new Player();
  }
  initEvents() {
    window.addEventListener("mousedown", (e) => {
      const testSquare = {
        pos: { x: e.clientX, y: e.clientY },
        vel: { x: 0.5, y: 0.5 },
        speed: 100,
        size: 50,
      };
      this.entities.push(testSquare);
    });
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspectRatio = this.width / this.height;
  }

  update(dt) {
    // wipes the screen and sets canvas to current size if any change happened
    this.context.canvas.width = this.width;
    this.context.canvas.height = this.height;

    for (const entity of this.entities) {
      if (entity.pos.x < 0) {
        entity.pos.x = 0;
        entity.vel.x = -entity.vel.x;
      } else if (entity.pos.x > this.width - entity.size) {
        entity.pos.x = this.width - entity.size;
        entity.vel.x = -entity.vel.x;
      }

      if (entity.pos.y < 0) {
        entity.pos.y = 0;
        entity.vel.y = -entity.vel.y;
      } else if (entity.pos.y > this.height - entity.size) {
        entity.pos.y = this.height - entity.size;
        entity.vel.y = -entity.vel.y;
      }

      const dtAndSpeed = entity.speed * dt;
      entity.pos.x += entity.vel.x * dtAndSpeed;
      entity.pos.y += entity.vel.y * dtAndSpeed;
    }
  }
  draw() {
    // draw layers starting from 0, higher layers may "cover" lower layers
    // this.drawables.sort((a, b) => a.layer - b.layer);

    for (const entity of this.entities) {
      const scaledPos = {
        x: entity.pos.x * this.aspectRatio,
        y: entity.pos.y * this.aspectRatio,
      };
      // const scaledSize = entity.size * this.aspectRatio;
      this.context.fillRect(scaledPos.x, scaledPos.y, scaledSize, scaledSize);
    }

    // pos1.x *= this.aspectRatio;
    // pos1.y *= this.aspectRatio;
    // pos2.x *= this.aspectRatio;
    // pos2.y *= this.aspectRatio;

    // scale the size too
    // this.context.fillRect(pos1.x, pos1.y, 10, 10);
    // this.context.fillRect(pos2.x, pos2.y, 10, 10);
  }
}
