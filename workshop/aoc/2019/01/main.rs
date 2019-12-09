use std::fs;

fn main() {
  let mut soln_1 = 0;
  let mut soln_2 = 0;
  let content = fs::read_to_string("src/_input.txt").unwrap();
  for line in content.trim().lines() {
    let module_weight:usize = line.parse().unwrap();
    soln_1 += calculate_fuel(module_weight);
    soln_2 += calculate_fuel_iteratively(calculate_fuel(module_weight))
  }
  println!("solution 1 : {}", soln_1);
  println!("solution 2 : {}", soln_2);
}

fn calculate_fuel(module_mass: usize) -> usize {
  (module_mass / 3).saturating_sub(2)
}

recursive
fn calculate_fuel_recursively(module_mass: usize) -> usize {
  if module_mass <= 0 
    { return 0; } 
  else {
    return module_mass + calculate_fuel_recursively(calculate_fuel(module_mass));
    
  }
}

fn calculate_fuel_iteratively(mut module_mass: usize) -> usize {
  let mut result = 0;
  while module_mass > 0 {
    let fuel =  calculate_fuel(module_mass);
    result += fuel;
    module_mass = fuel;
  }
  return result;
}

#[cfg(test)]
mod test {
  use super::calculate_fuel;
  #[test]
  fn assert_calculate_fuel() {
    assert_eq!(calculate_fuel(12), 2);
  }
  use super::calculate_fuel_iteratively;
  #[test]
  fn assert_calculate_fuel_iteratively() {
    assert_eq!(calculate_fuel_iteratively(1969), 966);
  }
}
