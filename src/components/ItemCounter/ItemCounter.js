import './ItemCounter.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CounterPrototype = (props) => {
   
    const [state, setCount] = useState({count: props.initial, stock: props.stock})
    
    const increment = () => {
        if (state.count < state.stock) {
            setCount({...state, count: state.count + 1})
            // Aca le paso state.count + 1 porque sino me pasa el valor previo a setCount
            props.onAdd(state.count + 1)
        }
    }
    
    const decrement = () => {
        if (state.count > 0) {
            setCount({...state, count: state.count - 1})
            props.onAdd(state.count - 1)
        }
    }

    return (
        <div className='counter'>
            <div className='counter-container'>
                <button onClick={increment}><img src='../images/plus.png'/></button>
                <span className='counter-display'>{state.count}</span>
                <button onClick={decrement}><img src='../images/minus.png'/></button>
            </div>
            <span>Stock: {state.stock}</span>
            {state.count > 0 ? <Link to='/cart'>Ir al carrito</Link> : null}
        </div>
    )
}

export default CounterPrototype