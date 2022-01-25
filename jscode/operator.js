//   var b= 10;
//   var c= 20;
//   console.log(b);  
//   var d;
//   d= (b>c) ? ("true") : ("false");
//   console.log(d);
//   if(b>c){
//       console.log('if block');
//   }
//   else{
//       console.log('else block');
//   }
//  var y='na';
//   if(b!=y){
//     console.log('if block');
// }
// else{
//     console.log('else block');
// }
// var g= typeof 'true';
// console.log(g);
// console.log("ravi kumar"+ " " + 12);
// console.log("ravi kumar", " " ,12);
// console.log(`ravi is age $('nani',nani)` );
// b+= b;
// console.log(b);
// v=b--;
// console.log(b);
// // given char is vowl or not
// var ch=''; 
// if((ch=='a')||(ch=='e')||(ch=='i')||(ch=='o')||(ch=='u')){
//     console.log('print given valu ' + ch ,"is ", 'vowel');
// }
// else{
//     console.log('print given is consonet');
// }
// // below give elig for magg or not
// var male= 18;
// var femal=22;
// if((male>=21) && (femal>=21)){
// console.log('their eligable for marrag');
// }
// else{
//     console.log('not eligable for margg');
// }
// // logical not operator
// if(!(male>=17)){
//     console.log('tru');
// }
// else{
//     console.log('fal');
// }
// given value find out
var char=prompt( 'enter the value');

if((char=='a')||(char=='e')||(char=='i')||(char=='o')||(char=='u') || (char=='A')||(char=='E')||(char=='I')||(char=='O')||(char=='U')){
    console.log('print vovel');
}
else if((char>='a')&&(char<='z') || (char>='A')&&(char<='Z')) {
console.log('given consonate');
}
else if((char>=0 && char<=9)){
    console.log('print given value is number');
}
else{
    console.log('print given is special charcetr');
}
// var valu;
// valu='a';
// switch(valu){
//     case 'a':{
//         console.log('print given is nine');
//         break; 
//     }
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':{
//         console.log('print given is vovel');
//     }
//     default :{
//         console.log('print given is consonet');
//     }
// }
