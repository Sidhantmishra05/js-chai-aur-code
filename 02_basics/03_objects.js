//singleton
const mySym= Symbol("key1")

const JsUser={
    name : "Sidhant",
    "full name" : "Sidhant Mishra",
    email : "sihant@gmail.com",
    [mySym] : "mykey1",
    age : 21,
    city : "Siliguri",
    phone : "+91 9641803944",
    college : "Gmit",
    year : "3rd"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.email = "sidhant@gg.in";
// Object.freeze(JsUser)
JsUser.email = "sidhantishra@gg.com";

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello user");
}
JsUser.greeting2= function () {
    console.log(`Hello User, ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
