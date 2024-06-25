//for in

const myobject={
    'js':"javascript",
    'cpp':"c++",
    'java':"Java",
    'rb':"Ruby",
    'Py':"Python"
}
for (const key in myobject) {
    console.log(`${key} is a shortcut for ${myobject[key]}`);
}
const programming=["java","c++","Python","Ruby"];
for (const prog in programming) {
    console.log(programming[prog]);
}

// const map=new Map;
// map.set("IN","INDIA");
// map.set("Fr","France");
// map.set("UK","United Kingdom");
// map.set("IN","INDIA")

// for (const key in map) { This Will show nothing
//     console.log(key);
// }