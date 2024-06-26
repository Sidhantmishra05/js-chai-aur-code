const myNums=[1,2,3]

const newNum=myNums.reduce((acc,curval)=>{
    console.log(`acc ${acc} & curval ${curval}`);
    return acc+curval
},0)
console.log(newNum);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total=shoppingCart.reduce((acc,items)=>{
    return acc+items.price
},0)
console.log(total);