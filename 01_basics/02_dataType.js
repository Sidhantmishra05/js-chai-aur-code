"use strict"; //treat all js code as newer version
//alert(3+3) //will not run this way since we are using nodejs not browser

//DataType
// number = 18,437,736,874,454,810,627 (that is, 2**64 - 2**53 + 3) values
//BigInt 
//boolean= true/false
//string= " " Represents a sequence of characters No specific range limit, but practical limits depend on memory and system resources.
//null = standalone value
//undefine 
//symbol = unique

//object

let name= "Sidhant"
let age=21

console.log(typeof null)//null is a object Type
console.log(typeof undefined);// undefined type

/**
 * DataType- ReturnType
 Primitive datatypes:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object



----------------------------
Stack(Primitive DataType), Heap(Non-Primitive DataType)*/
let myName= "Sidhant"
let tempName= myName
tempName= "Sidhu"
console.log(myName)
console.log(tempName)

let userOne={
    email:"sidhant@game.com",
    upi:"sid@7"
}
let userTwo= userOne

userTwo.email="sid@js.com"
console.log(userOne)
console.log(userTwo);

