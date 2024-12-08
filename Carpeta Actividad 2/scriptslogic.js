// Comparar números
document.getElementById('btnComparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 > num2 ? `El mayor es: ${num1}` : num1 < num2 ? `El mayor es: ${num2}` : 'Son iguales';
    document.getElementById('resultadoComparar').textContent = resultado;
  });
  
  // Mostrar mes
  document.getElementById('btnMes').addEventListener('click', () => {
    const mes = parseInt(document.getElementById('mesInput').value);
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    alert(mes >= 1 && mes <= 12 ? meses[mes - 1] : "Número inválido");
  });
  
  // Gestión de arrays
  const nombres = [];
  document.getElementById('btnAgregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombreInput').value;
    if (nombre) {
      nombres.push(nombre);
      document.getElementById('listaNombres').textContent = nombres.join(', ');
      document.getElementById('nombreInput').value = '';
    }
  });
  