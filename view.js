import * as model from "./model.js";

const gridContainer = document.querySelector("#grid");

gridContainer.style.gridTemplateColumns = `repeat(${model.gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${model.gridSize}, 1fr)`;

for (let i = 0; i < model.numberOfCells; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";

  cell.addEventListener("click", (event) => {
    const index = Array.from(gridContainer.children).indexOf(cell);
    const { row, col } = model.grid.rowColFor(index);

    const currentValue = model.grid.get({ row, col });
    model.grid.set({ row, col, value: currentValue === 1 ? 0 : 1 });

    displayGrid(model.grid);
  });

  gridContainer.appendChild(cell);
}

function displayGrid(currentGrid) {
  const cells = document.querySelectorAll(".cell");

  document.querySelector("#gen-count").textContent = `generation: ${model.generation}`;

  cells.forEach((cell, index) => {
    const row = Math.floor(index / model.gridSize);
    const col = index % model.gridSize;

    cell.style.backgroundColor = currentGrid.get({ row, col }) ? "black" : "white";
  });
}

export { displayGrid };
