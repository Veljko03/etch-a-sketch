
const container = document.getElementById("container");
const restart = document.getElementById("rst");
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
                 c.style.backgroundColor = document.getElementById("favcolor").value;
           });
           
        }
    }
    
}


console.log(choose);





size.addEventListener("click", ()=>{
    
        
    let gridSize = prompt("Choose grid size between 1-100:");
    if(gridSize !=null && gridSize >0 && gridSize<=100){
        
        
        while(container.firstChild){
            container.firstChild.remove();
        }
        choose=gridSize;
        console.log(choose);
        make(choose);
    } else{
        alert("wrong input")
    }
})


restart.addEventListener("click", ()=>{
    while(container.firstChild){
        container.firstChild.remove();
    }
    make(choose);
})


make(choose);

console.log(choose);









