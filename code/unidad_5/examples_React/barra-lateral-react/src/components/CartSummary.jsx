function CartSummary({ subtotal, shipping }) {
    const total = subtotal + shipping
    return (
        <div className="mt-4">
        <h5 className="mb-3">
            Resumen del pedido
        </h5>
        <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
        </div>
        <div className="d-flex justify-content-between">
            <span>Envío:</span>
            <span>
            {shipping === 0 ? 'Gratis' : `$${shipping}`}
            </span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fs-4 fw-bold">
            <span>Total:</span>
            <span>${total} USD</span>
        </div>
        </div>
    )
}

export default CartSummary