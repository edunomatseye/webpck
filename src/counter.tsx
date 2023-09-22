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
            <button onClick={incrementCounter}>Counter +: {counter}</button>
            <button onClick={decrementCounter}>Counter -: {counter}</button>
        </>
    )

    return render
}

export default Counter
