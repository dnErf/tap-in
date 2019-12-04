// copy from c exercise

fn main() {
  println!("{}", ba1(2, 2)); // 12
  println!("{}", ba2(51)); // 0
  println!("{}", ba3(20, 25)); // 0
  println!("{}", ba3(20, 30)); // 1
  println!("{}", ba4(90)); // 1 
  println!("{}", ba4(89)); // 0
  println!("{}", ba5(12)) // true
  println!("{}", ba5(37)) // false
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

// 3 method to check 2 given integers
// return true, if one of them is 30 or if their sum is 30
fn ba3(x:i32, y:i32) -> bool {
  return x == 30 || y == 30 || (x + y == 30)
}

// 4 method to check a given integer if it is within 10 of 100 or 200
fn ba4(x:i32) -> i32 {
  if i32::abs(x - 100) <= 10 || i32::abs(x - 200) <= 10 {
    return 1
  }
  return 0
}

// 5 method to check if a given positive number is a multiple of 3 or a multiple of 7.
fn ba5(n:u32) -> bool {
  (n % 3) == 0 || (n % 7) == 0
}
