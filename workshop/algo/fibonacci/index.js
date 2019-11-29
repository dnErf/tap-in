/**
 *  fibonacci is a sequence of whole numbers ...1,1,2,3,5,8... which starts with 1 and 1, and where every number thereafter
 *  is equal to the sum of the previous two number
 */

for (let i = 1; i < 41; i++) {
  console.log(fibonacci(i));
}

function fibonacci(n) {
  if (n <= 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n + 2)
}
