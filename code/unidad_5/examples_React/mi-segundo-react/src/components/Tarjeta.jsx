function Tarjeta() {

    const nombre = 'Juan'
    const profesion = 'Desarrollador'
    const edad = 25

    return (
        <div style={{
        border: '1px solid gray',
        padding: '15px',
        borderRadius: '10px',
        width: '250px'
        }}>
        
        <h2>{nombre}</h2>

        <p>Profesión: {profesion}</p>

        <p>Edad: {edad}</p>

        </div>
    )
}

export default Tarjeta