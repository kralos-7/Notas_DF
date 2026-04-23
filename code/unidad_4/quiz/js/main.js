const areaTexto = document.getElementById("mensaje"); 
const visualizador = document.getElementById("contador"); 
const boton = document.getElementById("btn-limpiar"); 

// Seleccionamos todos los spans
const spans = document.querySelectorAll('span');

// Iteramos y cambiamos el estilo
spans.forEach((span) => {
  span.style.color = 'blue';
});

// Tarea: Detectar cambios en el texto 
areaTexto.addEventListener("input", function() { 
	const longitud = areaTexto.value.trim().length;
	// Eliminamos espacios antes de medir la longitud
	
	visualizador.textContent = longitud; 

	if (longitud > 50) { 
		visualizador.style.color = "red"; 
		boton.hidden = true;
	} else { 
		visualizador.style.color = "black"; 
		boton.hidden = false;
	} 
});

// versiòn flecha
/*
areaTexto.addEventListener("input", () => {
    const longitud = areaTexto.value.trim().length;

    visualizador.textContent = longitud;

    if (longitud > 50) {
        visualizador.style.color = "red";
        boton.hidden = true;
    } else {
        visualizador.style.color = "black";
        boton.hidden = false;
    }
});
*/

boton.onclick = function() { 
	// Error detectado en esta linea por el equipo 
	areaTexto.value = ""; 
	visualizador.textContent = 0; 
	console.log("Limpieza ejecutada"); 
};
