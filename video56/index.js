console.log("hey, i will give you  conditional tutorial today")
console.log("hey whats up how are you")
let a={
    name:"pradhi", 
    age:83 , 
    salary:1222
} 
console.log(a) 

 let b=4; 

 if(b>18){
    console.log("you can drive")
 }
  else{
    console.log("you cannot drive")
  }  
  let x=5;
  let y=10; 
  
  /*arithematic operator*/
  console.log(x+y)
  console.log(x-y)
  console.log(x*y)
  console.log(x**y)
  console.log(x/y)
  console.log(x%y) 
  /*assignment operator*/
  console.log(x+=y)
  console.log(x-=y)
  console.log(x*=y)
  console.log(x/=y)
  console.log(x%=y)
  console.log(x**=y) 
  /*logical opeartor*, gives boolen values or true/false values as answer*/ 
  console.log(x==y) /*is equals to*/
  console.log(x!=y) /**is not equal to */
  console.log(x<=y) /**smaller than or equals to */
  console.log(x>=y) /**is greater than or equals to */
  console.log(x?y:x) /*condition ? value_if_true : value_if_false*/ 
  console.log(x===y) /**checks if the both are equals and of equals types or NOT */
  console.log(x!==y) /**not equalt to and nor the value is same */ 

  /**logical operators */   
  console.log(x&&y) 
  console.log(x!=y && y!=x) /**we are using logical and and it will return true cox for AND we need both the statemes should be true */ 
  console.log(x!=y || y==x) /*if any of the one is true , the whole expression is true*/ 
  console.log(!x) /**logical NOT expession */

  let age=18; 
  let drivingAge=19;
  c=(drivingAge>age) ? (age-drivingAge):(drivingAge-age) /**this says, if (drivingage>age) is truem then execture statement(age-drivingage)*, else exectue statement(drivingage-age)*/
  console.log(c) 

  
  for(let i=0; i<10; i++){ /**basic for loop in JS */
    console.log(++i)
  }
 
  let obj={
    name:"Pradhi", job:"programmer", salary:"129364"
  } 
  console.log(obj.name) /**this targest the name key of the object created */ 
  
for(const key in obj){
  const element=obj[key]/**classic example of for in loop */
  console.log(key,element) 
}
 
/**FOR OF LOOP IN JAVASCRIPT */ 
const o={
  name:"Pradhi"
} 
for(const char of "Pradhi"){
  console.log(char)
} 
 
let person="FUNSUKPABNSGDUYHD";
for(const letters of person){
  console.log(letters); 
} 

let n=0; 
while(n<10){
  console.log(n);
  n++;
} 

let num=100;
do{
  console.log(num)
  n++
} 
while(num>100)


/**lets learn creating functions in javascript */ 
function harry(){
  console.log("hey harry you are so goood");
} 

harry() /**calling function to run in javascript */ 

function sum(a,b){
  console.log(a+b)
   
} 
console.log(sum(4,7)); 

const helloHenry = (name)=> {
  console.log("Helloo"+" "+name)
} 
helloHenry("Pradhi") 

const sum=(a,b)=>{
  return a+b;
} 
console.log(sum(4,5));