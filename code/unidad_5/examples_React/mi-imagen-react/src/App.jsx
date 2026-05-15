import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import productos from './data/productos'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        Mi Tienda
      </h1>
      <div className="row">
        {
          productos.map((producto) => (
            <div
              className="col-md-4 mb-4"
              key={producto.id}
            >
              <ProductCard producto={producto} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
