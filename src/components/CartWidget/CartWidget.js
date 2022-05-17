import './CartWidget.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'
import UserContext from '../../UserContext/UserContext'
import NotificationContext from '../../NotificationContext/NotificationContext'
import { createOrderInFirestore } from '../../services/firebase/firestore'

const CartWidget = () => {

    const { getTotalQuantity, getTotalPrice } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const { cart, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const navigate = useNavigate()
    const currentURI = useLocation().pathname

    const createOrder = () => {
        const order = {
            items: cart,
            buyer: user,
            total: getTotalPrice(),
            date: new Date()
        }

        createOrderInFirestore(order)
            .then(response => {
                clearCart()
                navigate(`./checkout/${response}`)
                setNotification('Orden de compra enviada con éxito', 'green')
            }).catch(error => {
                setNotification(
                    `Error al enviar orden de compra
                    Algunos productos estan fuera de stock:
                    ${error.products.map(item => {
                        return `- ${item.name}`
                    })}`
                    , 'red')
            })
    }

    const handleCartNavigation = () => {
        if(user.firstName && currentURI === '/cart'){
            createOrder()
        } else if (currentURI !== '/cart'){
                navigate('/cart')
        } else {
            navigate('/user')
            setNotification('Debe ingresar su informacion para poder hacer la compra', 'orange')
        }
    }

    if ( getTotalQuantity() > 0 ) {
        return (
            <div className='CartWidget'>
                <img className='CartWidget__img' src='../images/cart.svg' alt='Cart'/>
                <span className='CartWidget__itemCounter'>{getTotalQuantity()}</span>
                <span className='CartWidget__budgetDisplay'>${getTotalPrice()}</span>
                <button className='CartWidget__button' onClick={handleCartNavigation}>
                    {currentURI === '/cart'
                        ? <img 
                            className='CartWidget__button__img CartWidget__button__img--check'
                            src='../images/check.svg'/>
                        : <img 
                            className='CartWidget__button__img CartWidget__button__img--next'
                            src='../images/next.svg'/>
                    }
                </button>
            </div>
        )
    } else return null
}

export default CartWidget