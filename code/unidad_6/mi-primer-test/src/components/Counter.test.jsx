import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Counter from './Counter'

describe('Componente Counter', () => {

    test('renderiza el contador en 0', () => {

        render(<Counter />)

        const count = screen.getByTestId('count')

        expect(count).toHaveTextContent('0')
    })

    test('incrementa el contador', () => {

        render(<Counter />)

        const button = screen.getByText('Incrementar')

        fireEvent.click(button)

        const count = screen.getByTestId('count')

        expect(count).toHaveTextContent('1')
    })

    test('decrementa el contador', () => {

        render(<Counter />)

        const button = screen.getByText('Decrementar')

        fireEvent.click(button)

        const count = screen.getByTestId('count')

        expect(count).toHaveTextContent('-1')
    })

})