const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const price= 123.569
console.log(price.toPrecision(4));

const num=1000000
console.log(num.toLocaleString('en-In'));

//-------------------Math-------------------------------//
console.log(Math.abs(-4));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=1
const max=6
console.log(Math.floor(Math.random() *(max-min+1)+min));

