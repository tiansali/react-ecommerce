import './CartContainer.scss'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'

const CartContainer = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className='cartMessage'>
                <h3 className='cartMessage__title'>El carrito esta vacío</h3>
                <Link className='cartMessage__cta' to='/'>Vuelve al inicio</Link>
            </div>
        )
    }

    return(
        <Cart
            cart={cart}
            editable={true}
        />
    )
}

export default CartContainer