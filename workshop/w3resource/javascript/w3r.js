// https://www.w3resource.com/javascript-exercises/

// 1 method to compare two objects to determine if the first one contains equivalent property values to the second one
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// -

// 3 method that converts a comma separated values (CSV) to string to a 2D array
const csv_to_array = (data, delimeter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimeter));

console.log(csv_to_array('a,b\nc,d')); // [["a","b"],["c","d"]]
console.log(csv_to_array('a;b\nc;d', ';')); // [["a","b"],["c","d"]]
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true)); // [["a","b"],["c","d"]]
// -

// 4 method to convert a comma-separated values(CSV) string to a 2D array of objects
// first row of the string is used as the title row
const CSV_TO_JSON = (data, delimeter = ',') => {
  let titles = data.slice(0, data.indexOf('\n')).split(delimeter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      let values = v.split(delimeter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
}

console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

// - 

// 5 method to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified
const JSON_TO_CSV = (arr, columns, delimeter = ',') =>
  [
    columns.join(delimeter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimeter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

console.log(JSON_to_CSV([{ x: 100, y: 200 }, { y: 7 }], ['x', 'y']));
/**
 * x,y
 * "100","200"
 * "","7"
 */

//-

// 6 method to target a given value in a nested JSON object, based on the given key
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);

const dog = {
  "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
  "status": "success",
}

console.log(dig(dog, 'status')) // success

//-

// 7 method to converts a specified number to an array of digits
// convert the number to a string, using the spread operator to build an array
const digitize = n => [...`${n}`].map(i => parseInt(i));

// -

// 8 method to filter out the specified values from an specified array.
// return the original array without the filtered values
const pull = (arr, ...args)  => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return pulled;
}

let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c')); // ["b", "b"]

// -

// 9 method to combine the numbers of a given array into an array containing  all combinations
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

console.log(powerset([1, 2])); // [[],[1],[2],[2,1]]

// -

// 10 method to extract out the values at the specified indexes from an specified array
const pull_at_Index = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
}

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3])); // ["b","d"]

// -

// 11 method to generate a random hexadecimal color code
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

// -

// 12 method to remove non-printable ASCII characters from  a  given string
const remove_non_ASCII = str = str.replace(/[^\x20-\x7E]/g, '');

console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ')); // w3resource

// - 

// 13 method to convert the length of a given string in bytes
const byte_Size = str =>  new Blob([str]).size;

console.log(byte_Size('123456')); // 6 
console.log(byte_Size('Ã¢')); // 4

// -

// 14 replace the names of multiple object keys with the values provided
const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
let obj = { name: 'Bob', job: 'Programmer', shoeSize: 100 }
let result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
console.log(result); // { firstName: 'Bob', Actor: 'Programmer', shoeSize: 100 }
// -

// 15 method that returns the minimum-maximum value of an array
// after applying the provided function to set compairing rule

const reduce_Which = (arr, comparator = (a, b) => a - b)
  => arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a ));

  console.log(reduce_Which( // {"name":"Kevin","age":16}
    [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
    (a, b) => a.age - b.age)
  );

// ---

// 17 method to return true if the provided predicate function
// returns true for all elements in a collection, false otherwise

const all = (arr, fn = Boolean) => arr.every(fn);

console.log(all([4, 2, 3], x => x < 1)); // false
console.log(all([1, 2, 3])); // true

// ---

// 18 method to remove specified elements from the left of a given array of elements
const remove_from_left = (arr, n = 1) => {
  return arr.slice(n);
}

console.log(remove_from_left([1, 2, 3], 1)); // [2,3]
console.log(remove_from_left([1, 2, 3], 2)); // [3]

// ---

// 19 method to remove specified elements from the right of a given array of elements
const remove_from_right = (arr, n = -1) => {
  return arr.slice(n);
}

console.log(remove_from_right([1, 2, 3])); // [3]
console.log(remove_from_right([1, 2, 3], -2)); // [2,3]

// ---

// 20 method to extend a  3 - digit color code to a 6 - digit color code
const extend_hex = shortHex =>  
  '#' + shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(extend_hex('#03f')); // #0033ff
console.log(extend_hex('05a')); // #0055aa

// ---

// 21 method to get every nth element in a given array
const every_nth = (arr,  nth) => arr.filter((e, i) => i % nth === nth - 1);

console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2,4,6]

// ---
