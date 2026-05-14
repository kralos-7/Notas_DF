import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import TarjetaSimple from './components/TarjetaSimple'

import './App.css'

function App() {

  return (
    <>
      <TarjetaSimple
        nombre="Umarino"
        profesion="Desarrollador React"
      />
    </>
  )
}

export default App
