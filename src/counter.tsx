import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    return (
        <>
            <span>{counter}</span>
            <br />
            <button onClick={incrementCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>
        </>
    )
}

export default Counter
