fetch("https://api.github.com/users").then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
        // console.log(data[1].site_admin);
    })
})
// var car= {
//     color:'blue',
//     brand:'audi',
//     model:2018,
// }
// var store=JSON.stringify(car);
// console.log(typeof store);
// localStorage.setItem('car',store);
// var c=localStorage.getItem('car');
// console.log(c);
// var k=JSON.parse(c);
// console.log(k);
// localStorage.removeItem('car');
// sessionStorage.setItem('car',JSON.stringify(car));
// console.log(JSON.parse(sessionStorage.getItem('car'))); 
