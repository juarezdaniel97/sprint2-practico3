
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el campo de búsqueda y la tabla
    const inputBuscar = document.getElementById("inputBuscar");
    const tablaSuperHero = document.getElementById("tablaSuperHero");

    
    inputBuscar.addEventListener("input", () => {
        const filterText = inputBuscar.value.toLowerCase();
        const rows = tablaSuperHero.getElementsByTagName("tr");

        // Itera por cada fila y verifica si coincide con el texto de búsqueda
        Array.from(rows).forEach(row => {
            const superheroName = row.cells[0].textContent.toLowerCase(); // Primer columna: Superhéroe (nombre)
            if (superheroName.includes(filterText)) {
                row.style.display = ""; // Muestra la fila si coincide
            } else {
                row.style.display = "none"; // Oculta la fila si no coincide
            }
        });
    });
})