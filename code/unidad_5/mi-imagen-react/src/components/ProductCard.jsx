function ProductCard({ producto }) {

    return (
        <div
            className="card border-0 shadow rounded-4 overflow-hidden"
            style={{ width: '18rem' }}
            >
            <img
                src={producto.imagen}
                className="card-img-top p-3"
                alt={producto.nombre}
            />
            <div className="card-body text-center">
                <h5 className="card-title">
                {producto.nombre}
                </h5>
                <p className="card-text fs-5 fw-bold text-primary">
                ${producto.precio}
                </p>
                <button className="btn btn-dark w-100 rounded-pill">
                Agregar al carrito
                </button>
            </div>
        </div>

    )
}

export default ProductCard
