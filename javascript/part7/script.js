let array = [ 9,1, 8, 9, 6, 5, 7];

let fnc = (array) => {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i< array.length; i++){
    sum+= array[i]
    avg = sum/array.length;
    
  }
return avg;
  

}
let print = fnc(array);

console.log(print)



let isEven = (num) =>{
   if(num%2 == 0){
    console.log("number is even")
   }else{
    console.log("number is odd")
   }
   return num;
}
isEven();


const isOdd = (num) => num%2 != 0;
let num = 7;