function solutionQ1(S) {
  const N = S.length;
  const M = S[0].length;

  for (let i = 0; i < N; i++) {
    console.log(S[i]);
    for (let j = i + 1; j < N; j++) {
      console.log(i, j);
      for (let k = 0; k < M; k++) {
        if (S[i][k] === S[j][k]) {
          return [i, j, k];
        }
      }
    }
  }

  return [];
}

const S1 = ["abc", "bca", "dbe"];
console.log("Q1 Solution for S1:", solutionQ1(S1));
