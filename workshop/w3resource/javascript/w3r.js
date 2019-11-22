// https://www.w3resource.com/

// 1 method to compare two objects to determine if the first one contains equivalent property values to the second one
let matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// -

// 2 method that converts a comma separated values (CSV) to string to a 2D array
const csv_to_array = (data, delimeter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimeter));

console.log(csv_to_array('a,b\nc,d')); // [["a","b"],["c","d"]]
console.log(csv_to_array('a;b\nc;d', ';')); // [["a","b"],["c","d"]]
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true)); // [["a","b"],["c","d"]]
// -

// 3 a method to convert a comma-separated values (CSV) to string to a 2D array of objects.
// the first row of the string is used as the title row
const CSV_to_JSON = (data, delimiter = ',') => {
  let titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      let values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
}
console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
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
