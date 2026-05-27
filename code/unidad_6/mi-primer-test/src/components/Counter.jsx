import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Contador</h1>

            <p data-testid="count">
                {count}
            </p>

            <button onClick={increment}>
                Incrementar
            </button>

            <button onClick={decrement}>
                Decrementar
            </button>
        </div>
    )
}

export default Counter