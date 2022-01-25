var username=document.getElementById('username');
console.log(username);
function login(){
    var username=document.getElementById('username');
    var password=document.getElementById('password');

if (username.value.trim()=='') {
    alert('plse fill user filld');
    username.style.border='2px solid red';
    document.getElementById('info').style.visibility='visible';
    return false;
    
}
else if(username.value.length<=3){
    alert('min valu is3');
    username.style.border='2px solid red';
    document.getElementById('info').style.visibility='visible';
    return false;

}
else{
    return true;
}

}