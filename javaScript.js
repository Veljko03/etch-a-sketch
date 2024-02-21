
const container = document.getElementById("container");

let choose=16;

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
make(choose);











