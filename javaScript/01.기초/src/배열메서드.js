let arr = [1, 2, 3, 4, 5];
let newArray = arr.map((ele) => {
  return ele * 10;
});
console.log(newArray); //새로운 배열을 만들어줌, 순회하는 함수

//특정요소를 찾는 함수
let colors = ["green", "blue", "red"];
console.log(colors.at(-1)); //배열의 마지막 값을 찾는다.
console.log(colors.includes("blue")); //true 특정값 있는지, 없는지
console.log(colors.indexOf("green")); //몇번째 요소인지 찾아라
console.log(colors.indexOf("yellow")); //-1 기록됨 //단, 객체의 요소 배열에서는 활용 할 수 없다.
let idx = colors.find((ele) => {
  return ele === "blue";
}); //찾는 '값'
console.log(idx);

//원하는 요소를 추출하는 내장 함수
let filterArray = colors.filter((elm, index, array) => elm === "blue");
console.log(filterArray);
// 조건에 맞는 값을 배열에 담아준다.
let colorsArray = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "orange" },
  { id: 4, color: "black" },
];
let sliceArray = colorsArray.slice(1, 3); //시작, 끝 - 1 까지 배열에 담아준다.
console.log(sliceArray);

//배열 이어붙이기
let arr1 = ["yellow", "blue"];
let arr2 = ["green", "purple"];
let arr3 = arr1.concat(arr2);
console.log(arr3); //배열로 이어주는 메소드
console.log(arr3.join("+")); //문자열로 이어주는 메소드 안에 값을 쓰면 이어주는 중간 문자
console.log(arr3.sort().reverse()); //문자열 내림, 오름차순

//isArray함수 배열인지 아닌지 판별
Array.isArray([1, 49, 123]); //true
Array.isArray([{ id: 1 }, { id: 2 }]); //false
