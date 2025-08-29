// let arr = [
//   {
//     name: "Priyanshu", 
//     age: 24
//   },
//   {
//     name: "Rocky", 
//     age: 24
//   }, 
//   {
//     name: "Monu", 
//     age: 19 
//   },
//   {
//     name: "Nitin",
//     age: 31
//   },
//   {
//     name: "Sachin",
//     age: 33
//   }
  
// ];

// arr.forEach((num) => {
//   console.log(num.name);
// })

// let array =[1, 3, 5, 7, 9];

// let newArr = array.map((num) =>{
//  return num*num;
// })

// console.log(newArr);

// let arr = [70, 20, 80, 30, 60, 40];

// // let newArr = arr.every((num)=>{
// //  num%10 == 0;
// // })

// // let otherMethod = arr.every((ele) => ele%10==0);

// // console.log(otherMethod);
 

// let findMin = arr.reduce((res, el)=>{
//   if(el<res){
//     return el;
//   }else{
//     return res;
//   }
  
// })


let arr = [2, 4, 6, 8, 10];

// let square= arr.map((num) => {
//     return (num*num);
     
// })
// let sum = square.reduce((res, el) =>{
//     return res + el;
// })
// let avg = sum/arr.length;

// console.log(avg);

let arr2 = arr.map((num)=>{
  return num+5;
})

let newArr = ["rana", "priyanshu", "rocky", "monu", "sachin", "nitin", "rahul", "thakur", "rajput"];


let upperCase = newArr.map((newArray)=> newArray.toUpperCase());


const doubleAndReturnArgs = (arr, ...args) => [
  ...arr, ...args.map((v) => v*2),

];
console.log(doubleAndReturnArgs([2,3,5,6], 3, 4));

let mergeObjects = ((obj, obj2) ={
  ...obj, ...obj2
});

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));