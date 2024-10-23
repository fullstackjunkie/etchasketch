const container = document.querySelector(".container");

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");  // add a class for styling
        container.appendChild(cell);

        cell.addEventListener("mouseover", (e) => {
            
            e.target.style.backgroundColor = "black";

        });

        cell.addEventListener("mouseout", (e) => {

            setTimeout(function() {
                e.target.style.backgroundColor = "white";
            }, 4000);
            
        });
    }
}
