function ProductCard({ product }) {

    return (
        <div className="card h-100 shadow border-0 rounded-4">
            <img
                src={product.imagen}
                className="card-img-top p-3"
                alt={product.nombre}
                style={{
                    height: '160px',
                    objectFit: 'contain'
                }}
            />
            <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">
                {product.nombre}
                </h5>
                <p className="card-text fs-5 fw-bold text-primary">
                ${product.precio}
                </p>
                <button className="btn btn-dark w-100 rounded-pill">
                Agregar al carrito
                </button>
            </div>
        </div>

    )
}

export default ProductCard
