const myArr=[1,2,3,4]
const myArr1=new Array(1,2,3,4)
console.log(myArr);
console.log(myArr1);
myArr.push(5)
myArr1.pop()
console.log(myArr);
console.log(myArr1);
myArr.unshift(6)
myArr1.shift()
console.log(myArr);
console.log(myArr1);
const newArr=myArr.join();
console.log(myArr);
console.log(newArr);
//splice & slice

console.log("A",myArr);
const mynm1=myArr.slice(1,3)
console.log(mynm1);
console.log("B",myArr);
const mynm2=myArr.splice(1,3)
console.log(myArr);
console.log(mynm2);
//So basically when splice is used their is a change in original array whereas when slice is used their is no change in original array. Also in slice their is no range included whereas in splice range is included.


