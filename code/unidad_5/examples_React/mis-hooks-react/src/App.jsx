import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ContadorDeNotificaciones from './components/ContadorDeNotificaciones';
import EnfoqueMagico from './components/EnfoqueMagico';

function App() {
	// declaramos una variable de estado 'cuenta' y su función para actualizarla
	const [cuenta, setCuenta] = useState(0);	

	return (
		<>
			<button onClick={() => setCuenta(cuenta + 1)}>
				Me hiciste clic {cuenta} veces
	 		</button>
			
			<div className="main-app">
      			<h1>Mi Aplicación de React</h1>
      			<hr />
      			<ContadorDeNotificaciones />

    		</div>
			
			<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      			<h1>Mi Proyecto de React</h1>
      			<p>Probando nuestro primer useRef:</p>
      			<hr />
      			<EnfoqueMagico />
    		</div>
	 	</>
	) 
}

export default App
