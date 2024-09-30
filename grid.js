class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array.from({ length: rows }, () => new Array(cols).fill(0));
  }

  set({ row, col, value }) {
    this.grid[row][col] = value;
  }

  get({ row, col }) {
    return this.grid[row][col];
  }

  indexFor({ row, col }) {
    return row * this.cols + col;
  }
  rowColFor(index) {
    const row = Math.floor(index / this.cols);
    const col = index % this.cols;
    return { row, col };
  }

  neighbours({ row, col }) {
    const neighbours = [];
    // Up
    if (row > 0) neighbours.push({ row: row - 1, col });
    // Down
    if (row < this.rows - 1) neighbours.push({ row: row + 1, col });
    // Left
    if (col > 0) neighbours.push({ row, col: col - 1 });
    // Right
    if (col < this.cols - 1) neighbours.push({ row, col: col + 1 });
    // Top left
    if (row > 0 && col > 0) neighbours.push({ row: row - 1, col: col - 1 });
    // Top right
    if (row > 0 && col < this.cols - 1) neighbours.push({ row: row - 1, col: col + 1 });
    // Bottom left
    if (row < this.rows - 1 && col > 0) neighbours.push({ row: row + 1, col: col - 1 });
    // Bottom right
    if (row < this.rows - 1 && col < this.cols - 1) neighbours.push({ row: row + 1, col: col + 1 });

    return neighbours;
  }

  neighbourValues({ row, col }) {
    return [this.north({ row, col }), this.east({ row, col }), this.west({ row, col }), this.south({ row, col })];
  }

  nextInRow({ row, col }) {
    return this.grid[row][col + 1];
  }
  nextInCol({ row, col }) {
    return this.grid[row + 1][col];
  }
  north({ row, col }) {
    return this.grid[row - 1][col];
  }
  south({ row, col }) {
    return this.grid[row + 1][col];
  }
  west({ row, col }) {
    return this.grid[row][col - 1];
  }
  east({ row, col }) {
    return this.grid[row][col + 1];
  }

  getRows() {
    return this.rows;
  }

  getCols() {
    return this.cols;
  }

  size() {
    return this.rows * this.cols;
  }
  fill(value) {
    this.grid = Array.from({ length: this.rows }, () => new Array(this.cols).fill(value));
  }
}
export default Grid;
