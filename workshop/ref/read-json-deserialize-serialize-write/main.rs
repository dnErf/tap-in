extern crate serde;
extern crate serde_json;
#[macro_use]
extern crate serde_derive;

use std::fs;
use std::io::Write;
use std::process;
use serde_json::Value as JsonValue;

#[derive(Serialize, Deserialize, Debug)]
struct Person {
  name: String
}

fn main() {
  // https://stackoverflow.com/questions/31192956/whats-the-de-facto-way-of-reading-and-writing-files-in-rust-1-x
  // https://www.joshmcguigan.com/blog/understanding-serde/
  // let content = fs::read_to_string("src/_json.txt").unwrap_or_else(|x| x.to_string());
  
  // using jsonValue for unknown struct of json
  let content = fs::read_to_string("src/_json.txt");
  if content.is_err() 
    { eprintln!("something went wrong"); process::exit(1); }
  else {
    // println!("{:#?}", content);
    let deserialized_json = serde_json::from_str(&content.unwrap());
    if deserialized_json.is_ok() {
      let j:JsonValue = deserialized_json.unwrap();
      println!("{}", j[0]["name"]);
      let serialized_json = serde_json::to_string(&j).unwrap();
      println!("{}", serialized_json);
      let mut w = fs::File::create("src/_output.txt").expect("File::create should be able to create a file");
      w.write_all(serialized_json.as_bytes()).expect("this should be able to write all");
    }
  }

  // using serde serialize and deserialize to a known struct of json
  // let content = fs::read_to_string("src/_json.txt");
  // if content.is_err() 
  //   { eprintln!("something went wrong"); process::exit(1); }
  // else {
  //   // println!("{:#?}", content);
  //   let deserialized_json = serde_json::from_str(&content.unwrap());
  //   println!("hello");
  //   if deserialized_json.is_ok() {
  //     let j:Vec<Person> = deserialized_json.unwrap();
  //     println!("{:?}", j);
  //     let serialized_json = serde_json::to_string(&j)
  //       .expect("serde_json::to_string should stringify to serialized_json the passed arguement");
  //     println!("{}", serialized_json);
  //     match fs::write("_output.txt", serialized_json) {
  //       Ok(()) => println!("ok"),
  //       _ => println!("err")
  //     }
  //   }
  // }

}

#[cfg(test)]
mod test {
  // use super::calculate_fuel;
  // #[test]
  // fn assert_calculate_fuel() {
  //   assert_eq!(calculate_fuel(12), 2);
  // }
  // use super::calculate_fuel_iteratively;
  // #[test]
  // fn assert_calculate_fuel_iteratively() {
  //   assert_eq!(calculate_fuel_iteratively(1969), 966);
  // }
}
