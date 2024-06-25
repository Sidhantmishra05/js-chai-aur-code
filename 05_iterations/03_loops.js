//for of

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting="Hello World"
for (const greet of greeting) {
    if(greet ==" "){
        continue;
    }
    // console.log(`Each character of greeting is ${greet}`);
} 
//Maps

const map=new Map();
map.set("IN","INDIA");
map.set("Fr","France");
map.set("UK","United Kingdom");
map.set("IN","INDIA")

// console.log(map);
for (const [keys,value] of map) {
    console.log(`${keys} : ${value}`);
}
const myobject={
    game1: "NFS",
    game2: "PubG"
}
// for (const [keys,value] of myobject) { This will not work
//     console.log(keys,value);
// }
