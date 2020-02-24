// you are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b
// if the town judge exists and can be identified, return the label of the town judge, otherwise return -1

function find_judge(N, trust) {
  let i, t, arr = new Array(N + 1).fill(0);
  for (t of trust) {
    arr[t[0]]--;
    arr[t[1]]++;
  }
  for (i = 0; i <= N; i++) {
    if (arr[i] === (N - 1)) {
      return i;
    }
  }
  return -1;
}

console.log(find_judge(3, [[1,3],[2,3]]));
