// let arr = [3, 5, 7, 9, 14, 11];
// let num = prompt("enter number")

// for(let i = 0; i<arr.length; i++){
// if(arr[i] == num){
//   arr.splice(i, 1);
//   console.log("deleted");
// }
  
// }
// console.log(arr);

// let number = 287152;

// let count = 0;
// let copy = number;

// while (copy>0){
//   count++;
//   copy = Math.floor(copy/10);
// }
// console.log(count);
// let number = 287152

// let sum = 0;

// let copy = number;

// while(copy>0){
//   digit = copy % 10;
  
//   sum += digit;

//   copy = Math.floor(copy/10);
  
// }
// console.log(sum);
let n= 3;
let factorial = 1;
for(let i = 1; i<=n; i++){
  factorial *= i; 
  
}
console.log(`factorial of ${n} is ${factorial}`)