let arr = [7, 9, 0, -2];
let n = 3;
let newArr = arr.slice(0, n);
console.log(newArr);

let newArr1 = arr.slice(1);
console.log(newArr1);

// let str = prompt("Enter a string");

// if(str.length===0){
//   console.log("string is blank");
// }else{
//   console.log("String is not blank");
// }
let str = "PrIyaNshu"
let idx = 5;
if(str[idx] == str[idx].toLowerCase()){
  console.log("Yes its lower case");


}else{
  console.log("its not a lower case");
}

let str1 = "     Rana"
console.log(str1);
let newStr = str1.trim();
console.log(newStr);

let arr1 = [4, 7 , 9 ,8, 1, 87];
 
let item = 87;
if(arr1.indexOf(item) != -1){
  console.log("this item is in array");
}else{
  console.log("item is not in array");
}