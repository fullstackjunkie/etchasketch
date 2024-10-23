const container = document.querySelector(".container");
const inputText =  document.querySelector("#inText");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let size = inputText.value;
    container.innerHTML = '';  
    const cellSize = 100 / size;  

    for(let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flex = `0 0 ${cellSize}%`;  
        cell.style.height = `${cellSize}vh`;   
        container.appendChild(cell);
            cell.addEventListener("mouseover", (e) => {
                
                e.target.style.backgroundColor = "black";
    
            });
    
            cell.addEventListener("mouseout", (e) => {
    
                setTimeout(function() {
                    e.target.style.backgroundColor = "white";
                }, 2000);
                
            });
        
    }
    
});





