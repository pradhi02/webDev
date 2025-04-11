console.log("hey this is turtorial of javascript feel free to ask questionsa and have fun") 
var x = 12;
var y = 10; 
var c = "berry"
console.log("the sum of x and y is", x + y+ 13)
console.log("hey",c) 
/*we use type of operator in ourder to find out type of any variable in our js*/ 
console.log(typeof x , typeof y , typeof c) 

const a1=5;
console.log("HELLO a1 is", a1) 
/*a1=6, here we are trying to change the value of const keyword which is ethically not allowed in the in js, we cannot change the value of const keyword*/ 

/*we use 'let' in modern js*/ 

let a=12
let b=13 
a=a+1/*this will be upadate and is allowed*/ 
console.log("the value of a is",a) 

{
    let a=24
    console.log("the value of a",a)}/*over here the answer of the statemnt will be 24, as let is  block scoped*/


/* over her if we try toa access, the a we will get the global valuen of the a */ 
console.log("value of a is",a)  

var z=12
var z=13 /* redclaration of var variable is allowed inside its scope, and var variable has global scope */
console.log("the value of z is",z) 

const Z =14 
console.log("the value of z is",Z) 
/*Z=15 /**this is not allowed and will throw error in our console */
/*console.log("the value of z is",Z) /**not allowed to redeclar and update const varaible in js */ 

let p="harrry";/*string data type*/ 
let q=22; /*number dtyp */
let r=3.33; /* float dataytype can be stored in number also*/
const g =true;  /*boolen dataype*/
let s=undefined; /*undefined data type*/ 
let t=null; /*null data type*/ 
console.log(typeof p, typeof q, typeof r, typeof g , typeof s, typeof t); 
console.log(p,q,r,g,s,t) 

let o={ 
    name:"Prateek", iscoder:"false", age:"23"

} 
console.log(o) /**this will print all the values that are stored in obj o */ 

/*now if we want to add new values to the objectw we can basically do*/ 
o.salary="100000" /*adding new property to the obj*/ 
console.log(o)
o.name="PRADHI" 
console.log(o) 
o.ismarried="false" /*adding new property*/ 
console.log(o) 

let details={
    name:"Sejal", marks:"100", phone:"000099922"
} 
console.log(details)

