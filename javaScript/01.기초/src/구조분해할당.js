let c1, c2, c3; //선언 분리 할당
[c1, c2, c3, c4] = ["green", "red", "purple"];

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a, b);
//---------
//객체구조분해할당
let colors = {
  s1: "green",
  s2: "blue",
  s3: "purple",
};

let { s1, s2, s3 } = colors;

if (s1 === "green") {
  console.log("its green ");
}

function solution(a) {
  return console.log(a);
}

//스프레드

//rest 문법
const blueToy = {
  type: "bear",
  price: 15000,
  color: "black",
};

const { type, ...rest } = blueToy;
console.log(rest); //{price: 15000, color: 'black'}

function print(a, b, ...rest) {
  console.log(rest);
}
print(1, 2, 3, 4, 5, 6, 7, 8); //[3, 4, 5, 6, 7, 8]
//배열로 할당하게 됨

function printNum(a, b, c, d, e) {
  return console.log(a, b, c, d, e);
}
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((nums) => [1, 2].includes(nums));
console.log(result);
// printNum(...numbers);
