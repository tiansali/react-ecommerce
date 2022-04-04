import './CounterPrototype.css'
import { useState, useEffect } from 'react'

const CounterPrototype = (props) => {
    const [state, setCount] = useState({count: props.initial, stock: props.stock})

    const increment = () => {
        if (state.count < state.stock) {
            setCount({...state, count: state.count + (props.onAdd || 1)})
        }
    }
    
    const decrement = () => {
        if (state.count > 0) {
            setCount({...state, count: state.count - (props.onAdd || 1)})
        }
    }

    return (
        <div className='counter'>
            <span>Counter prototype</span>
            <span>Stock: {state.stock}</span>
            <div className='counter-container'>
                <button onClick={increment}>+</button>
                <span className='counter-display'>{state.count}</span>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default CounterPrototype