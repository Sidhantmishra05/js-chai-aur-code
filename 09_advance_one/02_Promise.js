const PromisOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed One");
        resolve()
    },1000)
})
PromisOne.then(function(){
    console.log("PromiseOne Completed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Two");
        resolve()
    },1000)
})
.then(function(){
    console.log("PromiseTwo Completed");
})
const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sidhant",id:"0932",email:"sidhantmishra@964"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
})
const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Sidhant", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Function is Either Resolve or Rejected");
})

async function ConsumePromiseFour(){
    try{
        const response= await PromiseFour
        console.log(response.password);
    }catch{
        console.log(error);
    }
}
ConsumePromiseFour()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } 
//     catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
