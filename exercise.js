
//create a factorial function 
const fact=(num)=>{ 
    let result=1; 
    for (let index=1; index <=num; index++) {
        result*=index;
        
    } 
    return result
}  
console.log(fact(5)) 


let a=6
function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr) 
    let newArr=(arr.slice(1,))
    console.log(newArr) 

    console.log(newArr.reduce((a,b)=>{return a*b}))

}   
console.log(factorial(4))