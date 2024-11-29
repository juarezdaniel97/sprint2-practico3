
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el campo de búsqueda y la tabla
    const inputBuscar = document.getElementById("inputBuscar");
    const tablaSuperHero = document.getElementById("tablaSuperHero");

    // Agrega un evento para filtrar mientras el usuario escribe
    inputBuscar.addEventListener("input", () => {
        const filterText = inputBuscar.value.toLowerCase(); // Convierte el texto a minúsculas para comparación
        const rows = tablaSuperHero.getElementsByTagName("tr"); // Todas las filas de la tabla

        // Itera por cada fila y verifica si coincide con el texto de búsqueda
        Array.from(rows).forEach(row => {
            const superheroName = row.cells[0].textContent.toLowerCase(); // Primer columna: Superhéroe
            if (superheroName.includes(filterText)) {
                row.style.display = ""; // Muestra la fila si coincide
            } else {
                row.style.display = "none"; // Oculta la fila si no coincide
            }
        });
    });
})