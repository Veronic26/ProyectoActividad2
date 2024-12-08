document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.getElementById('tablaUsuarios').querySelector('tbody');
  
  // Iterar sobre los datos almacenados en localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    
    // Verificar que la clave corresponde a un registro de usuario
    if (clave.startsWith('usuario_')) {
      const usuario = JSON.parse(localStorage.getItem(clave));
      
      // Crear una fila para cada usuario
      const fila = `
        <tr>
          <td>${usuario.id}</td>
          <td>${usuario.cedula}</td>
          <td>${usuario.nombres}</td>
          <td>${usuario.fechaNacimiento}</td>
          <td>${usuario.ciudad}</td>
        </tr>
      `;
      
      // Añadir la fila a la tabla
      tabla.innerHTML += fila;
    }
  }
});

  