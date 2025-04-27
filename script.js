alert("we will change the color of the boxesssss") 
 const boxes= document.querySelectorAll(".box") 

boxes.forEach(index=>{
    //generation of random value 
    const r= Math.floor(Math.random()*256); //red- 0-255 colors  
    const g= Math.floor(Math.random()*256); //green 0-255 colors  
    const b= Math.floor(Math.random()*256); //blue- 0-255 colors   
     const randomColor= `rgb(${r},${g},${b})`; 

     index.style.backgroundColor=randomColor; 
    
    
}); 