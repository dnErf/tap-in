// javascript does not have hashset but it has a set but does not return a boolean when you add

function isValidSudoku(board:string[][]) {
  let x:number, y:number, seen = new Set();
  for (x = 1; x < 9; x++) {
    for (y = 1; y < 9; y++) {
      let currentVal:string = board[x][y]
      let rowVal:string = `${currentVal} found in row ${x}`
      let columnVal:string = `${currentVal} found in column ${y}`
      let subBoxVal:string = `${currentVal} found in sub box ${x/3} ${y/3}`
      if (!seen.has(rowVal)) {
        seen.add(rowVal)
      }
      if (!seen.has(columnVal)) {
        seen.add(columnVal)
      }
      if (!seen.has(subBoxVal)) {
        seen.add(subBoxVal)
      }
    }
  }
  return true
}