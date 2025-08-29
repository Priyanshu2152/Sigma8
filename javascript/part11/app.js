
// function savetoDb(data, success, failure){
// let internetSpeed = Math.floor(Math.random() *10 ) + 1;
// if(internetSpeed > 4){
//  success();
// }else{
//  failure();
// }
// }

// savetoDb(
//   "apna college", 
//   () =>{
//     console.log(" success: your data was saved : ");
//     savetoDb("hello world", 
//       ()=>{
//       console.log(" success2: your data was saved : ");
//       savetoDb("Priyanshu Rana",
//          ()=>{
//         console.log(" success3: your data was saved : ");
//       }, 
//       ()=>{
//         console.log(" failure3: weak connection. data not saved");
//       }
//     )
//     },
//   ()=>{
//     console.log(" failure2: weak connection. data not saved");
//   })
//   },
//   () => {
//     console.log(" failure: weak connection. data not saved");
//   }
// );
let h1 = document.querySelector("h1");

function changeColor(color, delay){
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{
      let num = Math.floor(Math.random()*10)+1;
      if(num>5){
        console.log(num);
        reject("promise reject");
      }
        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve("color changed");
     }, delay)
  })
}
async function demo(result){
  try{await changeColor("red", 1000);
  
  await changeColor("blue", 1000);
 
  await changeColor("green", 1000);
  
  await changeColor("orange", 1000);
  }catch(err){
    console.log("error catched")
    console.log(err);
  }

  let a = 4;
  console.log(a);

}

// changeColor("red", 1000)
// .then((result)=>{
//   console.log("Color changed to Red");
//   console.log("Result: ", result);
//   return changeColor("blue", 1000);
// })
// .then((result)=>{
//   console.log("Color changed to Blue");
//   console.log("Result: ", result);
//   return changeColor("green", 1000);
// })
// .then((result)=>{
//   console.log("Colro changed tp Green");
//   console.log("Result: ", result);
  
// })

// function savetoDb(data){
  
//   return new Promise((resolve, reject) =>{
//     let internetSpeed = Math.floor(Math.random() *10 ) + 1;
//     if(internetSpeed > 4){
//       resolve("success: data was saved");
//      }else{
//       reject("failure: weak connection");
//      }

//   })

//   }

//   savetoDb("apnaCollege")
//   .then((result)=>{
//     console.log("Data1: promise resolved");
//     console.log("result of promise: ", result);
//     return savetoDb("Priyanshu rana");
//   })
//   .then((result)=>{
//     console.log("Data2: promise2 resolved")
//     console.log("result of promise2: ", result);
//     return savetoDb("Rana Ji");
//   })
//   .then((result)=>{
//     console.log("DATA3: promise3 resolved");
//     console.log("result of promise3: ", result);
//   })
//   .catch((error)=>{
//     console.log("promise rejected")
//     console.log("Error: ", error);
//   })