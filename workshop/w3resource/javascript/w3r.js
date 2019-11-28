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
