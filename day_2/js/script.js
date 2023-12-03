//Variable in JS
// to define variables in JS we use 'var' or 'let' or 'const' is
// used to define constant variable constant variable are unchangable 

//example 
var num = 12
let user_status = true

//to print data in console 
console.log(num)
console.log(user_status)

//Note 
/* 1. var is use for global scope and let is use for block scope 
2. variable defined with var can be re-declared and updated 
3. variable defined with let can be updated but can't re-declared */  
//varibale re-declaration 
// note: variable can't be access before it is defined so whatever variable is 
let msg = "Hello All!"
function getMessage(){
    console.log(innerMsg) //can't access before assignment 
    console.log(innerMsgOne) //undefined 
    var innerMsgOne = "Variable of var"
    let innerMsg = "WOW"
    console.log(innerMsg) // will print 'WOW'
}
getMessage()
console.log(msg)
console.log(innerMsg) //can't access ouside the scope