
// let arr = [2, 5, 7, 9, 4, 6, 3, 10, 8, 1];
// let num = 4;

// function array(arr, num){
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>num)
//  console.log(arr[i]);
//   }
 
// }
// array(arr, num);

// let str = "abcdabcdefgggh"

// function getUnique(str){
//   let ans= "";
//   for(let i =0; i<str.length; i++){
//     let currChar = str[i]
//     if(ans.indexOf(currChar)==-1){
//       ans += currChar;
//     }
//   }

// return ans;
// }
// let answer = getUnique(str);
// console.log(answer);



// let country = ['India', 'Canada', 'Unite States of America', 'UAE'];

// function getLongestName(country){
//   let ansIdx= 0;
//   for (let i = 0; i<country.length; i ++){
   
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if(ansLen < currLen){
//       ansIdx = i;
//     }
    
//   }
//   return country[ansIdx];
// }

// let print = getLongestName(country);
// console.log(print);


// let string = "Priyanshurana";

// function countVowels(){
//    let count = 0;
//    for(let i = 0; i<string.length; i++){
//     if(
//       string.charAt(i) == "a"||
//       string.charAt(i) == "e"||
//       string.charAt(i) == "i"|| 
//       string.charAt(i) == "o"|| 
//       string.charAt(i) == "u"
//     ){
//       count++;
//     }
//    }
//    return count;
// }

// let printVowel = countVowels(string);
// console.log(printVowel);
let start = 50;
let end = 100;
function randomNumber(start, end){
  let diff = end - start
  let number = Math.floor(Math.random() * diff + start)
  return number;
}

console.log(randomNumber(start, end));