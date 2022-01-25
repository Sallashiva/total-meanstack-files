 // document.write('hello world');
// var ele=document.createElement('h1');
// document.body.append(ele);
// ele.innerText='wellom APP';
// ele.textContent='welcom' ;
// ele.innerHTML= '<a href="#"> google</a>';
// setInterval(()=>{
// var time=new Date();
// ele.textContent= time;
// },2000); 

var b=Array.from(document.getElementsByClassName('select'));
console.log(b);
setInterval(() => {
    b.forEach(cha);
}, 100);
function cha(kal) {
    setInterval(() => {
    var x=Math.random();
    if (x>0 && x<0.25) {
       kal.style.color='red';
        
    }
    else if (x>0.25 && x<0.5) {
        kal.style.color='yellow';
         
     }
    else  if (x>0.5 && x<0.75) {
        kal.style.color='white';
         
     }
     else if (x>0.75 && x<1) {
        kal.style.color='green';
         
     }

  },100);  
};


// var queryelse=Array.from(document.querySelectorAll('div'))
// console.log(queryelse); 
// // queryelse.pop();
// console.log(queryelse);
// queryelse.forEach((ele)=>{
//     ele.style.color='pink';
// });
