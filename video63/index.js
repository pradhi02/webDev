/*in this one we will learn about arrays in Js */ 
let arr=[1,2,3,4,5,6,7,8,9] //indexing starts at 0
console.log(arr)
//console.log(arr.length) 
//arr[0]=777 
//console.log(arr)
  

//let s="Pradhi" 
// console.log(s) 
 //s[0]='o' //since  in this we are trying to mutate a string and strings are immutable  

console.log(typeof arr) 

console.log(arr.toString()) //comverse array to string 

//join method  

console.log(arr.join(" PRADHI ")) 

console.log(arr.pop()) //returns the popped element
console.log(arr) //alter the original array as the last element is poopped out 
 
console.log(arr.push(100)) //adds elements at the end of an array and returns the present length of array 
console.log(arr) //new altered arrat 

arr.push("pradhii")  //this will be pushed to the array 
console.log(arr) 


console.log(arr.shift()) //removes the first element or the element at the 0th index form the array and return it 
console.log(arr)

console.log(arr.unshift(23)) //add elements at the start of an array and returns the array basciall right shifting takes place 
console.log(arr) 

delete(arr[7]) 
console.log(arr) 

let n1=[1,2]
let n2=[3,4]
let n3=[5,6] 

n1.concat(n2)
console.log(n1) //this means concat does not change the existing array, it just returns a new array 
console.log(n1.concat(n2))//return n1+n2 
console.log(n1.concat(n2,n3))//return n1+n2+n3 

console.log(arr.sort())  

let arr2=[7,9,8,10] 
console.log(arr2.sort()) 

let s= ["pradhi","rio","hennnaa"] 
s.sort()
console.log(s) //sorting is done in lexographic order  


console.log(s.splice(1,2,"bennny","haily","slenega") )
console.log(s) 

s.slice(1,3)
console.log(s) //here the original array remains intacted , by this we get to know that. slice() function creats a new array
console.log(s.slice(1,3)) //returns new array 

s.reverse()
console.log(s)//reverse alters the original array and does not returns the new array 


