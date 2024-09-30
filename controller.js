import * as view from "./view.js";
import * as model from "./model.js";

window.addEventListener("load", start);

let isPlaying = false;

function start() {
  document.querySelector("#start-btn").addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      startGame();
    }
  });

  document.querySelector("#reset-btn").addEventListener("click", () => {
    isPlaying = false;
    reset();
  });
}

function startGame() {
  setInterval(() => {
    if (isPlaying) {
      model.updateGeneration();
    }
  }, 200);

  console.log("Game started");
}

function reset() {
  model.resetGeneration();
  view.displayGrid(model.grid);
}

export { startGame, reset };
