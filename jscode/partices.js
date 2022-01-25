// var sa={
//     jobType:'software',
//     salary:'2000',
// }
// console.log(job);
// console.log(typeof job);
// // job.color='rose';
// console.log(job);
// var job=new Object();
// job.color='red';
// job.dess='fromals';
// job.salary=2000;
// console.log(job);

// var array=[sa,job,'20','a'];
// console.log(array);
// console.log(array[1].color);



// var date=new Date(1995,02,20,4,50,60,500);
// console.log(date);




// var date=new Date(1996,02,31);
// console.log(date);
//  var c =date.getTime();
// console.log(new Date(c));
// var a=new Date(0);
// console.log(a);


// function add(c,b){
//     var a=b+c;
//     console.log(a);
    
// }
// add(-10,5);

// var add=function  (c,b){
//         var a=b+c;
//         console.log(a);
        
//     }
//     add(-18,5);

//  (function (c,b){
//         var a=b+c;
//         console.log(a);
        
//     })(15,5);
//    var da = (a,b)=>{
//          console.log(a+b);

//      }
//      da(1,3);
var arr=[20,50,60,40,82,42,65];
function kum(){
for(var i=0;i<arr.length;i++){
    if(arr[i]==60){
        // continue;
        break;
}
    console.log(arr[i]);
};
};
// for(var i of arr){
//     console.log(i);
// }
// for(var i in arr){
//     console.log(i);
// }
arr.forEach(kum);


 