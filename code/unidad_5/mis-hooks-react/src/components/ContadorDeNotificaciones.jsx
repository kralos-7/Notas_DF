import { useState, useEffect } from 'react';

function ContadorDeNotificaciones() {
  const [notificaciones, setNotificaciones] = useState(0);

  // useEffect se ejecuta DESPUÉS de que el componente se dibuja en pantalla
  useEffect(() => {
    // Aquí modificamos algo que está FUERA de React (el DOM del navegador)
    document.title = `Tienes (${notificaciones}) notificaciones`;
    
    console.log(`Efecto ejecutado: El título ahora es (${notificaciones})`);
  }, [notificaciones]); // <-- SEGUNDO ARGUMENTO: El array de dependencias

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Bandeja de Entrada</h2>
      <p>Notificaciones nuevas: <strong>{notificaciones}</strong></p>
      
      <button onClick={() => setNotificaciones(notificaciones + 1)}>
        Recibir nueva notificación 🔔
      </button>

      <button onClick={() => setNotificaciones(0)} style={{ marginLeft: '10px' }}>
        Limpiar
      </button>
    </div>
  );
}

export default ContadorDeNotificaciones;
