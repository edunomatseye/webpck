import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    const render = (
        <>
            <span>{counter}</span>
            <br />
            <button onClick={incrementCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>
        </>
    )

    return render
}

export default Counter
