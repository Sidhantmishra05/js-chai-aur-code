const userEmail = []
if(userEmail){
    console.log("We have your email");
}
else{
    console.log("We don't have your email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length===0){
    console.log("Array length is Zero");
}
const empObj={}

if(Object.keys(empObj).length ===0){
    console.log("Object is Empty");
}
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 5??10;
//val1=null??10;
// val1 = undefined?? 15;
val1 = null??30??20;
console.log(val1);

//// Terniary Operator

// condition ? true : false

const iceTeaprice =100;

iceTeaprice <=80 ?console.log("Less than 80") : console.log("More than 80");
