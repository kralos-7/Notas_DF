function Tarjetav2({ nombre, profesion, edad }) {

    return (
        <div style={{
        border: '1px solid blue',
        padding: '15px',
        borderRadius: '10px',
        width: '250px',
        marginBottom: '10px'
        }}>

        <h2>{nombre}</h2>

        <p>Profesión: {profesion}</p>

        <p>Edad: {edad}</p>

        </div>
    )
}

export default Tarjetav2