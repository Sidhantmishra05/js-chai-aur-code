const temperature = 41;

if(temperature===40){
    console.log("Temperature is less than 30");
}
else{
    console.log("Temperature is more than 40");
}
const score=200;
if(score>100){
    let power="fly";
    console.log(`User Power is ${power}`);
}
// console.log(`${power} is `);
const balance=1000;
// if(balance>500) console.log("test") , console.log("Bad Way Blk ");

if(balance<500){
    console.log("Balance is less than 500");
}
else if(balance<750){
    console.log("Less than 750");
}
else{
    console.log("Is greater than 750");
}

const isUserLoggedIn= true;
const debitcard=false;
const GoogleLogin =true;
const FacebooLogin =false;

if(isUserLoggedIn && debitcard){
    console.log("You Are Allowed");
}
else{
    console.log("You Are Not Allowed");
}
if(GoogleLogin || FacebooLogin){
    console.log("Id Confirmed");
}


