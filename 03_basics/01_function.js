function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("D");
}
sayMyName()

// function addTwoNumber(nubmber1,number2){
//     console.log(nubmber1 + number2);
// }
// addTwoNumber(3,4)
function addTwoNumber(nubmber1,nubmber2){
    // let result = nubmber1+nubmber2;
    // return result;
       return nubmber1+nubmber2;
}
const result= addTwoNumber(3,4)
console.log("Result",result);

function isloggedIn(username){
    if(!username){
        console.log("Please Enter username");
        return;
    }
    return `Hello ${username} you just logged in`;
}
console.log(isloggedIn("Sidhant"));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,600,1000,800,500,690));

const user={
    username : "Sidhant",
    price : 599
}

function handelUser(getdetails){
    console.log(`UserName is ${getdetails.username} and price is ${getdetails.price}`);
}
handelUser(user)

const myArray= [120,200,34,909]
function returnSecondValue(value){
    return value[1];
}
console.log(returnSecondValue(myArray));