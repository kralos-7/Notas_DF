import { useState } from 'react'

function FormularioSaludo() {

  // ESTADOS
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  // EVENTO CLICK
  function saludar() {

    if (nombre === '') {
      setMensaje('Escribe tu nombre')
      return
    }

    setMensaje(`Hola ${nombre} 👋`)
  }

  // EVENTO INPUT
  function cambiarNombre(event) {
    setNombre(event.target.value)
  }

  // EVENTO LIMPIAR
  function limpiar() {
    setNombre('')
    setMensaje('')
  }

  return (
    <div style={{
      border: '1px solid gray',
      padding: '20px',
      borderRadius: '10px',
      width: '350px'
    }}>

      <h2>Formulario de saludo</h2>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={cambiarNombre}
        style={{
          padding: '10px',
          width: '90%',
          marginBottom: '10px'
        }}
      />

      {/* BOTONES */}
      <button
        onClick={saludar}
        style={{
          marginRight: '10px'
        }}
      >
        Saludar
      </button>

      <button onClick={limpiar}>
        Limpiar
      </button>

      {/* MENSAJE */}
      <h3>{mensaje}</h3>

    </div>
  )
}

export default FormularioSaludo