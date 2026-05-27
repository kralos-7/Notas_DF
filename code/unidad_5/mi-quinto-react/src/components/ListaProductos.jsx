function ListaProductos({ productos }) {

  return (
    <div>

      <h2>Lista de productos</h2>

      {
        productos.map((producto, index) => (
          <div
            key={index}
            style={{
              border: '1px solid gray',
              padding: '10px',
              marginBottom: '10px'
            }}
          >

            <h3>{producto.nombre}</h3>

            <p>Precio: ${producto.precio}</p>

            <p>Categoría: {producto.categoria}</p>

          </div>
        ))
      }

    </div>
  )
}

export default ListaProductos