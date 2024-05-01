//// Immediately Invoked Function Expressions (IIFE)
//IIFE is used for immediate execution as well as to remove global pollution,variable.
(function chai(){
    //named iife
    console.log("Hello Sid");
}());
(()=>{
    //unnamed iife of iife
    console.log("Hi Js");
})();