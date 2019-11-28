// copy from c exercise

fn main() {
  println!("{}", ba1(2, 2)); // 12
  println!("{}", ba2(51)); // 0
}

// 1 method that computes the sum of the two given integer values
// if the two values are the same, then return triple their sum
fn ba1(x:i32, y:i32) -> i32 {
  if x == y {
      (x + y) * 3
  } else {
      x + y
  }
}

// 2 method to get the absolute differene between n and 51
// if n is greater than 51 return triple the absolute difference
fn ba2(n:u32) -> u32 {
  let x = 51;
  if x > n {
    return (n - x) * 3
  } 
  return x - n
}