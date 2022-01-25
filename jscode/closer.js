// colsure 
// function outer() {
//     var outside='iam outer variavb';
//     console.log('outer function');
//     console.log(outside);
//     inner();
//     function inner () {
//         var innside='iam ineer variavb';
//         console.log('inner function');
//         console.log(innside);
//         console.log(outside);

    
// };
// };
// outer();
// function one() {
//     console.log('iam one');
//     };
// function two() {
//         console.log('iam two');
//         return one;
//         };
// function three() {
//             console.log('iam three');
//             return two;
//             };
//             // three()()(); 
//             var variabletwo =  three();
            
        //     var variableone= variabletwo();
        
        //  variableone();
// function callMom(callBack){
// setTimeout(() => {
//     console.log('hi mom');
//     callBack();
    
// }, 5000);
// };
// function callRhaul(){
//     setTimeout(() => {
//         console.log('i rahul');
        
//     }, 1000);
// };
// callMom(callRhaul);

        
// function callMom(callBack){
//     setTimeout(() => {
//         console.log('hi mom');
//         callBack(callDadd);
        
//     }, 5000);
//     };
//     function callRhaul(fun){
//         setTimeout(() => {
//             console.log('i rahul');
//             fun(callGangad);
//         }, 3000);
//     };
//     function callDadd(cas){
//         setTimeout(() => {
//             console.log('i dadd');
//             cas();
//         }, 2000);
//     };
//     function callGangad(){
//         setTimeout(() => {
//             console.log('i gangadhar');
            
//         }, 1000);
//     };
//     callMom(callRhaul);
// function sub(a,b){
//     return a-b;
// };
// function add(a,b){
//     return a+b;
// };
// function mul(a,b){
//     return a*b;
// };
// function opt(a,b,opt,opt2,opt3){
//     var x=opt(a,b);
//     var y=opt2(a,b);
//     var z=opt3(a,b);    
//       return [x,y,z];
// };
// var result=opt(10,20,sub,add,mul);
// console.log(result);


function kothur(pill){
    setTimeout(()=>{
        console.log('your destintion kothu');
       pill(guntur);
    },4000);
};
function piduguralla(gua){
    setTimeout(()=>{
        console.log('your destintion pillll');
    gua(dachepalli);
    },9000);
};
function guntur(diaa){
    setTimeout(()=>{
        console.log('your destintion guntar');
           diaa() ;
    },6000);
};        
function dachepalli(){
    setTimeout(()=>{
        console.log('your destintion dacc');
       
    },5000);
}; 
function hyderbad(kol){
    setTimeout(()=>{
        console.log('your destintion hy');
        kol(piduguralla);     
    },9000);
};

hyderbad(kothur);