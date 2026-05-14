import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Saludo from './components/Saludo'
import TarjetaUsuario from './components/TarjetaUsuario'
import ListaProductos from './components/ListaProductos'

import './App.css'

function App() {

  const productos = [
    {
      nombre: 'Laptop',
      precio: 15000,
      categoria: 'Tecnología'
    },
    {
      nombre: 'Mouse',
      precio: 300,
      categoria: 'Accesorios'
    },
    {
      nombre: 'Teclado',
      precio: 800,
      categoria: 'Accesorios'
    }
  ]

  return (
    <>

      <Saludo nombre="Umarino" />

      <TarjetaUsuario
        nombre="Umarion"
        profesion="Developer"
        edad={25}
      />

      <ListaProductos productos={productos} />

    </>
  )
}

export default App
