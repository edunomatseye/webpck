import { useState } from 'react'

const Counter = ()=>{
    const name = "Edun"
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }
    return <button onClick={incrementCounter}>Counter:- {counter}</button>
}

export default Counter
