// let ans= confirm('did sameer gigted or not');
// let gift=new Promise((resolve,reject)=>{
//     if(ans==true){
//         resolve('promise is kept..');
//     }
//     else {
//         reject('promise failed..');
//     }
// });
// console.log(gift);
// gift.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })  
// function createData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('data create')
//         },5000)
//     })
// }
// async function showData(){

//         console.log('procces started')
//     await createData().then((res)=>{
//         console.log(res);
//     });
//     setTimeout(()=>{
//         console.log('show data');
//     },4000)
// }
// showData();





// function createData(){
//     return new Promise((resolve,reject)=>{
//         let x=20;
//         if(x==10){
//         setTimeout(()=>{
//             resolve('data create')
//         },5000)
//     }
//     else{
//         setTimeout(()=>{
//             resolve('data not create')
//         },5000)

//     }
//     })
// }

// async function showData(){

//         console.log('procces started');
//         try{
//            let res= await createData()
//                 console.log(res);
//         }
//         catch{
//             console.log(err);
//         }
//     setTimeout(()=>{
//         console.log('show data');
//     },4000)
// }
// showData();

    