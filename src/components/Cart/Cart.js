import './Cart.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'

const Cart = (props) => {
    const { getTotalPrice, removeItem, clearCart } = useContext(CartContext)
    const cart = props.cart
    const editable = props.editable

    return(
        <ul className='Cart'>
            {cart.map(prod => {
                return(
                    <li className='Cart__item' key={prod.id}>
                        <div className='leftColumn'>
                            {editable
                                ? <button className='leftColumn__delete' onClick={() => removeItem(prod.id)}>x</button>
                                : null
                            }
                            {editable
                                ? <Link to={`/item/${prod.id}`} className='leftColumn__title'>{prod.name}</Link>
                                : <span className='leftColumn__title'>{prod.name}</span>
                            }
                        </div>
                        <div className='rightColumn'>
                            <span className='rightColumn__quantity'>{prod.quantity}<i>/u. x</i></span>
                            <span className='rightColumn__unitary'>${prod.price}<i>/u.</i></span>
                            <span className='rightColumn__subtotal'>${prod.price*prod.quantity}</span>
                        </div>
                    </li>
                )
            })}
            <li className='Cart__total'>
                <span className='Cart__total__title'>Total</span>
                <span className='Cart__total__price'>${getTotalPrice()}</span>
            </li>
            {editable
                ? <button className='Cart__clearCartButton' onClick={() => clearCart()}>Vaciar carrito</button>
                : null
            }
        </ul>
    )
}

export default Cart