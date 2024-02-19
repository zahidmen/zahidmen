document.getElementById('mostrarBtn').addEventListener('click', function() {
    // Obtener la etiqueta de imagen por su ID
    var imagen = document.getElementById('imagenMostrada');

    // Cambiar la fuente de la imagen
    imagen.src = '/imagen.png'; // Reemplaza con la ruta de tu imagen
    imagen.alt = 'Descripción de la imagen'; // Reemplaza con una descripción adecuada
});