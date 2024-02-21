
const container = document.getElementById("container");
const restart = document.getElementById("restart");
const size = document.getElementById("size");
let choose= 16;
console.log(choose);

function make(rows){
    for(i=1; i<=rows; i++){
        const r = document.createElement("div");
        container.appendChild(r).className="make";
        for(j=1; j<=rows; j++){
            const c = document.createElement("div");
            
            c.setAttribute("class", "cell")
            r.appendChild(c);
            
             c.addEventListener("mouseover",()=>{
                 c.style.backgroundColor = "black";
           });
           
        }
    }
    
}


console.log(choose);



size.addEventListener("click", ()=>{
    
        
    let gridSize = prompt("Choose grid size between 16-64:");
    if(gridSize !=null && gridSize >0 && gridSize<=64){
        
        const cell = document.getElementsByClassName("cell");
        for(div of cell){
            div.style.backgroundColor="white";
        }
       

        choose=gridSize;
        console.log(choose);
        make(choose);
    } else{
        alert("wrong input")
    }
})


restart.addEventListener("click", ()=>{
    window.location.reload();
})


make(choose);

console.log(choose);









