use std::io;

fn main() {
  for i in 1..41 {
    println!("{}", fibonacci(i))
  }
}

fn fibonacci(n:u64) -> u64 {
  if n <= 2 {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n + 2)
}
