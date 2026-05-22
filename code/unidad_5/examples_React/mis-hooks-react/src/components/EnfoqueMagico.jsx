import { useRef } from 'react';

function EnfoqueMagico() {
  // 1. Creamos la "caja" del Ref vacía
  const inputRef = useRef(null);

  const alhacerClic = () => {
    // 3. .current apunta al elemento <input> real del navegador
    inputRef.current.focus(); 
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 2. Conectamos la caja con el elemento usando la propiedad ref */}
      <input ref={inputRef} type="text" placeholder="Escribe aquí..." />
      
      <button onClick={alhacerClic} style={{ marginLeft: '10px' }}>
        ¡Ir al cuadro de texto! 🎯
      </button>
    </div>
  );
}

export default EnfoqueMagico;
