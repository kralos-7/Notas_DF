function Tarjeta(props) {

    return (
        <div style={{
        border: '1px solid gray',
        padding: '15px',
        borderRadius: '10px',
        width: '250px',
        marginBottom: '10px'
        }}>

        <h2>{props.nombre}</h2>

        <p>Profesión: {props.profesion}</p>

        <p>Edad: {props.edad}</p>

        </div>
    )
}

export default Tarjeta