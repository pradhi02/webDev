console.log("lets create a faulty calci")

let a=prompt("enter the first number")
let b=prompt("enter second number")
let c=prompt("enter operation") 

let obj={
    "+":"-", 
    "-":"/",
    "*":"+",
    "/":"**"
    }  
let random=Math.random();
if(random>0.1){
    //do right calculations 
    alert(`the answer of the number is ${eval(`${a} ${c}
         ${b}`)}`)
} 
else{
    c = obj[c]
    alert(`the answer of the number is ${eval(`${a} ${c}
        ${b}`)}`)
}