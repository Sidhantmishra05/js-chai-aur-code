//const tinderUser= new Object();//SingleTon Object
const tinderUser={}; //not SingleTon Object 


tinderUser.id ="28100";
tinderUser.email ="sidhant@google.com";
tinderUser.name = "Sidhant";
console.log(tinderUser);

const regularUser={
    emali :"sidhant@google.com",
    fullname :{
        username : {
            firstname : "Sidhant",
            lastname : "Mishra"
        }
    }
}
console.log(regularUser.fullname.username.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={2:"c",3:"d"}
const obj3 =Object.assign(obj1,obj2)
console.log(obj3);

const user =[
    {
        id : "123",
        name : "Sid"
    },
    {
        id : "124",
        name : "Sud"
    },
    {
        id : "125",
        name : "Sum"
    }
]
console.log(user[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('email'));
console.log(Object.keys(regularUser));

// Object De-Structure 

const course={
    coursename : "Js Chai-Aur-Code",
    platform : "Youtube",
    courseInstructor : "Hitesh Sir"
}

const {courseInstructor : instructor} = course
console.log(instructor);
