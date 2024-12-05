document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".section");

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Ocultar todas las secciones
            sections.forEach((section) => section.classList.add("hidden"));

            // Mostrar la sección correspondiente
            const sectionId = item.getAttribute("data-section");
            document.getElementById(sectionId).classList.remove("hidden");
        });
    });
});

