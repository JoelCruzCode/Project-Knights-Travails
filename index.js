import ChessBoard from "./chess-board.js";
console.log("hi");

const Board = ChessBoard(8);
console.log(Board.adjecencyMatrix);
// Board.knightMoves([-1, 9], []);

Board.calculateMoves(3, 3);
