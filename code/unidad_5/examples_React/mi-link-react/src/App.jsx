import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Inicio from './components/Inicio';
import Contacto from './components/Contacto';


function App() {
  return (
    <BrowserRouter>
        {/* Barra de navegación global */}
        <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link> | 
          <Link to="/contacto" style={{ marginLeft: '10px' }}>Contacto</Link>
        </nav>

        {/* El contenedor que decide qué archivo mostrar según la URL */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
