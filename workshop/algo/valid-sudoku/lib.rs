
// https://doc.rust-lang.org/std/collections/struct.HashSet.html
// https://doc.rust-lang.org/stable/rust-by-example/std/hash/hashset.html
use std::collections::HashSet; // guaranteed to not have duplicate elements and it will return false

// method to determine that the 9 x 9 sudoku board  is valid

// o : boolean
// i : 2 dimentional array that contains a string of number or a dot

// each row must contain string 1 - 9 without repetition
// each column must contain string 1 - 9 without repetition
// each of the 9 3x3 sub-boxes of the grid must contain the digits 1 - 9 without repetition

pub fn is_valid_sudoku(board:Vec<Vec<char>>) -> bool {
  let mut x:i8 = 1;
  let mut y:i8 = 1;
  let mut seen = HashSet::new();
  // traverse row
  for x in 1..9 {
    // traverse column
    for y in 1..9 {
      let current_val = board[x][y];
      if current_val != "." {
        // check is its on the hashset else it will insert it
        if !seen.insert(current_val + " found in row " + x)
          || !seen.insert(current_val + " found in column " + y)
          || !seen.insert(current_val + " found in sub box " + x/3 + i/3)
        {
          return false;
        }
      }
    }
  }
  return true;
}