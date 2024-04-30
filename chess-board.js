function ChessBoard(size = 8) {
  size;
  let adjecencyMatrix = createBoard(size); // rename to board?

  function createBoard(size) {
    // create size(row) x size(column) board
    let board = [];

    for (let row = 0; row < size; row++) {
      board.push(new Array(8).fill(0));
    }

    return board;
  }

  function knightMoves(start, end) {
    const [row, column] = start;
    const [endRow, endColumn] = end;
    const edge = getSize() - 1;

    if (row < 0 || row > edge || column < 0 || column > edge) {
      console.log("out of bounds");
      return;
    }
  }

  function calculateMoves(row, column, edge = size - 1) {
    const possibleMoves = [];
    possibleMoves.push([row - 2, column + 1]);
    possibleMoves.push([row - 2, column - 1]);
    possibleMoves.push([row + 2, column + 1]);
    possibleMoves.push([row + 2, column - 1]);
    possibleMoves.push([row - 1, column + 2]);
    possibleMoves.push([row - 1, column - 2]);
    possibleMoves.push([row + 1, column + 2]);
    possibleMoves.push([row + 1, column - 2]);
    console.log("possible moves", possibleMoves);
    const paths = possibleMoves.filter((position) => {
      const [row, column] = position;
      return row > 0 && row < edge && column > 0 && column < edge;
    });
    console.log("paths", paths);
    return paths;
  }

  function getSize() {
    return size;
  }
  // check shortest path
  // create matrix reflecting squares 8 x 8

  return { adjecencyMatrix, getSize, knightMoves, calculateMoves };
}

export default ChessBoard;

// more expessive/explicit/semantic but verbose creation of boardMatrix
// for (let row = 0; row < size; row++) {
//   board.push(new Array(size));
//   for (let column = 0; column < size; column++) board[row][column] = 0;
// }
