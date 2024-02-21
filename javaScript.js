
const container = document.getElementById("container");
const restart = document.getElementById("restart");
let choose=64;

function make(rows){
    for(i=1; i<=rows; i++){
        const r = document.createElement("div");
        container.appendChild(r).className="make";
        for(j=1; j<=rows; j++){
            const c = document.createElement("div");
            
            
            r.appendChild(c).className="cell";
            
            c.addEventListener("mouseover",()=>{
                c.style.backgroundColor = "black";
            });
            
        }
    }
}

restart.addEventListener("click", ()=>{
    window.location.reload();
})


make(choose);











