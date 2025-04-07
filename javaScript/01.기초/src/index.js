const arr1 = [1, 2, 3, 4, 5];
arr1.pop(); //뒤에꺼지우기
console.log(arr1);
arr1.shift(); // 앞에꺼 지우기
// arr1.splice(start, deleteCount);
arr1.splice(1, 2);
console.log(arr1);
