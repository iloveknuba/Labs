let table = document.createElement("table");

// Додавання рядків та клітинок до таблиці
for (let i = 0; i < 30; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 30; j++) {
        let cell = row.insertCell();
        cell.classList.add("black");
        cell.style.backgroundColor = "black";
        cell.style.width="20px";// Встановлення білого кольору для клітинки
        cell.style.height=" 20px";// Встановлення білого кольору для клітинки
        cell.addEventListener("click", cellClick);

    }
}
function cellClick(event) {
    event.stopPropagation();
    // Отримання посилання на клітинку, на яку клікнули
    let cell = event.target;

    if(cell.classList.contains("black")){

        cell.classList.replace("black","white");
    }
    else
    {

        cell.classList.replace("white","black");
    }
}

document.body.addEventListener("click", function() {
    // Отримати всі клітинки таблиці
    var cells = document.querySelectorAll("td");

    // Змінити кожну клітинку на білий колір
    cells.forEach(function(cell) {
        cell.classList.contains("white")
            ? cell.classList.replace("white","black")
            : cell.classList.replace("black", "white")
    });
});


// Додавання таблиці до DOM
document.body.appendChild(table);