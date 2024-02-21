
const container = document.getElementById("container");


function make(rows){
    for(i=1; i<=rows; i++){
        const r = document.createElement("div");
        container.appendChild(r).className="make";
        for(j=1; j<=rows; j++){
            const c = document.createElement("div");
            c.innerText=j;
            r.appendChild(c).className="cell";
        }
    }
}
make(16);


// function createBoxes(numberPerRow) {
//     const container = document.getElementById("container");   
//      const total = (numberPerRow * numberPerRow) + numberPerRow;
//     const mod = numberPerRow + 1;
//     for (let i = 1; i < total; i++) {
//       const div = document.createElement('div');
//       if (i % mod === 0) {
//         div.style.cssText = "border: 0; height: 0; width: 100%";
//       } else {
//         div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
//       }
//       container.appendChild(div);
//     }
//   }
//   createBoxes(16);







