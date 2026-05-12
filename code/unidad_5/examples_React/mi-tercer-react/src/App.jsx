import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Tarjeta from './components/Tarjeta'
import Tarjetav2 from './components/Tarjetav2'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Props en React</h1>

      <Tarjeta
        nombre="Juan"
        profesion="Desarrollador"
        edad={25}
      />

      <Tarjeta
        nombre="Ana"
        profesion="Diseñadora"
        edad={22}
      />

      <Tarjetav2
        nombre="Pedro"
        profesion="Backend Developer"
        edad={30}
      />
    </>
  )
}

export default App
