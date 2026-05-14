function TarjetaBootstrap({ titulo, texto }) {

  return (
    <div className="card mb-3" style={{ width: '22rem' }}>

      <div className="card-body">

        <h5 className="card-title">
          {titulo}
        </h5>

        <p className="card-text">
          {texto}
        </p>

        <button className="btn btn-primary">
          Ver más
        </button>

      </div>

    </div>
  )
}

export default TarjetaBootstrap