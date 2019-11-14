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
