import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import FormularioSaludo from './components/FormularioSaludo'
import './App.css'

function App() {

  return (
    <div style={{ padding: '30px' }}>

      <h1>Eventos con Componentes</h1>

      <FormularioSaludo />

    </div>
  )
}

export default App
