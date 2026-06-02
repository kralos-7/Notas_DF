// Importa funciones de React Testing Library
// render: renderiza componentes React para probarlos
// screen: permite buscar elementos en el DOM renderizado
// fireEvent: simula eventos del usuario (click, change, etc.)
import { render, screen, fireEvent } from '@testing-library/react'

// Agrega matchers extra para Jest, por ejemplo:
// toHaveTextContent(), toBeInTheDocument(), etc.
import '@testing-library/jest-dom'

// Importa el componente que vamos a probar
import Counter from './Counter'

// Agrupa todas las pruebas relacionadas con el componente Counter
describe('Componente Counter', () => {

    // Primera prueba:
    // Verifica que el contador inicie en 0
    test('renderiza el contador en 0', () => {

        // Renderiza el componente en un DOM virtual
        render(<Counter />)

        // Busca un elemento que tenga:
        // data-testid="count"
        const count = screen.getByTestId('count')

        // Comprueba que el texto mostrado sea "0"
        expect(count).toHaveTextContent('0')
    })

    // Segunda prueba:
    // Verifica que el botón Incrementar funcione
    test('incrementa el contador', () => {

        // Renderiza el componente
        render(<Counter />)

        // Busca el botón que contiene el texto "Incrementar"
        const button = screen.getByText('Incrementar')

        // Simula un clic del usuario sobre el botón
        fireEvent.click(button)

        // Obtiene nuevamente el elemento que muestra el contador
        const count = screen.getByTestId('count')

        // Verifica que ahora el contador sea 1
        expect(count).toHaveTextContent('1')
    })

    // Tercera prueba:
    // Verifica que el botón Decrementar funcione
    test('decrementa el contador', () => {

        // Renderiza el componente
        render(<Counter />)

        // Busca el botón con el texto "Decrementar"
        const button = screen.getByText('Decrementar')

        // Simula un clic sobre el botón
        fireEvent.click(button)

        // Obtiene el elemento del contador
        const count = screen.getByTestId('count')

        // Verifica que el contador ahora sea -1
        expect(count).toHaveTextContent('-1')
    })

})