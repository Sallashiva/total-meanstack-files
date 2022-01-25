function mom(){
    setTimeout(()=>{
        console.log('call mom');
    },5000);

};
function rahul(call){
    setTimeout(()=>{
        console.log('call rahul');
        call();
    },3000);

};
function shiva(abs){
    setTimeout(()=>{
        console.log('call shiva');
       abs(mom);
    },4000);

};
shiva(rahul);


