const conding=['java','c++','python','ruby']
conding.forEach(function(items){
    // console.log(items);
})
conding.forEach((items)=>{
    // console.log(items);
})
function printme(items){
    // console.log(items);
}
conding.forEach(printme)

conding.forEach((items,index,arr)=>{
    console.log(items,index,arr);
})

const mycoding=[
    {
        languageName:'Java',
        languageFileName:'Java'
    },
    {
        languageName:'C++',
        languageFileName:'cpp'
    },
    {
        languageName:'Python',
        languageFileName:'Py'
    }
]

mycoding.forEach((items)=>{
    console.log(items.languageFileName+" => "+items.languageName);

})