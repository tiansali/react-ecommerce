import './ItemCounter.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCounter = (props) => {
   
    const [state, setCount] = useState({count: props.initial, stock: props.stock})
    
    const increment = () => {
        if (state.count < state.stock) {
            setCount({...state, count: state.count + 1})
            props.onAdd((state.count + 1), true)
        }
    }
    
    const decrement = () => {
        if (state.count > 0) {
            setCount({...state, count: state.count - 1})
            props.onAdd((state.count - 1), false)
        }
    }

    return (
        <div className='ItemCounterContainer'>
            <div className='ItemCounter'>
                <button className='ItemCounter__button' onClick={decrement}><img src='../images/minus.png'/></button>
                <span className='ItemCounter__display'>{state.count}</span>
                <button className='ItemCounter__button' onClick={increment}><img src='../images/plus.png'/></button>
            </div>
            {state.count > 0 ? <Link className='ItemDetail__button ItemDetail__button--toCart' to='/cart'>Ir al carrito</Link> : null}
        </div>
    )
}

export default ItemCounter