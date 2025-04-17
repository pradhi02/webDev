alert("business name generator")

/**We will generate a random number from using math.random() function and  */

let rand=Math.random()
let first, second , third; 

if(rand<0.33){
    first="crazy"
} 
else if(0.33<rand<0.66){
    first="Amazing"
}
else{
    first="Fire"
}  

//generating second part of the name 
rand=Math.random()
if(rand<0.33){
    second="Engine"
} 
else if(0.33<rand<0.66){
    second="Foods"
}
else{
    second="Garments"
}  


//generating third name 
rand=Math.random()
if(0.66<rand<0.99){
    third="Bros"
} 
else if(0.33<rand<0.66){
    third="limited"
}
else{
    third="Hub"
}  
console.log(`${first} ${second} ${third}`)