const container = document.getElementById("container");


function make(rows,cols){
    for(i=1; i<=rows*cols; i++){
        const cell = document.createElement("div");
        cell.innerText = i;
        container.appendChild(cell).className="cell";
    }
}
make(16,16);







