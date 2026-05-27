import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import products from './data/productos'
import CategorySection from './components/CategorySection'
import CartSidebar from './components/CartSidebar'

function App() {
  const categories = [
    "Tecnología",
    "Hogar",
    "Deportes",
    "Ropa"
  ]

  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, product])
  }


  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Catálogo de Productos
      </h1>
      {categories.map(category => (
        <CategorySection
          key={category}
          title={category}
          products={
            products.filter(
              product => product.category === category
            )
          }
          onAdd={addToCart}
        />

      ))}

      <CartSidebar cart={cart} />

    </div>
  )
}

export default App
