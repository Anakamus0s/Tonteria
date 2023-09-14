// Función para mostrar la página seleccionada y ocultar las demás
function mostrarPagina(pagina) {
    // Oculta todas las páginas
    var paginas = document.getElementsByClassName("pagina");
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = "none";
    }

    // Muestra la página seleccionada
    document.getElementById("pagina" + pagina).style.display = "block";
}

// Mostrar la primera página por defecto al cargar la página
mostrarPagina(1);