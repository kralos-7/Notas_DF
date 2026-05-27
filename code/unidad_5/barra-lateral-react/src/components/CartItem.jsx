function CartItem({ product, onDelete }) {
    return (
        <div className="d-flex border-bottom pb-3 mb-3">
        <img
            src={product.image}
            alt={product.title}
            className="rounded"
            width="80"
        />
        <div className="ms-3 flex-grow-1">
            <h6 className="mb-1">
            {product.title}
            </h6>
            <small className="text-muted d-block">
            {product.variant}
            </small>
            <div className="d-flex justify-content-between mt-2">
            <strong>
                ${product.price}
            </strong>
            <button className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(product.id)}    
            >
                Eliminar
            </button>
            </div>
        </div>
        </div>
    )
}

export default CartItem