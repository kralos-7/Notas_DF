// Importa funciones de React Testing Library.
//
// render(): renderiza un componente React en un DOM virtual.
// screen(): permite buscar elementos dentro del DOM renderizado.
import { render, screen } from '@testing-library/react'

// Agrega funciones extra de validación para Jest.
// Por ejemplo:
// toBeInTheDocument()
// toHaveAttribute()
// toHaveTextContent()
import '@testing-library/jest-dom'

// Importa el componente que vamos a probar.
import ProductCard from './ProductCard'

// Objeto de prueba (Mock).
// Simula un producto que normalmente vendría de una API
// o de un archivo de datos.
const productoMock = {

    // Identificador único del producto
    id: 1,

    // Nombre del producto
    nombre: 'Laptop Gamer',

    // Precio del producto
    precio: 15000,

    // Ruta simulada de la imagen
    imagen: 'imagen.jpg'
}

// Agrupa todas las pruebas relacionadas con ProductCard.
describe('Componente ProductCard', () => {

    // Prueba 1:
    // Verifica que el nombre del producto se muestre.
    test('muestra el nombre del producto', () => {

        // Renderiza el componente enviando el producto de prueba.
        render(
            <ProductCard producto={productoMock} />
        )

        // Busca un elemento que contenga el texto
        // "Laptop Gamer" y verifica que exista.
        expect(
            screen.getByText('Laptop Gamer')
        ).toBeInTheDocument()

    })

    // Prueba 2:
    // Verifica que el precio se muestre correctamente.
    test('muestra el precio del producto', () => {

        // Renderiza el componente.
        render(
            <ProductCard producto={productoMock} />
        )

        // Busca el texto "$15000" y verifica que exista.
        expect(
            screen.getByText('$15000')
        ).toBeInTheDocument()

    })

    // Prueba 3:
    // Verifica que exista una imagen.
    test('muestra la imagen del producto', () => {

        // Renderiza el componente.
        render(
            <ProductCard producto={productoMock} />
        )

        // Busca una etiqueta HTML <img>.
        const imagen = screen.getByRole('img')

        // Verifica que la imagen exista en el DOM.
        expect(imagen).toBeInTheDocument()

    })

    // Prueba 4:
    // Verifica que el atributo alt sea correcto.
    test('la imagen tiene el atributo alt correcto', () => {

        // Renderiza el componente.
        render(
            <ProductCard producto={productoMock} />
        )

        // Obtiene la imagen.
        const imagen = screen.getByRole('img')

        // Verifica que el atributo alt
        // tenga el valor "Laptop Gamer".
        expect(imagen)
            .toHaveAttribute(
                'alt',
                'Laptop Gamer'
            )

    })

    // Prueba 5:
    // Verifica que exista el botón.
    test('muestra el boton agregar al carrito', () => {

        // Renderiza el componente.
        render(
            <ProductCard producto={productoMock} />
        )

        // Busca un elemento que contenga el texto
        // "Agregar al carrito".
        expect(
            screen.getByText(
                'Agregar al carrito'
            )
        ).toBeInTheDocument()

    })

})