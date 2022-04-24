import './Cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../CartContext/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter'

const Cart = () => {
    const { cart, getTotalPrice, removeItem, addItem } = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className='cartMessageContainer'>
                <h2>El carrito esta vacio</h2>
                <Link to='/'>Vuelve al inicio</Link>
            </div>
        )
    }

    return(
        <ul className='Cart'>
            {cart.map(prod => {
                return(
                    <li key={prod.id}>
                        <div className='leftColumn'>
                            <button className='delete' onClick={() => removeItem(prod.id)}>x</button>
                            {prod.quantity}x {prod.name}
                        </div>
                        <div className='priceColumn'>
                            <span className='unitary'>${prod.price}/u.</span>
                            <span className='subtotal'>${prod.price*prod.quantity}</span>
                        </div>
                    </li>
                )
            })}
            <li className='totalContainer'>
                <span className='totalTitle'>Total</span>
                <span className='totalPrice'>${getTotalPrice()}</span>
            </li>
        </ul>
    )
}

export default Cart