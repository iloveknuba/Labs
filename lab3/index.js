let table = document.createElement("table");


for (let i = 0; i < 30; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 30; j++) {
        let cell = row.insertCell();
        cell.classList.add("black");
        cell.style.backgroundColor = "black";
        cell.style.width="20px";
        cell.style.height=" 20px";
        cell.addEventListener("click", cellClick);

    }
}
function cellClick(event) {
    event.stopPropagation();
    let cell = event.target;
    cell.classList.toggle("white");
    cell.classList.toggle("black");
}


document.body.addEventListener("click", function() {
    table.classList.toggle("invert-colors");
});





document.body.appendChild(table);