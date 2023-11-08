import React, { useReducer, forwardRef, useImperativeHandle } from 'react'

const initialState = {
    count: 0,
    error: '',
}
type State = typeof initialState
type ActionType = 'Increment' | 'Decrement' | 'Reset' | 'Initialize'
const reducer = (
    state: State,
    { type, payload }: { type: ActionType; payload: number }
) => {
    switch (type) {
        case 'Increment':
            return { ...state, count: state.count + payload }
        case 'Decrement':
            return { ...state, count: state.count - payload }
        case 'Initialize':
            return { ...state, count: payload }
        case 'Reset':
            return { ...initialState }
        default:
            return state
    }
}
export type CounterRef = {
    resetCounter: () => void
}

type CounterProps = {
    count?: number
}

const Counter = (props: CounterProps, ref: React.Ref<CounterRef>) => {
    const [counter, dispatch] = useReducer(reducer, initialState)

    const incrementCounter = () => {
        dispatch({ type: 'Increment', payload: 1 })
    }

    const decrementCounter = () => {
        dispatch({ type: 'Decrement', payload: 1 })
    }

    const resetCounter = () => {
        dispatch({ type: 'Reset', payload: 0 })
    }

    const initializeCounter = () => {
        dispatch({ type: 'Initialize', payload: 0 })
    }

    useImperativeHandle(ref, () => ({
        resetCounter,
    }))

    return (
        <>
            <span>{counter.count}</span>
            <br />
            <button onClick={incrementCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>
            <button onClick={initializeCounter}>Initialize Counter</button>
        </>
    )
}

export default forwardRef(Counter)
