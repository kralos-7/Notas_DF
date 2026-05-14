import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import TarjetaBootstrap from './components/TarjetaBootstrap'


function App() {

  return (
    <>

      <TarjetaBootstrap
        titulo="Curso React"
        texto="Bootstrap funcionando correctamente"
      />

    </>
  )
}

export default App
