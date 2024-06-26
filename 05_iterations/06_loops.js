const coding=['java','c++','c','Python']

// const values=coding.forEach((items)=>{ This will return undefined
//     return items;
// })
// console.log(values);
const myNums=[1,2,3,4,5,6,7,8,9,10];
//1st way without arrow scope so return is not used

const newNum=myNums.filter((num)=> num>4)
console.log(newNum);

//2nd way with arrow scope return is used

const newNum1=myNums.filter((num)=>{
    return num>4
})
console.log(newNum1);

//Same Thing using for each
const newNum2=[]
myNums.forEach((num)=>{
    if(num>4){
        newNum2.push(num)
    }
})
console.log(newNum2);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook=books.filter((bk)=>{
    return bk.edition===2010 && bk.genre==="Fiction"
}) 
console.log(userBook);
