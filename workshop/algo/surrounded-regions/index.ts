
const SurroundedRegions = function(board:string[][]) {

  if (board === null || board.length === 0)
    return;

  for (let x = 0; x < board.length; x++) {
    DepthFirst(board, x, 0);
    DepthFirst(board, x board[0].length - 1);
  }
  for (let y = 0; y < board[0].length; y++) {
    DepthFirst(board, 0, y);
    DepthFirst(board, board.length - 1, y);
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === 'O') {
        board[x][y] = 'X';
      }
      if (board[x][y] === '-') {
        board[x][y] = 'O';
      }
    }
  }
  
}

function DepthFirst(board:string[][], x:number, y:number) {
  if (isOutside(board.length, board[0].length, x, y))
    return;
  if (board[x][y] !== 'O')
    return;
  DepthFirst(board, x + 1, y);
  DepthFirst(board, x - 1, y);
  DepthFirst(board, x, y + 1);
  DepthFirst(board, x, y - 1);
}

function isOutside(b:number, r:number, x:number, y:number) {
  return x < 0 || x >= b || y < 0 || y >= r
}