//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("Detected 5");
//     }
//     console.log(element);
// }

// for (let i = 1; i <10; i++) {
//     console.log("Table of "+i);
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i}*${j} = ${i*j}`);   
//     }
// }

let myArray=['Sid','Sidhant','Rittika'];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
//break & contine
for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Number is ${i}`);
}
for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Number is ${i}`);
}
