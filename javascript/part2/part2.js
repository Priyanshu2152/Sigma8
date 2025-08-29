// let num = 175;

// if(num%10 == 0){
//  console.log("good");
// }
// else{
//   console.log("bad");
// }

// let name = prompt("enter your name : ")
// let age = prompt("enter your age: ")

// alert(`${name} is  ${age} years old.`);

// let quarter = 3;

// switch(quarter){
//   case 1: console.log("January,February,March");
//   break;
//   case 2: console.log("April,May, June");
//   break;
//   case 3: console.log("July, August, September");
//   break;
//   case 4: console.log("October, November, December");
//   break;
// default: console.log("not a quarter")
// }

let a = "abhayh"; 
if((a[0] == 'a' || a[0] == 'A') && (a.length > 5 )){
  console.log("Golden String")
}else{
  console.log("not a golden string");
}

let b = 12;
let c = 19;
let d = 7;

if(b>c){
  if(b>d){
  console.log('b is largest');
}else{
  console.log('d is largest');
}
}else {
  if(c>d){
    console.log("c is largest");
  }else{
    console.log("d is largest");
  }
}

let num1 = 368;
let num2 = 4567897;

if(num1%10 === num2%10){
  console.log("both num has same last digit");
}else{
  console.log("no they don't have same last digit");
}

