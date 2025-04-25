console.log("hellohellooo") 
let bhup= document.getElementsByClassName("box")
console.log(bhup) 
bhup[2].style.backgroundColor="red"; 

//bhup.style.backgroundColor="green"//since container box. returns html collection like, an array of eleelemt we cannot sty;e them directly , we need to use for, or foreach loops to iterate over them  


let box3=document.getElementById("box3")
box3.style.backgroundColor="purple" //targeted by id 

console.log(document.querySelectorAll(".box"))
document.querySelector(".box").style.backgroundColor="yellow" 

document.querySelectorAll(".box")//selects all the elemehts whoes class matches with the class name, .box

document.querySelectorAll(".box").forEach(index=>{
    index.style.backgroundColor="red" //for each index iterate and apply this style 
})  

console.log(document.getElementsByTagName("div")) //returns all the divs as well as the parnet div of the page returns node list an html collectiom 

document.getElementsByTagName("div").forEach(e=>{
    e.style.backgroundColor="pink"
})