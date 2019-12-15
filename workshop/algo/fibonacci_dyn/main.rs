
use std::collections::HashMap;

const RETURN_ONE:u64 = 1;

fn fib_dyn(n:u64, map:&mut HashMap<u64,u64>) -> u64 {
  match n {
    0 | 1 => RETURN_ONE,
    n => {
      if map.contains_key(&n)
        { *map.get(&n).unwrap() }
      else {
        let val = fib_dyn(n - 1, map) + fib_dyn(n - 2, map)
        map.insert(n, val)
        return val
      }
    },
  }
}

fn main() {
  let mut map = HashMap::new()
  for i in 1..41 {
    println!("{}:{}", i, fib_dyn(i, &mut map))
  }
}
