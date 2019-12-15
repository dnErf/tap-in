
let f = nthFib();

for (let i = 0; i < 41; i++) {
  console.log(`${i}:${f(i)}`);
}

function nthFib() {
  let _cache = {}
  return function fib(n:number):number {
    switch(n) {
      case 0:
      case 1: return 1;
      default:
        if (!_cache.contain(n)) {
          _cache[n] = fib(n - 1) + fib(n - 2);
        }
        return _cache[n];
    }
  }
}

