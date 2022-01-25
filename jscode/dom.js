// var unorderlist=document.getElementById('unorder');
// var chlidrens=unorderlist.childNodes;
// console.log(chlidrens[1]);
// function removesomeone() {
//     var unlist=document.getElementById('unorder');
//     var childern=unlist.childNodes;
//     console.log(childern);
    // unlist.removeChild(childern[0]);
    // unlist.removeChild(unlist.firstChild);
    // unlist.removeChild(unlist.lastChild);
    // unlist.removeChild(unlist.lastElementChild);
    
// }  
// var ele =document.createElement('h1');

// var cha=document.getElementById('one');
// cha.style.color='red'; 
// let h2 = document.getElementById('one');
// h2.append(ele);
// ele.innerText = 'hi shiva';

// var ab=document.createElement('h3');
// var cha= document.getElementById('one');
// cha.append(ab);
// ab.innerText='hi danan';



function getval(){
    var username=document.getElementById('one').value
    var password=document.getElementById('two').value
    var c=username;
var d=password;
if (username.value=='') {
    return false;
}
else{

    console.log(c);
    return true;

}
}
