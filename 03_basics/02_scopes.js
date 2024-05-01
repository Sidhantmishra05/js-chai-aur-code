var c=300;
if(true){
    let a=100;
    const b=200;
    var c= 400;
    console.log("Inner",a);
}
// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username="Sidhant";
    function two(){
        const platform="Youtube"
        console.log(username);
    }
    // console.log(platform);
    two();
}
one();
if(true){
    const username="Sid"
    if(username === "Sid"){
        const platform="youtube";
        console.log(username + platform);
    }
    // console.log(platform);
}
// console.log(username);
//----------------Interesting-----------
console.log(addOne(5));//Can call any where
function addOne(num){
    return num +1;
}
//console.log(addOne(5));
//console.log(addTwo(5));//It gives error Cannot access 'addTwo' before initialization
const addTwo= function(num){
    return num+2
}
console.log(addTwo(5));
