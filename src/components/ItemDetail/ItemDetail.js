import ItemCounter from '../ItemCounter/ItemCounter'
import CartContext from '../../CartContext/CartContext'
import NotificationContext from '../../NotificationContext/NotificationContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetail = props => {
    const prod = props.product
    const navigate = useNavigate()
    const { setNotification } = useContext(NotificationContext)

    const { addItem, getItemQuantity } = useContext(CartContext)

    const handleCounter = (itemCount, incrementCheck) => {
        addItem({...prod, quantity: itemCount})
        incrementCheck && setNotification(`Se agregaron productos al carrito`, 'green')
    }

    if (prod.name) {
        return(
            <div className="ItemDetail">
                <div className="ItemDetail__imgContainer">
                    <img className="ItemDetail__imgContainer__img" src={prod.img}/>
                </div>
                <div className="ItemDetail__header">
                    <h3 className="ItemDetail__header__title">{prod.name}</h3>
                    <span className="ItemDetail__header__price">${prod.price}</span>
                </div>
                <p className="ItemDetail__description">{prod.description}</p>
                <div className="ItemDetail__footerContainer">
                    <ItemCounter initial={getItemQuantity(prod.id)} stock={prod.stock} onAdd={handleCounter}/>
                    <span onClick={() => navigate(-1)} className="ItemDetail__button ItemDetail__button--continue">CONTINUAR</span>
                </div>
            </div>
        )
    } else {
        return(
            <h5>esperando respuesta</h5>
        )
    }
}

export default ItemDetail