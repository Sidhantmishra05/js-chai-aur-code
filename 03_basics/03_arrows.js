const user ={
    username: "Sidhant",
    price: 200,

    wellcome : function(){
        console.log(this.username);
        console.log(this);
    }
}
// user.wellcome()
// user.username="Sid";
// user.wellcome()
// console.log(this);

// function chai(){
//     let username="Sidhant";
//     console.log(this.username);//this can only be define in object not in function
// }
// chai()
// const chai= function(){
//     let username="Sidhant";
//     console.log(this.username);
// }
// chai()
// const chai= ()=>{
//     let username="Sidhant"
//     console.log(this);
// }
// chai()
const addTwo=(num1,num2)=> {
    return num1+num2
}
console.log(addTwo(7,9));
const addOne=(num1,num2)=> (num1+num2)
//const addOne=(num1,num2)=> num1+num2
console.log(addOne(3,4));
