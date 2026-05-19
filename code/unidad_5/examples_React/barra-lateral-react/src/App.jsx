import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import CartSidebar from './components/CartSidebar'
import products from './data/products'

function App() {

  return (
    <div className="container py-5">

      <CartSidebar products={products} />

    </div>
  )
}

export default App
