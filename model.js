import * as view from "./view.js";
import Grid from "./grid.js";

const numberOfCells = 900;

const gridSize = Math.ceil(Math.sqrt(numberOfCells));

let grid = new Grid(gridSize, gridSize);
let generation = 0;

function updateGeneration() {
  generation++;
  grid = calculateNextGeneration();
  view.displayGrid(grid);
}

function calculateNextGeneration() {
  const newGrid = new Grid(gridSize, gridSize);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cell = { row: i, col: j };
      let neighboursAlive = 0;

      grid.neighbours(cell).forEach((neighbour) => {
        const val = grid.get(neighbour);
        if (val === 1) {
          neighboursAlive++;
        }
      });

      const isAlive = grid.get(cell) === 1;

      if (isAlive && (neighboursAlive < 2 || neighboursAlive > 3)) {
        newGrid.set({ row: i, col: j, value: 0 });
      } else if (!isAlive && neighboursAlive === 3) {
        newGrid.set({ row: i, col: j, value: 1 });
      } else {
        newGrid.set({ row: i, col: j, value: isAlive ? 1 : 0 });
      }
    }
  }
  return newGrid;
}

function resetGeneration() {
  generation = 0;
  grid = new Grid(gridSize, gridSize);
}

export { updateGeneration, grid, gridSize, numberOfCells, resetGeneration, generation };
