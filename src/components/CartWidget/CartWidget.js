import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    return (
        <div className='CartWidget_container'>
            <img className='CartWidget_img' src='../images/cart.svg' alt='Cart'/>
            <span className='CartWidget_counter'>{getTotalQuantity()}</span>
        </div>
    )
}

export default CartWidget