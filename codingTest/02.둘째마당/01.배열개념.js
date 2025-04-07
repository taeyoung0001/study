// 몸풀기 문제 p.108 배열정렬하기
function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log("1번", solution([6, 1, 5]));

// 몸풀기 문제 p.112 배열제어하기
function solution1(arr) {
  const arr1 = [...new Set(arr)];
  const arr2 = arr1.sort((a, b) => b - a);

  return arr2;
}
console.log("2번", solution1([1, 2, 3, 1, 4, 6, 23, 6, 2, 4, 1, 9]));

// 몸풀기 문제 p.115 두개뽑아서 더하기
function solution2(arr) {
  const ret = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      ret.push(arr[i] + arr[j]);
    }
  }

  return [...new Set(ret)].sort((a, b) => b - a);
}
console.log("3번", solution2([1, 2, 2, 4, 3]));

// 몸풀기 문제 p.118 수포자 문제
// 1번 수포자 : 1,2,3,4,5,
// 2번 수포자 : 2,1,2,3,2,4,2,5...
// 3번 수포자 : 3,3,1,1,2,2,4,4,5,5,...

// function solution3(answer) {
//   const patterns = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];
//   const score = [0, 0, 0];

//   for (let i = 0; i < answer.length; i++) {
//     for (let j = 0; j < patterns.length; j++) {
//       if (answer === patterns[i % patterns.length]) {
//         score[j] += 1;
//       }
//     }
//   }

//   const maxScore = Math.max(...score);

//   const highestScores = [];
//   for (let i = 0; i < score.length; i++) {
//     if (score[i] === maxScore) {
//       highestScores.push(i + 1);
//     }
//   }

//   return highestScores;
// }

// console.log(solution3([1, 2, 3, 5, 2, 4, 6, 7]));
// 추후 다시 도전 p.121

function solution4(arr1, arr2) {
  const r1 = arr1.length; //arr1의 행의 길이
  const c1 = arr1[0].length; //arr1의 열의 길이
  const r2 = arr2.length; //arr2의 행의 길이
  const c2 = arr2[0].length; // arr2의 열의 길이

  const result = Array.from({ length: r1 }, () => Array(c2).fill(0));

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}

console.log(
  solution4(
    [
      [, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
      [1, 3],
    ]
  )
);

//실패율
