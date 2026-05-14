function TarjetaUsuario({ nombre, profesion, edad }) {

  return (
    <div style={{
      border: '1px solid gray',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '10px'
    }}>

      <h2>{nombre}</h2>

      <p>Profesión: {profesion}</p>

      <p>Edad: {edad}</p>

    </div>
  )
}

export default TarjetaUsuario