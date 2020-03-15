
impl Solution {
  pub fn surrounded_regions(board: &mut Vec<Vec<char>>) {
    if board.len() == 0 {
      return;
    }
    for x in 0..board.len() {
      Self::depth_first(board, x, 0);
      Self::depth_first(board, x, board[0].len() - 1);
    }
    for y in 0..board[0].len() {
      Self::depth_first(board, 0, y);
      Self::depth_first(board, board.len() - 1, y);
    }
    for x in 0..board.len() {
      for y in 0..board[0].len() {
        if board[x][y] == 'O' {
          board[x][y] = 'X';
        }
        if board[x][y] == '-' {
          board[x][y] = 'O';
        }
      }
    }
  }
  fn depth_first(board: &mut Vec<Vec<char>>, x:usize, y:usize) {
    if Self::is_outside(board.len(), board[0].len(), x, y) {
      return;
    }
    if board[x][y] != 'O' {
      return;
    }
    board[x][y] = '-';
    Self::depth_first(board, x + 1, y);
    Self::depth_first(board, x - 1, y);
    Self::depth_first(board, x, y + 1);
    Self::depth_first(board, x, y - 1);
  }
  fn is_outside(b:usize, r:usize, x:usize, y:usize) -> bool {
    return x < 0 || x >= b || y < 0 || y >= r
  }
}