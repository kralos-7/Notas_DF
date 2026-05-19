import CartItem from './CartItem'
import CartSummary from './CartSummary'
import CheckoutButton from './CheckoutButton'

function CartSidebar({ products }) {
    const subtotal = products.reduce(
        (acc, item) => acc + item.price,
        0
    )
    return (
        <div
        className="bg-white border rounded-4 p-4 shadow-sm"
        style={{
            width: '400px'
        }}
        >
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="m-0">
            Mi Carrito
            </h3>
            <span className="badge bg-dark fs-6">
            {products.length} artículos
            </span>
        </div>
        {
            products.map((product) => (
            <CartItem
                key={product.id}
                product={product}
            />
            ))
        }
        <CartSummary
            subtotal={subtotal}
            shipping={0}
        />
        <CheckoutButton />
        </div>
    )
}

export default CartSidebar