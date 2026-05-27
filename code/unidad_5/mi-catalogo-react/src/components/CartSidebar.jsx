function CartSidebar({ cart }) {

  return (
    <div className="border p-3">
      <h3>Mi carrito</h3>
      {
        cart.map((item, index) => (
          <div
            key={index}
            className="mb-2 border-bottom"
          >
            <h6>{item.nombre}</h6>
            <p>${item.precio}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CartSidebar