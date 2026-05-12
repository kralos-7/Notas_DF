import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import './App.css'

function App() {
  return (
    <div>
      <h1>Mi segunda app React</h1>

      <Saludo />

      <Tarjeta />
    </div>
  )
}

export default App
