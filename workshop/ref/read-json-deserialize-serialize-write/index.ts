import { readFile, readFileSync, writeFile, createWriteStream } from 'fs'

// non blocking read file
readFile('src/_json.txt', 'utf-8', function(err, contents) {
  console.log(contents);
  let json_parsed = JSON.parse(contents);
  console.log(json_parsed);
  let json_stringified = JSON.stringify(json_parsed);
  let ws = createWriteStream('src/_output.txt');
  ws.write(json_stringified, 'utf-8');
  ws.on('finish', () => console.log('done writing'));
});

// blocking read file
// let contents = readFileSync('src/_json.txt', 'utf-8');
// let json_parsed = JSON.parse(contents);
// console.log(json_parsed);
// let json_stringified = JSON.stringify(json_parsed);
// console.log(json_stringified);
// writeFile('src/_output.txt', json_stringified, function(err) {
//   if (err) throw err;
// });
