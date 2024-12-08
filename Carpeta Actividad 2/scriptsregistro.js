document.getElementById('btnRegistrar').addEventListener('click', () => {
  const id = document.getElementById('id').value;
  const cedula = document.getElementById('cedula').value;
  const nombres = document.getElementById('nombres').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const ciudad = document.getElementById('ciudad').value;

  if (id && cedula && nombres && fechaNacimiento && ciudad) {
    // Crear un objeto usuario
    const usuario = { id, cedula, nombres, fechaNacimiento, ciudad };

    // Guardar en localStorage
    localStorage.setItem(`usuario_${id}`, JSON.stringify(usuario));

    // Redirigir a la página de tabla
    window.location.href = 'tabla.html';
  } else {
    alert('Por favor, complete todos los campos.');
  }
});
