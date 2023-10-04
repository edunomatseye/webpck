import React, { useRef } from 'react'
import Counter, { CounterRef } from './counter'

function Home() {
    const counterRef = useRef<CounterRef>(null)

    return (
        <div>
            <h5>Homepage</h5>
            <h3>This is the new webpack website</h3>
            <span>
                <Counter ref={counterRef} />
                <button onClick={counterRef.current?.resetCounter}>
                    Reset
                </button>
            </span>
        </div>
    )
}

export default Home
