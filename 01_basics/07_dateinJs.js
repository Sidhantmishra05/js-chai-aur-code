let mydate = new Date();
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toString());
console.log(mydate.toLocaleString());

let myTimeSpan= Date.now;
console.log(Math.floor(myTimeSpan()/1000))
console.log(mydate.getMonth()+1)
let newDate=new Date()
console.log(newDate.toLocaleString(
    'default',{
        weekday:"long"
    }
))

