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
