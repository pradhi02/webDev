let a=[93,465,763,1232,123] 


//for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];  //iterates over the arry
    console.log(element)
    
} 

//forEach loop
a.forEach((value,index,arr) => {
    console.log(value,index,arr) //runs a function for each and every element of an array
} ) 


//for-in loop keys, values of an array 

let obj={
    a:1, b:2, c:3
} 

for (const key in obj) { 
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element) 
    }
} 


let fruits=["apple", "bananana","mosusmam"]
for (const iterator of fruits) {
    console.log(iterator)
} 

const p=[1,2,3,4,5]

let newArr = p.map((value)=>{
      return value**2;
}) 
console.log(newArr) 


let pum=[4,83,23,1,112,3,0] 

const greaterThanfive=(e)=>{
if(e>5) return true
} 

