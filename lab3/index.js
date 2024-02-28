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
    let cell = event.target;
    cell.classList.toggle("white");
    cell.classList.toggle("black");
}

// Обробник події для <body> - змінює кольори всіх клітинок на протилежні
document.body.addEventListener("click", function() {
    table.classList.toggle("invert-colors");
});




// Додавання таблиці до DOM
document.body.appendChild(table);