import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../CartContext/CartContext'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    if ( getTotalQuantity() > 0 ) {
        return (
            <div className='CartWidget_container'>
                <Link to='/cart'><img className='CartWidget_img' src='../images/cart.svg' alt='Cart'/></Link>
                <span className='CartWidget_counter'>{getTotalQuantity()}</span>
            </div>
        )
    } else return null
}

export default CartWidget