import { Renderer } from "./Renderer.js";

(() => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const width = window.innerWidth;
  const height = window.innerHeight;

  const refactored_meme = new Renderer(context, width, height);

  window.addEventListener("resize", (event) => {
    refactored_meme.resize();
  });

  let prevTimestamp = 0;
  (function frame(timestamp) {
    const dt = (timestamp - prevTimestamp) * 0.001;
    prevTimestamp = timestamp;

    refactored_meme.update(dt);
    refactored_meme.draw();

    window.requestAnimationFrame(frame);
  })();
})();
